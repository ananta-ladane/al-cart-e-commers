

import StoreNav from "./navbar/StoreNav";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";



const StoreHome = () => {


    const navigate = useNavigate();

    useEffect(() => {

        // axios.get("https://al-cart-e-commers.onrender.com/sessionverify", { withCredentials: true }).then((success) => {
        //     console.log(success)
        //     if (success.data.status == !true) {
        //         navigate("/login")
        //     } else {
        //         console.log("session found")
        //     }
        // }).catch((error) => {
        //     console.log(error)
        // })

        let token = localStorage.getItem("token")

        if ( !token) {
            navigate("/login")
        } else {
            console.log("session found")
        }

    }, [])

    return (
        <div>
            <StoreNav />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default StoreHome;