const { MongoClient } = require("mongodb");

const uri = process.env.DB_CONN;

const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
    try {
        await client.connect();
        db = client.db("drinkData");
    } catch(e) {
        console.error(e);
    }

}

function getDatabase() {
    return db;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDatabase: getDatabase
}