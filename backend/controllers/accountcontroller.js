
const Account = require("../model/accountopertions").Account;

const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");




exports.accountnew = (req, res) => {

    let username = req.body.Username;
    let email = req.body.email;
    let pass = req.body.password;
    let role = req.body.role


    bcrypt.hash(pass, 10).then((success) => {

        let data = new Account;

        let result = data.newaccount(username, email, role, success);

        result.then((success) => {
            console.log(success)
            res.json(success)

            if (success.status !== "Existed") {
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });

                transporter.sendMail({
                    from: '"developer" <anantaladane@gmail.com>',
                    to: email,
                    subject: "thanks for signup",
                    text: "Ananta Ladane", // plain text body
                    html: `<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;"> <div style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.08);"> <!-- Header --> <div style="background:#2563eb; padding:25px; text-align:center;"> <h1 style="margin:0; color:#ffffff; font-size:26px;"> AL-Cart </h1> <p style="margin:8px 0 0; color:#dbeafe; font-size:14px;"> Your Online Shopping Partner </p> </div> <!-- Content --> <div style="padding:35px 30px; color:#333333;"> <h2 style="margin-top:0; color:#222222;"> Welcome to AL-Cart! 🎉 </h2> <p style="font-size:16px; line-height:1.6;"> Thank you for signing up with <strong>AL-Cart</strong>. We're excited to have you as part of our community. </p> <p style="font-size:16px; line-height:1.6;"> You can now explore our products, add your favorite items to your cart, and enjoy a simple and convenient shopping experience. </p> <!-- Button --> <div style="text-align:center; margin:30px 0;"> <a href='https://ananta-ladane.github.io/al-cart-e-commers/login' style="display:inline-block; padding:12px 25px; background:#2563eb; color:#ffffff; text-decoration:none; border-radius:6px; font-size:15px; font-weight:bold;"> Start Shopping </a> </div> <p style="font-size:15px; line-height:1.6;"> If you have any questions, feel free to contact us. We're happy to help! </p> <p style="margin-bottom:5px;"> Best Regards, </p> <p style="margin-top:0; font-size:16px;"> <strong>Ananta Ladane</strong><br></p> </div> <!-- Footer --> <div style="background:#f8fafc; padding:20px; text-align:center; border-top:1px solid #eeeeee;"> <p style="margin:0; color:#777777; font-size:12px;"> © 2026 AL-Cart.Ananta Ladane All rights reserved. </p> <p style="margin:8px 0 0; color:#999999; font-size:12px;"> This is an automated welcome email. </p> </div> </div> </body>`,
                });
            }

        }).catch((error) => {
            console.log(error)
        })
    }).catch((error) => {
        console.log(error)
    })

}

exports.loginaccount = (req, res) => {

    let email = req.body.email;
    let pass = req.body.password;
    let role = req.body.role;

    let data = new Account;

    let result = data.accountlogin(email, role)

    result.then((success) => {
        console.log(success)

        if (success.length > 0) {
            const eid = success[0].email;
            const role = success[0].role;
            let hashstore = success[0].password;
            // console.log(hashstore)

            bcrypt.compare(pass, hashstore).then((success) => {
                if (!success) {
                    res.json({ status: false })
                } else {
                    req.session.eid = eid;

                    req.session.save((err) => {

                        if (err) {
                            console.log(err);
                            console.log("Session notSaved");
                        }
                        console.log("Session Saved");
                    });

                    console.log("this  is the session id" + req.session.eid)
                    res.json({ status: 1, role: role })
                }

            }).catch((error) => {
                console.log(error)
            })

        } else {
            res.json({ status: 0 })
        }

    }).catch((error) => {
        console.log(error)
    })

}


exports.userprofile = (req, res) => {

    let eid = req.session.eid;

    let data = new Account();

    let result = data.fuserprofile(eid)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.sellerprofi = (req, res) => {

    let eid = req.session.eid;

    let data = new Account()

    let result = data.fsellerpro(eid)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}



exports.verifysession = (req, res) => {

    let eid = req.session.eid

    if (!eid) {
        res.json({ status: false , seid: eid })
        console.log("session not found")
    } else {

        res.json({ status: true , seid: eid})
    }
}


exports.logout = (req, res) => {

    req.session.destroy(() => {

        res.clearCookie("connect.sid");
        res.json({ status: true })
    })
}