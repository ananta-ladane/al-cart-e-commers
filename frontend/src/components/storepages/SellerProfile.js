
import { useEffect } from 'react';
import mystyle from './SellerProfile.module.css'
import axios from 'axios';
import { useState } from 'react';

const SellerProfile = () => {


    const [profile, setProfile] = useState();

    useEffect(() => {

        axios.get("http://localhost:5000/sellerprofile", { withCredentials: true }).then((success) => {
            console.log(success)
            setProfile(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])


    return (
        <div className={mystyle.main}>
            <h1>Seller Profile</h1>
            <div className={mystyle.sub}>
                {
                    <div>
                        <p><b>Name :</b> {profile?.username}</p>
                        <p><b>Email :</b> {profile?.email}</p>
                        <p><b>Role :</b> {profile?.role}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default SellerProfile;