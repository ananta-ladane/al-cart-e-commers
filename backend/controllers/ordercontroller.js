const OrderProduct = require("../model/orderpopertions").OrderProduct;


exports.inserorderdata = (req, res) => {

    console.log(req.body)

    console.log("USER:", req.user);
    console.log("EMAIL:", req.user?.email);

    let eid = req.user?.email;

    console.log("EID:", eid);
    

    let pid = req.body.Pid;
    let sid = req.body.Sid;
    let quantity = req.body.Count;
    let tprice = req.body.Totalprice;

   


    let data = new OrderProduct();

    let result = data.orderadd(pid, sid, eid, quantity, tprice);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.getcomfurmpro = (req, res) => {

    let id = req.params.id;

    let data = new OrderProduct();

    let result = data.comfprodata(id)

    result.then((success) => {
        console.log(success)
        res.json(success)

    }).catch((error) => {
        console.log(error)
    })
}

exports.paymentstatus = (req, res) => {

    let oid = req.params.id;


    console.log(oid);
    console.log("this is payment status update id");

    let data = new OrderProduct();

    let result = data.changestatus(oid);

    result.then((success) => {
        console.log(success);
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })

}

exports.currentord = (req, res) => {

    let id = req.params.id;

    let data = new OrderProduct();

    let result = data.ordertra(id);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.getallordersdata = (req, res) => {
    console.log("this is get all orders")

    let eid = req.user.email;

    console.log(eid)
    let data = new OrderProduct();

    let result = data.allorders(eid);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}