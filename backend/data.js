const { MongoClient, ObjectId, GridFSBucket } = require("mongodb");

const uri = process.env.DB_CONN;

const client = new MongoClient(uri);

let db;
let imageBucket;

async function connectToDatabase() {
    try {
        await client.connect();
        db = client.db("drinkData");
        imageBucket = new GridFSBucket(db, {
            bucketName: "images",
            chunkSizeBytes: 1024 * 1024
        })
    } catch(e) {
        console.error(e);
    }

}

function getDatabase() {
    return db;
}

async function verifyImage(imageId) {
    const objId = new ObjectId(imageId);
    const files = await imageBucket.find({_id: objId}).toArray();
    let result = {
        exists: false,
    }
    if(files.length > 0) {
        result.exists = true;
        result.contentType = files[0].metadata.contentType;
        result.name = files[0].filename;
    }
    return result;
}

async function getImageStream(imageId) {
    return imageBucket.openDownloadStream(new ObjectId(imageId));
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDatabase: getDatabase,
    verifyImage: verifyImage,
    getImageStream: getImageStream
}