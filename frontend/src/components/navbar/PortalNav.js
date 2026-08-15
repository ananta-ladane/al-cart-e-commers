import { useDispatch, useSelector } from 'react-redux';
import mystyle from './PortalNav.module.css';
// import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router';
import { actions } from '../store';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const PortalNav = () => {
    const user = useSelector((state) => { return state.currentUser });

    const id = user;
    // console.log(id)
    console.log("this is the usrid i found in portalnav")

    // const pcount = mydata.apcount;

    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false)
    const [pdata, setPdata] = useState([])

    console.log(pdata)
    const pcount = pdata.length;

    useEffect(() => {
        axios.get(`http://localhost:5000/getcardproduct`, { withCredentials: true }).then((success) => {
            console.log(success)
            setPdata(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const getDetils = () => {
        setShow(true)
    }

    const Close = () => {
        setShow(false)
    }

    const getProduct = () => {
        navigate("Detiles")
    }

    const logout = () => {

        axios.post("http://localhost:5000/logout", { withCredentials: true }).then((success) => {
            console.log(success)
            if (success.data.status == true) {
                console.log("logout successfully")
                navigate("/login");

            } else {
                console.log("logout filled plz try again")
            }
        }).catch((error) => {
            console.log(error)

        })

        // dispatcher(actions.logout());
        // navigate("/login");
    }

    const getProfile = () => {
        navigate("userprofile")
    }

    const viewOrdes = () => {
        navigate("/allorders")
    }

    return (
        <div className={mystyle.main}>

            {
                show && <div className={mystyle.shows}> <p onClick={getProfile}>view profile</p> <p onClick={viewOrdes}>view order</p> <p>Histroy</p> <p onClick={logout}>logout</p> <button className={mystyle.clo} onClick={Close}>close</button></div>
            }
            <div className={mystyle.sub}>
                <p className={mystyle.log}><i class="bi bi-bag"></i> AL<span>Cart</span></p>
                <input type='text' placeholder='Search lucury products, brands...' />

                <ul>
                    <li><a onClick={getProduct}>Categories</a></li>
                    <li><a href='#'>Brands</a></li>
                    <li><a href='#'>Offers</a></li>
                </ul>
                <div className={mystyle.sub1}>
                    <p><Link className={mystyle.lin} to="/addprocard"><i class="bi bi-cart-plus"></i></Link></p>
                    <p onClick={getDetils}><i class="bi bi-person-circle"></i></p>

                    <p onClick={getDetils}><i class="bi bi-list"></i></p>
                    <b className={pcount > 0 ? "d-flex" : "d-none"}> {pcount} </b>
                </div>

            </div>
        </div>
    )
}

export default PortalNav;