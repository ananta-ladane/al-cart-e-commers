
import mystyle from './AddProduct.module.css';
import { useState } from 'react';
import axios from 'axios';


const AddProduct = () => {



    const [url, setUrl] = useState();
    const [pname, setPname] = useState();
    const [pdis, setPdis] = useState();
    const [price, setPrice] = useState();


    const getUrl = (event) => {
        setUrl(event.target.value)
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

    const addData = () => {


        console.log(url)
        console.log(pname)
        console.log(pdis)
        console.log(price)

        axios.post("http://localhost:5000/addproduct", { Url: url, Pname: pname, Pdis: pdis, Price: price }, { withCredentials: true }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <h1>ADD Product</h1>

                <div className={mystyle.sub1}>
                    <input type="text" placeholder='Enter Product img url' onChange={getUrl} />
                    <input type="text" placeholder='Enter the Product name' onChange={getPname} />
                    <input type="text" placeholder="Enter Product Description" onChange={getPdis} />
                    <input type="text" placeholder='Enter Product Price' onChange={getPrice} />
                    <button className={mystyle.btn1} onClick={addData}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;