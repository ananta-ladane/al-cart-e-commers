
import { useState } from 'react';
import mystyle from './StoreLogin.module.css';
import axios from 'axios';

import { useNavigate } from 'react-router';



const StoreLogin = () => {


    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const navigate = useNavigate();
    

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }

    const getData = () => {

        console.log(email)
        console.log(pass)

        axios.post("https://al-cart-e-commers.onrender.com/storelogin", { Email: email, Pass: pass }).then((success) => {
            // console.log(success)
            if (success.data.length > 0) {
                console.log("login successfully")
                let id = success.data[0]._id;
                console.log(id)
                navigate(`/storehomepage/${id}`)
               
            } else {
                console.log("plz fill the valid deitals")
            }
        }).catch((error) => {
            console.log(error)
            if (error.response?.status === 429) {
                console.Alert(error.response.data.message)
            }
        })
    }


    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h1>Store Login</h1>
                <div className={mystyle.sub1}>
                    <input type="email" placeholder="Enter Your Email" onChange={getEmail} />
                    <input type="password" placeholder="Enter Your Password" onChange={getPass} />
                    <button className={mystyle.btn1} onClick={getData}>Login</button>
                </div>
            </div>
        </div >
    )
}

export default StoreLogin;