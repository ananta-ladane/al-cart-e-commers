
const Product = require("../model/productopertion").Product;


exports.addProduct = (req, res) => {

    let eid = req.user.email;
    let url = req.body.Url;
    let pname = req.body.Pname;
    let pdis = req.body.Pdis;
    let price = req.body.Price;

    let data = new Product();

    let result = data.insertproduct(eid, url, pname, pdis, price);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.getproductdata = (req, res) => {

    let data = new Product()

    let result = data.fproduct()

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.getsingleproduct = (req, res) => {

    let pid = req.params.id;
    console.log(pid)
    console.log("this is the single product find id")

    let data = new Product()

    let result = data.getproductone(pid)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.allstoreproducts = (req, res) => {

    let eid = req.session.eid;

    let data = new Product();

    let result = data.getstoreproducts(eid);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.editprodctdata = (req, res) => {
    console.log("this is find the edit prodcut data")

    let id = req.params.id;

    let data = new Product();

    let result = data.feditpro(id)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.prodeldata = (req, res) => {

    console.log("this is the del product midellware")

    let id = req.params.id;

    let data = new Product();

    let result = data.deldatapro(id);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.uproductdata = (req, res) => {

    let id = req.params.id;

    let udata = {
        url: req.body.Purl,
        pname: req.body.Pname,
        pdis: req.body.Pdis,
        price: req.body.Price
    }

    let data = new Product();

    let result = data.prodataup(id, udata)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}