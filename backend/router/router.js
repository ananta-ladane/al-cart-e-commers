const exprees = require("express");
const { storeinsert, storeloginn } = require("../controllers/storecontroller");
const { addProduct, getproductdata, getsingleproduct, allstoreproducts, editprodctdata, prodeldata, uproductdata } = require("../controllers/productcontroller");
const { emailget, newpassuser, } = require("../controllers/usercontroller");
const { productasdd, getcarddata, prodelcard, } = require("../controllers/addtocardcontroller");
const { accountnew, loginaccount, verifysession, logout, userprofile, sellerprofi } = require("../controllers/accountcontroller");
const { inserorderdata, getcomfurmpro, paymentstatus, currentord, getallordersdata } = require("../controllers/ordercontroller");
const { createRazorpayOrder, verifyPayment } = require("../controllers/paymentcontroller");
const { loginratelimit } = require("../middleware/ratelimitlogin");
const { verifyToken } = require("../middleware/tokenverify");
const router = exprees.Router();




//userLogout
router.post("/logout", logout) // not working api

//Razorpatment url end point
router.post("/verify-payment", verifyPayment);
router.post("/create-razorpay-order", createRazorpayOrder);


//order product  url end point
router.get("/getallorders", verifyToken, getallordersdata) // user api
router.get("/tractoder/:id", currentord); // user api
router.post("/dopayment/:id", paymentstatus); // not woking api
router.get("/comforproductdata/:id", getcomfurmpro); // not working api
router.post("/confirmproduct", verifyToken, inserorderdata); // user api

//addtocaerd url end point
router.post("/delprocard/:id", verifyToken, prodelcard)
router.get("/getcardproduct", verifyToken, getcarddata)
router.post("/addtocaard", verifyToken, productasdd)

//product url end point
router.post("/uprodata/:id", uproductdata) // seller api
router.get("/geteditprodctdata/:id", editprodctdata)  // seller api
router.get("/showstoreproducts", verifyToken, allstoreproducts) // seller api
router.post("/getoneproduct/:id", getsingleproduct)
router.post("/deletepro/:id", prodeldata) // seller api
router.get("/getproducts", getproductdata) //no need to add token verify beacus this is usr api
router.post("/addproduct", verifyToken, addProduct) //seler api

// store url end point

router.post("/storelogin", storeloginn) // not working api
router.post("/storeadd", storeinsert) // not working api

//session verify url end point

router.get("/sessionverify", verifysession) // not working api

//account url end points
router.get("/sellerprofile", verifyToken, sellerprofi) // seller api
router.get("/getuserprofile", verifyToken, userprofile) // user api


router.post("/updatepass", newpassuser) // both user and seller
router.post("/emailfind", emailget) // both user and seller
router.post("/login", loginratelimit, loginaccount) // both user and seller
router.post("/signup", accountnew) // both user and seller

router.get("/", (req, res) => {
   res.send("this is home page of the e-coomers web")
})


module.exports = router;