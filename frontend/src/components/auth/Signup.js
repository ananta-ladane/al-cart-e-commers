
import mystyle from './Signup.module.css'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const Signup = () => {

    const naviget = useNavigate()

    const [succ, setSucc] = useState(false);
    const [alert, setAlert] = useState(false);

    const [uname, setUname] = useState();
    const [email, setEmail] = useState();
    const [upass, setUpass] = useState();
    const [role, setRole] = useState();

    const getUname = (event) => {
        setUname(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getUpass = (event) => {
        setUpass(event.target.value)
    }

    const getRole = (event) => {
        setRole(event.target.value)
    }

    const userSignup = () => {
        console.log(uname, email, upass, role);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!uname || !email || !upass || !role) {
            console.log("plz fill all the deitals")
            return
        } else if (!emailRegex.test(email)) {
            console.log("Please enter a valid email address")
            setAlert(true)
            return
        } else {
            axios.post("https://al-cart-e-commers.onrender.com/signup", { Username: uname, email: email, password: upass, role: role }).then((success) => {
                console.log(success)
                if (success.data.status === "Existed") {
                    setSucc(true)
                } else {
                    naviget("/login")
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    const Closre = () => {
        setSucc(false);
        setAlert(false)

    }

    return (
        <div className={mystyle.main}>

            {
                succ && <div className={mystyle.succ_msg}><p>This email is already registered. Please use a different email address.</p><button onClick={Closre} className={mystyle.btn2}>ok</button></div>
            }

            {
                alert && <div className={mystyle.succ_msg}><p>Please enter a valid email address.</p><button onClick={Closre} className={mystyle.btn2}>ok</button></div>
            }
            <div className={mystyle.sub}>
                <h2>Signup here</h2>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder="Username" onChange={getUname} />
                    <input type="email" placeholder="Email" onChange={getEmail} />
                    <select className={mystyle.role} onChange={getRole}>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                    </select>
                    <input type="password" placeholder="Password" onChange={getUpass} />

                    <button onClick={userSignup} className={mystyle.btn1}>SignUp</button>
                    <h5>if you have an account, <Link className={mystyle.li1} to="/login">Click here</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default Signup;
