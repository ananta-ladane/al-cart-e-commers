
import mystyle from './Detiles.module.css';
// import { Link } from "react-router";
import { useNavigate } from "react-router";


import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// import { useState } from "react";


const Detiles = () => {


    

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    // const [pdata, setPdata] = useState([])
    // console.log(pdata)
    // const pcount = pdata.length;

    useEffect(() => {

        axios.get("https://al-cart-e-commers.onrender.com/getproducts").then((success) => {
            console.log(success)
            setProduct(success.data)
        }).catch((error) => {
            console.log(error)
        })

       // https://al-cart-e-commers.onrender.com
        // axios.get("http://localhost:5000/getcardproduct", { withCredentials: true }).then((success) => {
        //     console.log(success)
        //     setPdata(success.data)
        // }).catch((error) => {
        //     console.log(error)
        // })


    }, [])

    

    // const [count, setCount] = useState(0);

    // const buyPro = () => {
    //     // navigate("/Buyproduct", { state: mystate.products });
    // }
    //  <Link to='/Buyproduct/${name}'>buy product </Link>


    const getPro = (x) => {
        // dispacher(actions.addTocard(x))
        // // setCount(count + 1)

        // dispacher(actions.adCount())

        let token = localStorage.getItem("token")

        let pid = x._id;
        let url = x.url;
        let pname = x.pname;
        let pdis = x.pdis;
        let price = x.price

        axios.post("https://al-cart-e-commers.onrender.com/addtocaard", { pid, url, pname, pdis, price},{headers:{Authorization:`Bearer ${token}`}}).then((success) => {
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