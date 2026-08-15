
import { useState } from 'react';
import mystyle from './StoreSignup.module.css'
import axios from 'axios';
import { Link } from 'react-router';

const StoreSig = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [contry, setContry] = useState();
    const [pass, setPass] = useState();


    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getCity = (event) => {
        setCity(event.target.value)
    }

    const getState = (event) => {
        setState(event.target.value)
    }

    const getContry = (event) => {
        setContry(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }

    const getData = () => {

        console.log(name)
        console.log(email)

        axios.post("http://localhost:5000/storeadd", {
            name: name,
            email: email,
            city: city,
            state: state,
            country: contry,
            password: pass
        }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h1>store signup form</h1>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder="Enter store name" onChange={getName} />
                    <input type="email" placeholder="Enter Store Email" onChange={getEmail} />
                    <input type="text" placeholder="Enter City" onChange={getCity} />
                    <input type="text" placeholder="Enter State" onChange={getState} />
                    <input type="text" placeholder="Enter Contry" onChange={getContry} />
                    <input type="password" placeholder="Enter password" onChange={getPass} />
                    <button className={mystyle.btn1} onClick={getData}>SignUp</button>
                    <p> If you hava accoutn plz click here to <Link to="/storelogin">Login</Link> </p>
                </div>
            </div>
        </div>

    )
}

export default StoreSig;