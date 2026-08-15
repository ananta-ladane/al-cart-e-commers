const { ObjectId } = require("mongodb");

const getdb = require("../utils/database").getdb;


class OrderProduct {

    orderadd(pid, sid, eid, quantity, tprice) {

        let db = getdb();

        let proid = new ObjectId(pid)

        let data = db.collection("orderpro").insertOne({ pid: proid, sid: sid, eid: eid, quantity: quantity, tprice: tprice, status: "0" }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })
        return data;
    }

    comfprodata(id) {

        let db = getdb();
        let oid = new ObjectId(id)

        let data = db.collection("orderpro").aggregate([{ $match: { _id: oid } }, {
            $lookup: {
                from: "productdata", localField: "pid",
                foreignField: "_id", as: "comfurmprodata"
            }
        }]).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    saverazorpayorder(oid, razorpayorderid) {
        let db = getdb();

        let id = new ObjectId(oid)

        let data = db.collection("orderpro").updateOne({ _id: id }, {
            $set: {
                razorpayorderid: razorpayorderid, status: "1", paymentdate: new Date().toLocaleDateString("en-CA"), expecteddelivery: new Date(new Date().setDate(new Date().getDate() + 8)).toLocaleDateString("en-CA")
            }
        }).then((success) => {
            console.log(success)
            return success;
        }).catch((error) => {
            console.log(error)
            return error;
        })
        return data
    }


    changestatus(oid) {

        let db = getdb();

        let id = new ObjectId(oid)

        let data = db.collection("orderpro").updateOne({ _id: id }, {
            $set: {
                status: "1", paymentdate: new Date().toLocaleDateString("en-CA"), expecteddelivery: new Date(new Date().setDate(new Date().getDate() + 8)).toLocaleDateString("en-CA")
            }
        }).then((success) => {
            console.log(success)
            return success;
        }).catch((error) => {
            console.log(error)
            return error;
        })
        return data
    }

    ordertra(id) {

        let db = getdb()
        let oid = new ObjectId(id)

        let data = db.collection("orderpro").aggregate([{ $match: { _id: oid } }, {
            $lookup: {
                from: "productdata", localField: "pid",
                foreignField: "_id", as: "comfurmprodata"
            }
        }]).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    allorders(eid) {

        let db = getdb();

        let data = db.collection("orderpro").aggregate([{ $match: { $and: [{ eid: eid }, { status: "1" }] } }, { $sort: { paymentdate: -1 } }, {
            $lookup: {
                from: "productdata", localField: "pid",
                foreignField: "_id", as: "comfurmprodata"
            }
        }]).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }
}

exports.OrderProduct = OrderProduct;