const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoconnect = (callbacke) => {

    MongoClient.connect(process.env.MONGO_URI).then((success) => {
        console.log(success)
        _db = success.db("developer");
        console.log("database connect successfully...!")
    }).catch((error) => {
        console.log(error)

    })

    callbacke();
}

const getdb = () => {
    if (_db) {
        return _db;
    } else {
        console.log("no database found");
    }
}

exports.mongoconnect = mongoconnect;

exports.getdb = getdb;