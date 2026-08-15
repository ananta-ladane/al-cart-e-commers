import { useState } from "react";
import mystyle from "./FindEmail.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

const FindEmail = () => {


    const navigate = useNavigate()


    const [email, setEmail] = useState()
    const [vemail, setVemail] = useState(false)
    const [memail, setMemail] = useState(false)



    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getData = () => {


        if (!email) {
            console.log("Plz Fill data")
            console.log(email)
            setMemail(true)

        } else {
            axios.post("http://localhost:5000/emailfind", { Email: email }).then((success) => {
                console.log(success)
                if (success.data.length > 0) {
                    console.log("Email verification successful.!")

                    let id = success.data[0]._id;
                    let email = success.data[0].email;

                    console.log(id)
                    console.log(email)

                    navigate(`/userpassword/${id}`, { state: { Email: email } })
                } else {
                    setVemail(true)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const close = () => {
        console.log("ok")
        setMemail(false)
        setVemail(false)
    }

    return (
        <div className={mystyle.main}>

            {
                memail && <div className={mystyle.mtemail}><p>Plz Enter the Email</p> <button className={mystyle.btnok} onClick={close}>ok</button></div>
            }

            {
                vemail && <div className={mystyle.evemaill}><p>plz Enter the valid email</p><button className={mystyle.btnok} onClick={close} >ok</button></div >
            }

            <div className={mystyle.sub}>
                <h2>Email virefication </h2>
                <div className={mystyle.sub1}>
                    <input type="email" placeholder='Enter your email' onChange={getEmail} />
                    <button className={mystyle.btn2} onClick={getData}> Find</button>
                </div>
            </div>
        </div >
    )
}

export default FindEmail;