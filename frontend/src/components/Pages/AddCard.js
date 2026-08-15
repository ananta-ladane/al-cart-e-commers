
import { useSelector } from 'react-redux';
import mystyle from './AddCard.module.css';
import { Link, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';


const AddCard = () => {

    const user = useSelector((state) => { return state.currentUser })
    const id = user

    const navigate = useNavigate()

    const [pdata, setPdata] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/getcardproduct`, { withCredentials: true }).then((success) => {
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

        let id = p._id;
        axios.post(`http://localhost:5000/delprocard/${id}`).then((success) => {
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
                    pdata.map((p) => {
                        return (
                            <div className={mystyle.card}>

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