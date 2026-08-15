
import { useState } from "react";
import mystyle from "./chnageUserpass.module.css"
import { useLocation, useNavigate } from "react-router";
import axios from "axios";


const ChangeUserpass = () => {


    const naviget = useNavigate();
    const location = useLocation()
    

    const email = location.state.Email;
    console.log(email)

    const [pass, setPass] = useState()

    const getPass = (event) => {
        setPass(event.target.value)
    }


    const getData = () => {
        console.log(email)

        axios.post("https://al-cart-e-commers.onrender.com/updatepass", { Email: email, Pass: pass }).then((Success) => {
            console.log(Success)
            if (Success.data.modifiedCount === 1) {
                console.log("successfully update password")
                naviget("/login")
            } else {
                console.log("not chnage password")
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h2>Chnage Password</h2>
                <div className={mystyle.sub1}>
                    <input type="email" value={email} disabled />
                    <input type="password" placeholder="Enter new password" onChange={getPass} />
                    <button className={mystyle.btn2} onClick={getData}>Updata</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeUserpass;