const store = require("../model/storeopertions").store;



exports.storeinsert = (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let password = req.body.password;

    let data = new store()

    let result = data.insertstore(name, email, city, state, country, password);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.storeloginn = (req, res) => {

    let email = req.body.Email;
    let pass = req.body.Pass;
    console.log(email)
    console.log(pass)
    let data = new store();

    let result = data.logindata(email, pass)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })


}