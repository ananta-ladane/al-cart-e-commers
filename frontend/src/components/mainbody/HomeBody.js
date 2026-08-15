import { useState } from 'react';
import mystyle from './HomeBody.module.css';


const HomeBody = () => {

    const [alert, setAlert] = useState(false);


    const getAlert = () => {
        setAlert(true)
    }

    const Close = () => {
        setAlert(false)
    }

    return (
        <div className={mystyle.main}>

            {
                alert && <div className={mystyle.alert}><p>Login required. Please login first.</p> <button className={mystyle.albt1} onClick={Close}>Ok</button></div>
            }
            <section className={mystyle.sect1}>
                <div className="container">
                    <p ><i class="bi bi-circle-fill"></i> summer  collection 2026</p>
                    <h1>Style That <span>defines</span> you.</h1>
                    <p>Expreience teh next generation of online shoping. Up to 60% off on premium electronics and lifestyle essentials</p>
                    <div className='d-flex'>
                        <button className={mystyle.btn1} onClick={getAlert}>Shop Now <i class="bi bi-arrow-right"></i></button>
                        <button className={mystyle.btn2} onClick={getAlert}>View offers</button>
                    </div>
                </div>
            </section>
            <section className={mystyle.sect2}>
                <div className='container'>
                    <h1>Shop by Catrgpry</h1>
                    <div className={mystyle.sect2di1}>
                        <p>Brepwse our curated collections</p>
                        <p><a href='#'>view all categories</a></p>

                    </div>

                    <div className={mystyle.sect2di2}>
                        <div className={mystyle.sect2sub1}>
                            <p>gadgets</p>
                            <p>electronics</p>
                        </div>
                        <div className={mystyle.sect2sub2}>
                            <p>footwar</p>
                            <p>luxury sneakers</p>
                        </div>
                        <div className={mystyle.sect2sub3}>
                            <p>home office</p>
                            <p>interior decor</p>
                        </div>
                        <div className={mystyle.sect2sub4}>
                            <p>audio</p>
                            <p>sound systems</p>
                        </div>
                    </div>

                </div>

            </section>
            <section className={mystyle.sect3}>
                <div className='container'>
                    <div className={mystyle.sect3di1}>
                        <p>hot picks</p>
                        <p>trending now</p>
                        <p></p>
                    </div>

                    <div className={mystyle.sect3di2}>
                        <figure >
                            <div className={mystyle.figsub1}><p><i class="bi bi-heart"></i></p>

                            </div>
                            <figcaption>
                                <div className={mystyle.figcapsub1}>
                                    <p>best seller</p>
                                    <p><i class="bi bi-star-fill"></i> 4.9</p>
                                </div>
                                <p className={mystyle.hyp}>HyperX wireless headphones</p>
                                <b className={mystyle.pri1}> $299.00 <span>$399.00</span></b>
                            </figcaption>
                        </figure>
                        <figure >
                            <div className={mystyle.figsub2}><p><i class="bi bi-heart"></i></p>

                            </div>
                            <figcaption>
                                <div className={mystyle.figcapsub2}>
                                    <p>new arrial</p>
                                    <p><i class="bi bi-star-fill"></i> 4.8</p>
                                </div>
                                <p className={mystyle.hyp}>minimalist quartz watch</p>
                                <b className={mystyle.pri1}> $149.00</b>
                            </figcaption>
                        </figure>
                        <figure >
                            <div className={mystyle.figsub3}><p><i class="bi bi-heart"></i></p>

                            </div>
                            <figcaption>
                                <div className={mystyle.figcapsub3}>
                                    <p>limited edition</p>
                                    <p><i class="bi bi-star-fill"></i> 4.7</p>
                                </div>
                                <p className={mystyle.air}>air max pro sneakers</p>
                                <b className={mystyle.pri1}> $185.00 <span>$210.00</span></b>
                            </figcaption>
                        </figure>

                        <figure >
                            <div className={mystyle.figsub4}><p><i class="bi bi-heart"></i></p>

                            </div>
                            <figcaption>
                                <div className={mystyle.figcapsub4}>
                                    <p>trnding</p>
                                    <p><i class="bi bi-star-fill"></i> 5</p>
                                </div>
                                <p className={mystyle.sun}>designer sun-glasses</p>
                                <b className={mystyle.pri1}> $112.00 </b>
                            </figcaption>
                        </figure>
                    </div>

                </div>

            </section>
            <section className={mystyle.sect4}>
                <div className='container'>
                    <div className={mystyle.sect4di1}>
                        <div className={mystyle.sect4sub1}>
                            <p>flash deal</p>
                            <h1>smart tech sale up to <span>45% off</span></h1>
                            <p>Upgrade your home workspace with our premium gadgets collections. Limited time offer</p>
                            <button className={mystyle.seal} onClick={getAlert}>greb seal now</button>
                        </div>
                        <div className={mystyle.sect4sub2}>
                            <p>menember exclusive</p>
                            <h1>new season sneakers</h1>
                            <p>Join the LuxeCart rewards program and get early access to our exclusive sneaker drop</p>
                            <button className={mystyle.join} onClick={getAlert}>join rewards</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={mystyle.sect5}>
                <div className='container'>
                    <div className={mystyle.sect5di1}>
                        <p>Join the Inner Circle</p>
                        <p>subcribe to our newsletter and get 15% off your first order, plus early access to sales</p>
                        <div className={mystyle.sect5sub1} >
                            <input type="text" placeholder='Enter your email address' />
                            <button className={mystyle.subscr} onClick={getAlert}>subscribe now</button>
                        </div>
                        <p>By subscribing, you agree to our Terms and Privacy Policy</p>
                    </div>
                </div>
            </section>
            <footer className={mystyle.foo}>
                <div className="container">
                    <div className={mystyle.foodi1}>
                        <div className={mystyle.foosub1}>
                            <p className={mystyle.flog}><i class="bi bi-bag"></i> ALCert</p>
                            <p className={mystyle.we}>We curate the finest selection of global brands and premium products to elevate your everyday living experience</p>
                            <div className={mystyle.foosub1di1}>
                                <p><i class="bi bi-facebook"></i></p>
                                <p><i class="bi bi-twitter"></i></p>
                                <p><i class="bi bi-instagram"></i></p>
                                <p><i class="bi bi-linkedin"></i></p>
                            </div>
                        </div>
                        <div className={mystyle.foosub2}>
                            <p>Quick Lineks</p>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>shop all products</a></li>
                                <li><a href='#'>special offers</a></li>
                                <li><a href='#'>latest Blog</a></li>
                                <li><a href='#'>FAQs</a></li>
                            </ul>
                        </div>
                        <div className={mystyle.foosub3}>
                            <p>customer support</p>
                            <ul>
                                <li><a href='#'>shipping policy</a></li>
                                <li><a href='#'>returns & refunds</a></li>
                                <li><a href='#'>track orders</a></li>
                                <li><a href='#'>privacy policy</a></li>
                                <li><a href='#'>term of service</a></li>
                            </ul>
                        </div>
                        <div className={mystyle.foosub4}>
                            <p>Contact Details</p>
                            <p><i class="bi bi-geo-alt"></i> at pune maharashtra</p>
                            <p><i class="bi bi-telephone"></i> <a href='call:+9193077477797'>+91 9307747797</a></p>
                            <p><i class="bi bi-envelope"></i> <a href='mailto:anantaladane42@gmail.com'> anantaladane42@gmail.com</a></p>
                        </div>

                    </div>
                </div>
                <div className={mystyle.foodi2}>
                    <div className={mystyle.foodi2sub1}>
                        <p className={mystyle.alcart}><i class="bi bi-c-circle"></i> 2026 ALCoart E-Commerce. Ananta Ladane All rights reserved.</p>
                        <div className={mystyle.foodi2sub2}>
                            <p>Developed with <i class="bi bi-heart-fill"></i> for shoppers </p>
                            <p><i class="bi bi-globe"></i> India</p>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    )
}

export default HomeBody;