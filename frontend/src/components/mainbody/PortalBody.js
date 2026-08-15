import { Link } from 'react-router';
import mystyle from './PortalBody.module.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store';
import axios from 'axios';


const PortalBody = () => {


    const dispacher = useDispatch();

    const [alert, setAlert] = useState(false)

    useEffect(() => {

        // const lspdata = JSON.parse(localStorage.getItem("ecoProducts"));

        // console.log(lspdata);

        axios.get("https://serve.faux-api.com/5671dcdc6dcd56e6955de245/products").then((success) => {
            console.log(success)

            let pdata = success.data.result
            dispacher(actions.localProductdata(pdata))

        }).catch((error) => {
            console.log(error)
        })


    }, [])

    const getAlert = () => {
        setAlert(true)
    }

    const Close = () => {
        setAlert(false)
    }

    return (
        <div className={mystyle.main}>
            {
                alert && <div className={mystyle.alert}><p>Plz scroll down and click on the <span> view trending collection</span></p><button className={mystyle.cls} onClick={Close}>ok</button></div>
            }
            <section className={mystyle.sect1}>
                <div className='container'>
                    <div className={mystyle.sect1di1}>
                        <div className={mystyle.sect1sub1}>
                            <p>welcome back, oremium member!</p>
                            <h1>elevate your <span>daily expreience</span></h1>

                            <p>Discover the latest curated collections from top-tier brands. Exclusive saving just gor you this season.</p>
                            <div className={mystyle.btns}>
                                <button className={mystyle.btn1}>Shop the Collection</button>
                                <button className={mystyle.btn2}>view limited offers</button>
                            </div>
                        </div>
                        <div className={mystyle.sect1sub2}>
                            <div className={mystyle.sect1sub2di1}>
                                <p>linited time deal</p>
                                <p>up to 50% off</p>
                                <p>on select desugner items</p>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <section className={mystyle.sect2} id="categories">
                <div className='container'>
                    <div className={mystyle.sect2di1}>
                        <h1>Shop by category</h1>
                    </div>
                    <div className={mystyle.sect2di2}>
                        <div className={mystyle.sect2sub1}>
                            <p><i class="bi bi-phone"></i></p>
                            <p>Electronics</p>
                        </div>
                        <div className={mystyle.sect2sub1}>
                            <p><i class="bi bi-house-door"></i></p>
                            <p>Home & Kitchen</p>
                        </div>
                        <div className={mystyle.sect2sub1}>
                            <p><i class="bi bi-stars"></i></p>
                            <p>Beauty</p>
                        </div>
                        <div className={mystyle.sect2sub1}>
                            <p><i class="bi bi-trophy"></i></p>
                            <p>Sport</p>
                        </div>
                        <div className={mystyle.sect2sub1}>
                            <p><i class="bi bi-book"></i></p>
                            <p>Book</p>
                        </div>
                        <div className={mystyle.sect2sub1}>
                            <p><i class="bi bi-smartwatch"></i></p>
                            <p>Watch</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className={mystyle.sect3}>
                <div className='container'>
                    <div className={mystyle.sect3di1}>
                        <h1>Featued Products</h1>
                        <p>Handpicked luxury for our premium mwmbers.</p>
                    </div>
                    <div className={mystyle.sect3di2}>
                        <figure >
                            <div className={mystyle.figsub1}><p><i class="bi bi-heart"></i></p>
                            </div>
                            <figcaption>

                                <p><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i> <span>(128)</span></p>
                                <p className={mystyle.hyp}>HyperX wireless headphones</p>
                                <b className={mystyle.pri1}> $299.00 <span>$399.00</span></b>
                                <div className={mystyle.fibtn}>
                                    <button className={mystyle.btn3} onClick={getAlert}>add to cart</button>
                                    <button className={mystyle.btn4} onClick={getAlert}>buy now</button>
                                </div>

                            </figcaption>
                        </figure>
                        <figure >
                            <div className={mystyle.figsub2}><p><i class="bi bi-heart"></i></p>

                            </div>
                            <figcaption>

                                <p><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <span>(245)</span></p>

                                <p className={mystyle.hyp}>Minimalist quartz watch</p>
                                <b className={mystyle.pri1}> $149.00</b>
                                <div className={mystyle.fibtn}>
                                    <button className={mystyle.btn3} onClick={getAlert}>add to cart</button>
                                    <button className={mystyle.btn4} onClick={getAlert}>buy now</button>
                                </div>
                            </figcaption>
                        </figure>
                        <figure >
                            <div className={mystyle.figsub3}><p><i class="bi bi-heart"></i></p>

                            </div>
                            <figcaption>

                                <p><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i> <span>(92)</span></p>

                                <p className={mystyle.hyp}>Air max pro sneakers</p>
                                <b className={mystyle.pri1}> $185.00 <span>$210.00</span></b>
                                <div className={mystyle.fibtn}>
                                    <button className={mystyle.btn3} onClick={getAlert} >add to cart</button>
                                    <button className={mystyle.btn4} onClick={getAlert} >buy now</button>
                                </div>
                            </figcaption>
                        </figure>

                        <figure >
                            <div className={mystyle.figsub4}><p><i class="bi bi-heart"></i></p>

                            </div>
                            <figcaption>

                                <p><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <span>(56)</span></p>

                                <p className={mystyle.hyp}>Designer sun- glasses</p>
                                <b className={mystyle.pri1}> $112.00 </b>
                                <div className={mystyle.fibtn}>
                                    <button className={mystyle.btn3} onClick={getAlert}>add to cart</button>
                                    <button className={mystyle.btn4} onClick={getAlert}>buy now</button>
                                </div>
                            </figcaption>
                        </figure>

                    </div>
                </div>
            </section>
            <section className={mystyle.sect4}>
                <div className='container'>
                    <div className={mystyle.sect4di1}>
                        <h1>Exclusive Offers</h1>
                    </div>
                    <div className={mystyle.sect4di2} >
                        <div className={mystyle.sect4sub1}>
                            <p>Flash Sale</p>
                            <p>Up to 70% off on luxury accessories</p>
                            <p>Ends in 04:23:12</p>
                            <button className={mystyle.btn5}>Shop Now</button>
                        </div>
                        <div className={mystyle.sect4sub2}>
                            <p>Daily deals</p>
                            <p>New arrivals at unbeatable prices.</p>
                            <p>Updated every 24 hours.</p>
                            <button className={mystyle.btn5} >Explore</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={mystyle.sect5}>
                <div className='container'>
                    <div className={mystyle.sect5di1}>
                        <h1>Trending Now</h1>
                        <button className={mystyle.btn6}><Link to="Detiles">view trending collection </Link></button>
                    </div>

                </div>
            </section>
            <footer className={mystyle.foo}>
                <div className="container">
                    <div className={mystyle.foodi1}>
                        <div className={mystyle.foodi1sub1} >
                            <h2>ALCart</h2>
                            <p>Providing the world's most luxurious shopping expreence. Curated with precision. delivered with care.</p>
                            <p><i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i> <i class="bi bi-twitter"></i></p>
                        </div>
                        <div className={mystyle.foodi1sub4}>
                            <h2>company</h2>
                            <ul>
                                <li><a href='#'>about us</a></li>
                                <li><a href='#'>careers</a></li>
                                <li><a href='#'>our brands</a></li>
                                <li><a href='#'>blog</a></li>
                            </ul>
                        </div>
                        <div className={mystyle.foodi1sub2}>
                            <h2>customers service</h2>
                            <ul>
                                <li><a href='#'>contact us</a></li>
                                <li><a href='#'>shopping info</a></li>
                                <li><a href='#'>returns & exchages</a></li>
                                <li><a href='#'>FAQs</a></li>
                            </ul>
                        </div>
                        <div className={mystyle.foodi1sub3}>
                            <h2>legal</h2>
                            <ul>
                                <li><a href='#'>terms & conditions</a></li>
                                <li><a href='#'>privacy policy</a></li>
                                <li><a href='#'>coojie policy</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className={mystyle.foodi2}>
                    <div className={mystyle.foodi2sub1} >
                        <p><i class="bi bi-c-circle"></i> 2026 ALCart E-coomers. Ananta Ladane All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default PortalBody;