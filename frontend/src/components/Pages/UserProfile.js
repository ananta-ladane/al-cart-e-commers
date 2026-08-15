
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import mystyle from './UserProfile.module.css'

const UserProfile = () => {


    const [profile, setProfile] = useState()
    console.log(profile)

    useEffect(() => {

        axios.get("http://localhost:5000/getuserprofile", { withCredentials: true }).then((success) => {
            console.log(success)
            setProfile(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className={mystyle.main}>
            <h1> user profile </h1>
            <div className={mystyle.sub}>
                {
                    <div className={mystyle.sub1}>
                        <p><b>Name :</b> {profile?.username}</p>
                        <p><b>Email :</b> {profile?.email}</p>
                        <p><b>Role :</b>  {profile?.role}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserProfile