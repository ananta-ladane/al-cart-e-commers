
import mystyle from './AddCard.module.css';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';


const AddCard = () => {

    // const user = useSelector((state) => { return state.currentUser })
    // const id = user

    const navigate = useNavigate()

    const [pdata, setPdata] = useState([])

    useEffect(() => {

        let token = localStorage.getItem("token")
        console.log("this is useeffect toekn :" + token)

        axios.get("https://al-cart-e-commers.onrender.com", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((success) => {
            console.log(success)
            setPdata(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const getData = (p) => {
        let id = p.pid
        console.log(id)

        navigate(`/addtocard/${id}`)

    }

    const getRem = (p) => {
        console.log(p._id)
        let token = localStorage.getItem("token")
        console.log("this is the getRem token: " + token)
        let id = p._id;
        axios.delete(`https://al-cart-e-commers.onrender.com/delprocard/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((success) => {
            console.log(success)
            if (success.data.acknowledged == true) {
                navigate(0)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className={mystyle.main}>
            <h4>this is the add card page</h4>
            <div className={mystyle.sub}>
                {
                    pdata.map((p, index) => {
                        return (
                            <div className={mystyle.card} key = {index}>

                                <img src={p.url} />
                                <p>{p.pname}</p>
                                <p>{p.pdis}</p>
                                <p><i class="bi bi-currency-rupee"></i>{p.price}</p>

                                <div className={mystyle.card1}>
                                    <button className={mystyle.btn2} onClick={() => { getRem(p) }}>Remove</button>
                                    <button className={mystyle.btn1} onClick={() => getData(p)} >Buy  Now </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default AddCard;