
const getdb = require("../utils/database").getdb;


class User {



    femail(email) {

        let db = getdb();

        let data = db.collection("euser").find({ email: email }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data

    }

    upass(email, pass) {

        let db = getdb();

        let data = db.collection("euser").updateOne({ email: email }, { $set: { password: pass } }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

}

exports.User = User;


