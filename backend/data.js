const { MongoClient, ObjectId, GridFSBucket } = require("mongodb");

const uri = process.env.DB_CONN;

const client = new MongoClient(uri);

let db;
let imageBucket;

/**
 * Initializes all database-related variables and connects to MongoDB. This should be run before any other function
 */
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

/**
 * 
 * @returns The database being used
 */
function getDatabase() {
    return db;
}

/**
 * Verifies if an image with the given id exists within the database
 * @param {number} imageId - The id of the image being verified
 * @returns An object with the 'exists', 'contentType', and 'name' properties. The 'exists' property specifies whether or not the
 * image was found. The 'name' and 'contentType' properties are metadata about the image, which are only include if 'exists' == true
 */
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

/**
 * Fetches an image from the database based on a given ID.
 * @requires The given ID must be a valid image ID, otherwise the function will throw. Use verifyImage first to make sure you're using a
 * valid ID
 * @param {number} imageId - The id of the image being retrieved 
 * @returns The image as a download stream
 */
async function getImageStream(imageId) {
    return imageBucket.openDownloadStream(new ObjectId(imageId));
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDatabase: getDatabase,
    verifyImage: verifyImage,
    getImageStream: getImageStream
}