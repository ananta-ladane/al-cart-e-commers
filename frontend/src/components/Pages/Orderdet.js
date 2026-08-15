import { useSelector } from 'react-redux';
import mystyle from './Orderdet.module.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { current } from '@reduxjs/toolkit';

const Orderdet = () => {
    // const deliveryDate = new Date();
    // deliveryDate.setDate(deliveryDate.getDate() + 8);

    const { id } = useParams();

    const navigate = useNavigate();

    const [odata, setOdata] = useState();
    console.log(odata)

    useEffect(() => {

        axios.get(`https://al-cart-e-commers.onrender.com/tractoder/${id}`).then((success) => {
            console.log(success)
            setOdata(success.data)
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

            <div className={mystyle.subm}>
                <div className={mystyle.sub}>
                    {

                        odata?.map((o) => {

                            const cd = new Date().toLocaleDateString("en-CA")
                            console.log(cd)
                            console.log(o.paymentdate)

                            return (

                                < div className={mystyle.di1} >
                                    <p>Order_id: {o._id}</p>
                                    <p>{o.comfurmprodata.map((c) => {

                                        return (
                                            <div>
                                                <img src={c.url} />
                                                <p>Name:<b>{c.pname}</b></p>
                                            </div>
                                        )
                                    })}</p>
                                    <div className={mystyle.sub2}>
                                        <p><b>Quantity :</b> {o.quantity}</p>
                                        <p><b>Paid :</b> ₹{o.tprice}</p>
                                    </div>
                                    <p>status: {cd === o.paymentdate ? (<b className='done' key={id}> <span>Order Placed</span></b>) : (<b>paymetn not done</b>)}</p>
                                </div>
                            )
                        })


                    }
                </div>

            </div>
        </div >

    )

}

export default Orderdet;