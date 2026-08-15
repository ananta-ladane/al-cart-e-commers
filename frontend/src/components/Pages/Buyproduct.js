
import { Link, useNavigate, useParams } from "react-router"
import mystyle from './Buyproduct.module.css';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const Buyproduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [alert, setAlert] = useState(false);
    const [day, setDay] = useState()


    useEffect(() => {

        axios.get(`http://localhost:5000/comforproductdata/${id}`).then((success) => {
            console.log(success)
            setOdata(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const [odata, setOdata] = useState()
    console.log(odata)


    // let date = new Date();
    // date.setDate(date.getDate() + 8);

    const buyPro = (x) => {

        let id = x._id

        axios.post(`http://localhost:5000/dopayment/${id}`).then((success) => {
            console.log(success)

            if (success.data.acknowledged == true) {
                console.log("order conforma")
                let date = new Date();
                setDay(date.setDate(date.getDate() + 8))
                setAlert(true)
            }
        }).catch((error) => {
            console.log(error)
        })


    }

    const Back = (x) => {

        let pid = x.pid
        navigate(`/Addtocard/${pid}`)
    }

    const Done = () => {
        console.log("payment done ")
        setAlert(false)
        navigate(`/Orderdet/${id}`)
    }

    // const Sample = () => {
    //     setAlert(true)
    // }

    return (
        <div className={mystyle.main}>

            {
                alert && <div className={mystyle.paydon}><p>Payment Successful!</p>  <p>order comfirmed</p>
                    <p>Expected Delivery: {new Date(day).toDateString()}</p><button className={mystyle.ok} onClick={Done}>Okey</button></div>
            }


            {
                odata?.map((x) => {
                    return (
                        <div className={mystyle.buypro}>

                            <p>{x.comfurmprodata.map((c) => {
                                return (
                                    <div>
                                        <img src={c.url} />
                                        <p>{c.pname}</p>


                                    </div>
                                )
                            })}
                            </p>
                            <p>Quantity: {x.quantity}</p>
                            <p>Price: {x.tprice}</p>
                            <div className={mystyle.canpaybtns}>
                                <button className={mystyle.btn2} onClick={() => { Back(x) }}>Back</button>
                                <button className={mystyle.btn1} onClick={() => { buyPro(x) }}>pay now</button>
                            </div>
                        </div>
                    )
                })
            }

    

        </div>


    )
}

export default Buyproduct;