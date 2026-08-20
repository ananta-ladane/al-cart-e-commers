
import { useEffect, useState } from 'react';
import mystyle from './Allorders.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Allorders = () => {


    const navigate = useNavigate();

    const [aodata, setAodata] = useState();
    console.log(aodata)

    useEffect(() => {

        let token = localStorage.getItem("token")

        axios.get("https://al-cart-e-commers.onrender.com/getallorders", { headers:{Authorization: `Bearer ${token}`}}).then((success) => {
            console.log(success)
            setAodata(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const Home = () => {

        navigate("/poratlpage")
    }

    return (

        <div className={mystyle.main}>

            <button className={mystyle.btn1} onClick={Home}><i class="bi bi-house-door"></i></button>

            <h1>All orders</h1>

            <div className={mystyle.sub}>
                {

                    aodata?.map((a) => {

                        const cd = new Date().toLocaleDateString("en-CA")
                        console.log(cd)
                        console.log(a.paymentdate)

                        return (
                            <div className={mystyle.sub1}>
                                <p>{a._id}</p>
                                <p>{a.comfurmprodata.map((d) => {
                                    return (
                                        <div>
                                            <img src={d.url} />
                                            <p><b>{d.pname}</b></p>

                                        </div>
                                    )

                                })}</p>
                                <div className={mystyle.sub2}>
                                    <p><b>Quantity :</b> {a.quantity}</p>
                                    <p><b>Paid :</b> ₹{a.tprice}</p>
                                </div>
                                <p><b>status:</b> {cd === a.paymentdate ? (<span className='done'> <span>Order Placed</span></span>) : cd > a.paymentdate ? (<span>Shipping</span>) : (<span>Delivered</span>)}</p>
                                <p>Expeted Delivary : {new Date(new Date(a.paymentdate).setDate(new Date(a.paymentdate).getDate() + 8)).toDateString()}</p>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Allorders;