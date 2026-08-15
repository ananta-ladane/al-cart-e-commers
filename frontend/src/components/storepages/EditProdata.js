import axios from "axios";
import mystyle from './EditProdata.module.css'
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";



const EditProdata = () => {

    const { id } = useParams();
    console.log(id)

    const navigate = useNavigate()

    const [pdata, setPdata] = useState();
    console.log(pdata)



    const [purl, setPurl] = useState();
    const [pname, setPname] = useState();
    const [pdis, setPdis] = useState();
    const [price, setPrice] = useState();


    useEffect(() => {
        axios.get(`https://al-cart-e-commers.onrender.com/geteditprodctdata/${id}`).then((success) => {
            console.log(success)
            setPdata(success.data)
            setPurl(success.data.url)
            setPname(success.data.pname)
            setPdis(success.data.pdis)
            setPrice(success.data.price)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const getUrl = (event) => {
        setPurl(event.target.value)
    }

    const getPname = (event) => {
        setPname(event.target.value)
    }

    const getPdis = (event) => {
        setPdis(event.target.value)
    }

    const getPrice = (event) => {
        setPrice(event.target.value)
    }

    const getData = () => {

        console.log("data gote");

        console.log(purl)
        console.log(pname)
        console.log(pdis)
        console.log(price)

        axios.post(`https://al-cart-e-commers.onrender.com/uprodata/${id}`, { Purl: purl, Pname: pname, Pdis: pdis, Price: price }).then((success) => {
            console.log(success)

            if(success.data.acknowledged == true){
                navigate("/storehomepage/allstoreproduct")
            }
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <div className={mystyle.main}>
            <h1>Edit Product data</h1>
            <div className={mystyle.sub}>
                <input type="text" placeholder="Enter product url" defaultValue={pdata?.url} onChange={getUrl} />
                <input type="text" placeholder="Enter product name" defaultValue={pdata?.pname} onChange={getPname} />
                <input type="text" placeholder="Enter product discription" defaultValue={pdata?.pdis} onChange={getPdis} />
                <input type="text" placeholder="Enter product price" defaultValue={pdata?.price} onChange={getPrice} />
                <button className={mystyle.btn1} onClick={getData}>update data</button>
            </div>
        </div>
    )
}

export default EditProdata;