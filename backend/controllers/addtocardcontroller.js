const Acard = require("../model/addtocardopertions").Acard;


exports.productasdd = (req, res) => {

    let usereid = req.session.eid;
    console.log("this is the usereid of session" + usereid)
    console.log("session:", req.session);
    console.log("sessionID:", req.sessionID);

    let pid = req.body.pid;
    let url = req.body.url;
    let pname = req.body.pname;
    let pdis = req.body.pdis;
    let price = req.body.price;

    let data = new Acard();

    let result = data.addCardData(usereid, pid, url, pname, pdis, price);

    result.then((success) => {
        console.log(success)

    }).catch((error) => {
        console.log(error)
    })
}

exports.getcarddata = (req, res) => {

    let eid = req.user.email;
    console.log("this is the user eid for add to card" + eid)

    let data = new Acard();

    let result = data.getproductcard(eid)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.prodelcard = (req, res) => {

    let id = req.params.id;
    let eid = req.session.eid

    let data = new Acard();

    let result = data.rcardpro(id, eid)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}