
const User = require("../model/useropertions").User;


exports.emailget = (req, res) => {

    let email = req.body.Email;
    console.log(email)

    let data = new User();

    let result = data.femail(email)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.newpassuser = (req, res) => {

    let email = req.body.Email;
    let pass = req.body.Pass;


    bcrypt.hash(pass, 10).then((success) => {

        let data = new User();
        let result = data.upass(email, success)

        result.then((success) => {
            console.log(success)
            res.json(success)
        }).catch((error) => {
            console.log(error)
        })

    }).catch((error) => {
        console.log(error)
    })


}


