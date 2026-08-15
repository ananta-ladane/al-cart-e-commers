const getdb = require('../utils/database').getdb;


class store {

    insertstore(name, email, city, state, country, password) {
        let db = getdb();

        let data = db.collection("store").insertOne({ name: name, email: email, city: city, state: state, country: country, password: password }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })
        return data
    }

    logindata(email, pass) {
        let db = getdb();

        let data = db.collection("store").find({ email: email, password: pass }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }
}


exports.store = store;