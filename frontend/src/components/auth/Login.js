import mystyle from './Login.module.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Login = () => {


    // console.log(users);

    const dispacher = useDispatch()
    const navigate = useNavigate();


    const [alert, setAlert] = useState(false)
    const [hide, setHide] = useState(false);
    const [manyreq, setManyreq] = useState(false)


    const [email, setEmail] = useState();
    const [upass, setUpass] = useState();
    const [role, setRole] = useState();

    const getRole = (event) => {
        setRole(event.target.value)
    }


    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getUpass = (event) => {
        setUpass(event.target.value)
    }

    const login = () => {

        if (!email || !upass || !role) {
            setHide(true);
            console.log("fill the info")
        } else {

            axios.post("https://al-cart-e-commers.onrender.com/login", { email: email, password: upass, role: role },
                {
                    withCredentials: true
                }).then((success) => {
                    console.log(success)

                    if (success.data.status === 1 && success.data.role === "user") {
                        navigate("/poratlpage")
                    } else if (success.data.status === 1 && success.data.role === "seller") {
                        navigate("/storehomepage")

                    } else {
                        setAlert(true)
                    }

                }).catch((error) => {
                    console.log(error)
                    if (error.response?.status === 429) {
                        console.log(error.response.data.message)
                        setManyreq(true)
                    }
                })

        }
    }

    const close = () => {
        setAlert(false)
    };

    const Hide = () => {
        setHide(false);
        setManyreq(false);
    }


    return (
        <div className={mystyle.main}>
            {
                alert && <div className={mystyle.alert}><p>PlZ Enter the valid deitals</p><button className={mystyle.btn1} onClick={close}>Close</button></div>
            }

            {
                hide && <div className={mystyle.alert1}><p>Plz fill all the fields</p><button className={mystyle.btn3} onClick={Hide}>ok</button></div>
            }

            {
                manyreq && <div className={mystyle.alert1}><p>Too many requests. Please try again later.</p><button className={mystyle.btn3} onClick={Hide}>ok</button></div>
            }
            <div className={mystyle.sub}>
                <h2>Login Here</h2>
                <p className={mystyle.enter}>Enter your creddentials to acccess your account</p>
                <div className={mystyle.sub1}>

                    <input type="email" placeholder='Enter your email' onChange={getEmail} />
                    <select className={mystyle.role} onChange={getRole}>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="seller">Seller</option>
                    </select>
                    <input type="password" placeholder='Enter your password' onChange={getUpass} />

                    <p className={mystyle.pass}>Forgot <Link className={mystyle.for} to="/datafind">password?</Link></p>
                    <button className={mystyle.btn2} onClick={login}>Login</button>
                    <p className={mystyle.crt}>Don't hava an account? <Link className={mystyle.crt1} to="/signup">Create one</Link> </p>
                </div>
            </div>

        </div >
    )
}

export default Login;