import { useDispatch, useSelector } from "react-redux";
import mystyle from './Detiles.module.css';
// import { Link } from "react-router";
import { Link, useNavigate } from "react-router";

import { actions } from "../store";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// import { useState } from "react";


const Detiles = () => {


    const user = useSelector((state) => { return state.currentUser })
    const id = user;
    console.log(id)

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    // const [pdata, setPdata] = useState([])
    // console.log(pdata)
    // const pcount = pdata.length;

    useEffect(() => {

        axios.get("http://localhost:5000/getproducts").then((success) => {
            console.log(success)
            setProduct(success.data)
        }).catch((error) => {
            console.log(error)
        })

        // axios.get("http://localhost:5000/getcardproduct", { withCredentials: true }).then((success) => {
        //     console.log(success)
        //     setPdata(success.data)
        // }).catch((error) => {
        //     console.log(error)
        // })


    }, [])

    const dispacher = useDispatch();

    // const [count, setCount] = useState(0);

    // const buyPro = () => {
    //     // navigate("/Buyproduct", { state: mystate.products });
    // }
    //  <Link to='/Buyproduct/${name}'>buy product </Link>


    const getPro = (x) => {
        // dispacher(actions.addTocard(x))
        // // setCount(count + 1)

        // dispacher(actions.adCount())

        let pid = x._id;
        let url = x.url;
        let pname = x.pname;
        let pdis = x.pdis;
        let price = x.price

        axios.post("http://localhost:5000/addtocaard", { pid, url, pname, pdis, price }, { withCredentials: true }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getId = (x) => {

        let id = x._id
        navigate(`/addtocard/${id}`)
    }

    return (
        <div className={mystyle.main}>

          

            {/* <p className={mystyle.cou}>{pcount}</p> */}


            <div className={mystyle.sub}>
                {

                    product.map((x) => {
                        return (
                            <figure>
                                {/* <p>{x._id}</p> */}
                                <img src={x.url} />
                                <figcaption className={mystyle.figd}>
                                    <p>{x.pname}</p>
                                    <p>{x.pdis}</p>
                                    <p><i class="bi bi-currency-rupee"></i>{x.price}</p>

                                    <div className={mystyle.btns}>
                                        <button className={mystyle.btn1} onClick={() => { getPro(x) }}>Add to Card</button>
                                        <button className={mystyle.btn2} onClick={() => getId(x)}>Buy  Now</button>
                                    </div>

                                </figcaption>
                            </figure>

                        )
                    })

                }

            </div>

        </div >
    )
}

export default Detiles;