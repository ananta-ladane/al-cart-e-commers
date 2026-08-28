
import { useState } from "react";
import mystyle from "./chnageUserpass.module.css"
import { useNavigate } from "react-router";
import axios from "axios";


const ChangeUserpass = () => {


    const naviget = useNavigate();


    // const email = location.state.Email;
    // console.log(email)

    const [pass, setPass] = useState()
    const [cpass, setCpass] = useState()
    const [email, setEmail] = useState()
    const [afild, setAfild] = useState(false)
    const [bpass, setBpass] = useState(false)

    const getPass = (event) => {
        setPass(event.target.value)
    }

    const getCpass = (event) => {
        setCpass(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getData = () => {
        // console.log(email)
        if (!email || !pass || !cpass) {
            console.log("plz fill all details")
            setAfild(true)
        } else if (pass !== cpass) {
            console.log("passwoed not match plz enter both password same")
            setBpass(true)
        } else {


            axios.post("https://al-cart-e-commers.onrender.com/updatepass", {Email:email, Pass: cpass }).then((Success) => {
                // console.log(Success)
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
    }

    const Close = () => {
        setAfild(false)
        setBpass(false)
        
    }

    return (
        <div className={mystyle.main}>

            {
                afild && <div className={mystyle.alert}><p>Please fill all the fields</p><button className={mystyle.btn1} onClick={Close}>ok</button></div>
            }

            {
                bpass && <div className={mystyle.alert}><p>Please enter the both passwords  same.</p><button className={mystyle.btn1} onClick={Close}>Ok</button></div>
            }
            <div className={mystyle.sub}>
                <h2>Chnage Password</h2>
                <div className={mystyle.sub1}>
                    <input type="email" placeholder="Enter your email" onChange={getEmail} />
                    <input type="password" placeholder="Enter new password" onChange={getPass} />
                    <input type="password" placeholder="Enter comfirm password" onChange={getCpass} />
                    <button className={mystyle.btn2} onClick={getData}>Updata</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeUserpass;