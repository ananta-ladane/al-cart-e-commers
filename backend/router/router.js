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
router.post("/logout", logout)

//Razorpatment url end point
router.post("/verify-payment", verifyPayment);
router.post("/create-razorpay-order", createRazorpayOrder);


//order product  url end point
router.get("/getallorders", verifyToken, getallordersdata)
router.get("/tractoder/:id", currentord);
router.post("/dopayment/:id", paymentstatus);
router.get("/comforproductdata/:id", getcomfurmpro);
router.post("/confirmproduct", verifyToken, inserorderdata);

//addtocaerd url end point
router.post("/delprocard/:id", prodelcard)
router.get("/getcardproduct", verifyToken, getcarddata)
router.post("/addtocaard", productasdd)

//product url end point
router.post("/uprodata/:id", uproductdata)
router.get("/geteditprodctdata/:id", editprodctdata)
router.get("/showstoreproducts", allstoreproducts)
router.post("/getoneproduct/:id", getsingleproduct)
router.get("/getproducts", getproductdata)
router.post("/addproduct", addProduct)

// store url end point

router.post("/storelogin", storeloginn)
router.post("/storeadd", storeinsert)

//session verify url end point

router.get("/sessionverify", verifysession)

//account url end points
router.get("/sellerprofile", sellerprofi)
router.get("/getuserprofile", verifyToken, userprofile)
router.post("/deletepro/:id", prodeldata)

router.post("/updatepass", newpassuser)
router.post("/emailfind", emailget)
router.post("/login", loginratelimit, loginaccount)
router.post("/signup", accountnew)

router.get("/", (req, res) => {
   res.send("this is home page of the e-coomers web")
})


module.exports = router;