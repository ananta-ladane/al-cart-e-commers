import { Outlet, useLocation, useNavigate } from "react-router";
import PortalBody from "./mainbody/PortalBody";
import PortalNav from "./navbar/PortalNav";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";
import { useEffect } from "react";
import axios from "axios";



const PortalPage = () => {


    // const mystate = useSelector((state) => { return state });

    // const login = mystate.islogin;
    const navigate = useNavigate();
    const dispatcher = useDispatch();

    const location = useLocation();

    // const st = location.state.st ;


    useEffect(() => {

        axios.get("https://al-cart-e-commers.onrender.com/sessionverify", { withCredentials: true }).then((success) => {
            console.log(success)
            if (success.data.status == false) {
                // navigate("/login")
                console.log("session not fonund")
            } else {
                console.log("session found")
            }
        }).catch((error) => {
            console.log(error)
        })

    }, [])



    return (
        <div>
            <PortalNav />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default PortalPage;