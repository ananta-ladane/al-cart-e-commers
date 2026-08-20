import { useState } from 'react'
import mystyle from './StoreNav.module.css'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'


const StoreNav = () => {

    const navigate = useNavigate();

    const [card, setCard] = useState(false)

    const openCard = () => {
        setCard(true)
    }

    const closeCard = () => {
        setCard(false)
    }

    const Logout = () => {



        // axios.post("https://al-cart-e-commers.onrender.com/logout", { headers: { Authorization: `Bearer ${token}` } }).then((success) => {
        //     console.log(success)
        //     if (success.data.status == true) {
        //         console.log("logout successfully")
        //         navigate("/login");
        //     } else {
        //         console.log("logout filled plz try again")
        //     }
        // }).catch((error) => {
        //     console.log(error)

        // })

        localStorage.removeItem("token")
         navigate("/login");
    }

    const addPro = () => {
        navigate("addproduct")
    }

    const getPro = () => {
        navigate("allstoreproduct")
    }

    const getProfile = () => {
        navigate("sellerprofile")
    }

    return (
        <div className={mystyle.main} >

            {
                card && <div className={mystyle.sub1}><h6 onClick={getProfile}>View Profile</h6><h6 onClick={addPro}>ADD Product</h6><h6 onClick={getPro}>All Product</h6><h5 onClick={Logout}>Logout</h5> <button onClick={closeCard} className={mystyle.btn1}>Close</button></div>
            }
            <div className={mystyle.sub}>
                <p>store Page</p>
                <p onClick={openCard}><i class="bi bi-person-fill"></i></p>
            </div>
        </div>
    )
}

export default StoreNav