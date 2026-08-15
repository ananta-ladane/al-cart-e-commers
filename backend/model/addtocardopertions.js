const { ObjectId } = require("mongodb");


const getdb = require("../utils/database").getdb;



class Acard {

    addCardData(usereid, pid, url, pname, pdis, price) {

        let db = getdb();

        let data = db.collection("addtoacrd").insertOne({ usereid: usereid, pid: pid, url: url, pname: pname, pdis: pdis, price }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })
        return data;
    }

    getproductcard(eid) {

        let db = getdb();

        let data = db.collection("addtoacrd").find({ usereid: eid }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    rcardpro(id, eid) {
        let db = getdb();

        let did = new ObjectId(id)

        let data = db.collection("addtoacrd").deleteOne({ _id: did, eid: eid }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data

    }



}

exports.Acard = Acard;