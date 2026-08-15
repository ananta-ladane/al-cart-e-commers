import { useSelector } from "react-redux"
import './Histry.css';

const Histry = () => {
    const prohistry = useSelector((state) => { return state.Buyprodet })
    console.log(prohistry);
    return (
        <div className="His-pro">

            <h2>Product History</h2>

            {
                prohistry.map((x) => {

                    return (
                        <div className="item-det">
                            <p>{x.userid}</p>
                            <img src={x.image} />
                            <p>{x.proname}</p>
                            <p>{x.count}</p>
                            <p>{x.price}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Histry;