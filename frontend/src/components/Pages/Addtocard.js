import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
// import { useNavigate } from "react-router";
import mystyle from './Addtocard.module.css';
import axios from "axios";



const Addtocard = () => {
    // const product = JSON.parse(localStorage.getItem("buyProduct"));

    // const mystate = useSelector((state) => { return state.products })

    // const location =useLocation();
    // const product = location.state;
    // console.log(product)

    const { id } = useParams();

    const navigate = useNavigate();



    const [count, setCount] = useState(1);

    // const navigate = useNavigate();

    const [product, setProduct] = useState([])
    console.log(product)

    useEffect(() => {
        axios.post(`https://al-cart-e-commers.onrender.com/getoneproduct/${id}`).then((success) => {
            console.log(success)
            setProduct(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const Inc = () => {
        setCount(count + 1);
    };

    const Dec = () => {
        setCount(count - 1);
    };

    // const buyPro = () => {
    //     navigate("/Buyproduct", { state: product. });
    // };

    const totalprice = product?.price * count;
    // const img = <img src={product.image} />


    const getproduct = (product) => {
        console.log("product found")
        console.log(product)

        const token = localStorage.getItem("token")
        console.log(token)
         
        let pid = product._id;
        let sid = product.storeid;

        axios.post("https://al-cart-e-commers.onrender.com/confirmproduct", { Pid: pid, Sid: sid, Count: count, Totalprice: totalprice }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((success) => {
            console.log(success)
            let oid = success.data.insertedId;
            console.log(id)
            // navigate(`/Buyproduct/${id}`)

            axios.post("https://al-cart-e-commers.onrender.com/create-razorpay-order", { oid: oid, amount: totalprice }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((success) => {

                console.log(success.data);

                let razorpayOrder = success.data.order;

                let options = {

                    key: process.env.REACT_APP_RAZORPAY_KEY_ID,

                    amount: razorpayOrder.amount,

                    currency: razorpayOrder.currency,

                    name: "AL-Cart",

                    description: "E-commerce Payment",

                    order_id: razorpayOrder.id,


                    handler: (response) => {

                        console.log(response);
                        // navigate(`/Orderdet/${oid}`);
                        axios.post("https://al-cart-e-commers.onrender.com/verify-payment",
                            {
                                oid: oid,

                                razorpay_payment_id:
                                    response.razorpay_payment_id,

                                razorpay_order_id:
                                    response.razorpay_order_id,

                                razorpay_signature:
                                    response.razorpay_signature
                            }
                           
                        ).then((success) => {
                            console.log(success)
                            if (success.data) {
                                navigate(`/Orderdet/${oid}`);
                            }
                        }).catch((error) => {
                            console.log(error)
                        })


                    }

                };

                let payment = new window.Razorpay(options);
                payment.open();


                console.log("ENV KEY =", process.env.REACT_APP_RAZORPAY_KEY_ID);
                console.log("OPTIONS KEY =", options.key);
                console.log("ORDER ID =", options.order_id);
                console.log("AMOUNT =", options.amount);

            }).catch((error) => {
                console.log(error);

            });

        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className={mystyle.main}>

            <>
                <button className={mystyle.btn1}> <Link className="deti" to="/poratlpage/Detiles">Go to product page</Link></button>

                {




                    // product.map((x) => {
                    //     return (
                    //         <div>
                    //             <p>{x.id}</p>
                    //             <img src={x.image} />
                    //             <p>{x.name}</p>
                    //             <p>{x.reviews}</p>
                    //             <p>{x.desc}</p>
                    //             <p>{x.price}</p>
                    //         </div>
                    //     )
                    // })


                    product ? (
                        <div className={mystyle.pro}>
                            {/* <p>{user.username}</p> */}
                            <img src={product.url} />
                            <p>{product.pname}</p>

                            <p>{product.pdis}</p>
                            <p><i class="bi bi-currency-rupee"></i>{totalprice}</p>
                            {/* <p>{count}</p> */}
                            <div className={mystyle.btns}>
                                <button className={mystyle.btn2} disabled={count === 1} onClick={Dec}><i class="bi bi-chevron-left"></i></button>
                                <strong>{count}</strong>
                                <button className={mystyle.btn3} onClick={Inc}><i class="bi bi-chevron-right"></i></button>
                            </div>
                            <button className={mystyle.btn4} onClick={() => { getproduct(product) }} > confirm Product </button>
                        </div>
                    ) : (
                        <p>No product selected. Please go back and click "Buy Now".</p>
                    )

                }

                {/* {
                    user ? (
                        <div>
                            <p>{user.username}</p>
                        </div>
                    ):(
                        <p>not fund username</p>
                    )
                } */}

            </>
        </div >
    )
}

export default Addtocard;