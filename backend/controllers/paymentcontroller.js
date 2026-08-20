const Razorpay = require("razorpay");
const crypto = require("crypto");

const OrderProduct = require("../model/orderpopertions").OrderProduct;


const razorpay = new Razorpay({

    key_id: process.env.RAZORPAY_KEY_ID,

    key_secret: process.env.RAZORPAY_KEY_SECRET

});

exports.createRazorpayOrder = (req, res) => {

    let amount = req.body.amount;

    let oid = req.body.oid;

    console.log("MongoDB Order ID:", oid);
    console.log("Amount:", amount);


    let options = {

        amount: Number(amount) * 100,

        currency: "INR",

        receipt: "receipt_" + Date.now()

    };


    let result = razorpay.orders.create(options);


    result.then((success) => {

        console.log("Razorpay order created");

        console.log(success);

        let  razorpayorderid = success.id;

        // Save Razorpay order ID
        let data = new OrderProduct();

        let saveResult = data.saverazorpayorder(oid, razorpayorderid);


        saveResult.then((saved) => {

            console.log("Razorpay order ID saved" + saved);

            res.json({ success: true, order: success });

        }).catch((error) => {

            console.log(error);

            // res.status(500).json({

            //     success: false,

            //     message:
            //         "Unable to save Razorpay order"

            // });

        });

    }).catch((error) => {

        console.log("Razorpay order creation error");

        console.log(error);


        // res.status(500).json({ success: false, message: "Razorpay order creation failed" });

    });

};


exports.verifyPayment = (req, res) => {

    let razorpay_order_id =
        req.body.razorpay_order_id;

    let razorpay_payment_id =
        req.body.razorpay_payment_id;

    let razorpay_signature =
        req.body.razorpay_signature;


    console.log(
        "Razorpay Order:",
        razorpay_order_id
    );

    console.log(
        "Razorpay Payment:",
        razorpay_payment_id
    );


    let body = razorpay_order_id + "|" + razorpay_payment_id;


    let expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(body).digest("hex");


    if (expectedSignature === razorpay_signature) {

        console.log( "Payment verified successfully" );


        // We will update MongoDB here
        // after getting your MongoDB order ID


        res.json({ success: true, message: "Payment verified successfully"});

    }else {
         console.log("Payment verification failed");


        res.status(400).json({success: false, message:"Invalid payment signature" });

    }

};