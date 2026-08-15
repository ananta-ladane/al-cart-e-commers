
import { useEffect, useState } from 'react';
import mystyle from './AllProduct.module.css';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router';


const AllProduct = () => {


    const navigate = useNavigate();
    const [pdata, setPdata] = useState();


    useEffect(() => {

        axios.get("http://localhost:5000/showstoreproducts", { withCredentials: true }).then((success) => {
            console.log(success)
            setPdata(success.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const getEditdata = (p) => {
        console.log("this edit data fincation")

        let id = p._id;

        navigate(`/storehomepage/editprodata/${id}`)

    }

    const getDelpro = (p) => {
        console.log("this is thr delete product data id")

        let id = p._id;
        axios.post(`http://localhost:5000/deletepro/${id}`).then((success) => {
            console.log(success)
            if(success.data.deletedCount === 1){
                navigate(0)
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className={mystyle.main}>

            <h1>Here show all Product</h1>
            <div className={mystyle.sub}>
                {
                    pdata?.map((p) => {
                        return (
                            <div className={mystyle.sub1}>

                                <img src={p.url} />
                                <p>{p.pname}</p>
                                <p>{p.pdis}</p>
                                <p><i class="bi bi-currency-rupee"></i>{p.price}</p>
                                <div className={mystyle.sub2}>
                                    <button className={mystyle.edtib} onClick={() => getEditdata(p)}>edit</button>
                                    <button className={mystyle.del} onClick={() => { getDelpro(p) }}>del</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                
        </div>
    )
}

export default AllProduct;