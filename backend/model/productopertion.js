const { ObjectId } = require("mongodb");

const getdb = require("../utils/database").getdb;


class Product {

    insertproduct(eid, url, pname, pdis, price) {

        let db = getdb();

        let data = db.collection("productdata").insertOne({ eid: eid, url: url, pname: pname, pdis: pdis, price: price }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    fproduct() {
        let db = getdb();

        let data = db.collection("productdata").find().toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    getproductone(pid) {

        let db = getdb();

        let id = new ObjectId(pid)
        console.log("this is the single product id in model" + id)
        let data = db.collection("productdata").findOne({ _id: id }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    getstoreproducts(eid) {

        let db = getdb();

        let data = db.collection("productdata").find({ eid: eid }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    feditpro(id) {

        let db = getdb()

        let pid = new ObjectId(id)
        let data = db.collection("productdata").findOne({ _id: pid }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    deldatapro(id) {
        let db = getdb();

        let did = new ObjectId(id)

        let data = db.collection("productdata").deleteOne({ _id: did }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    prodataup(id, udata) {

        let db = getdb();
        console.log(id)
        let uid = new ObjectId(id)
        console.log(uid)
        let data = db.collection("productdata").updateOne({ _id: uid }, { $set: udata }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }
}

exports.Product = Product;