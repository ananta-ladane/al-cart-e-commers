import { Outlet, useNavigate } from "react-router";
import PortalNav from "./navbar/PortalNav";

import { useEffect } from "react";



const PortalPage = () => {


    // const mystate = useSelector((state) => { return state });

    // const login = mystate.islogin;
    const navigate = useNavigate();
   

   

    // const st = location.state.st ;


    useEffect(() => {

        const token = localStorage.getItem("token")

        console.log(token)
        if (!token) {
            navigate("/login")
            console.log("token not fonund")
        } else {
            console.log("session found")
        }
   

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