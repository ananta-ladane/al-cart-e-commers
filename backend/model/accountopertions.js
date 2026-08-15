const getdb = require("../utils/database").getdb;


class Account {

    newaccount(username, email, role, pass) {

        let db = getdb();

        let chackemail = db.collection("eaccount").find({ $or: [{ email: email }, { role: role }] }).toArray().then((success) => {
            console.log(success)

            if (success.length === 0) {
                let data = db.collection("eaccount").insertOne({ username: username, email: email, password: pass, role: role }).then((success) => {
                    console.log(success)
                    return success
                }).catch((error) => {
                    console.log(error)
                    return error
                })
                return data
            } else {
                return { status: "Existed" }
            }
        }).catch((error) => {
            console.log(error)
            return error
        })

        return chackemail;

    }

    accountlogin(email, role) {

        let db = getdb();
        let data = db.collection("eaccount").find({ $and: [{ email: email }, { role: role }] }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    fuserprofile(eid) {

        let db = getdb();

        let data = db.collection("eaccount").findOne({ email: eid }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(success)
            return error
        })


        return data
    }

    fsellerpro(eid) {
        let db = getdb();

        let data = db.collection("eaccount").findOne({ email: eid }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

}


exports.Account = Account;