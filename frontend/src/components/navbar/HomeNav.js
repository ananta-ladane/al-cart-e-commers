import { Link } from 'react-router';
import mystyle from './HomeNav.module.css';

const HomeNav = () => {
    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <p className={mystyle.log}><button className={mystyle.btn1}><i class="bi bi-bag"></i></button>AL<span>Cart</span></p>
                <div className={mystyle.sub1}>
                    <button className={mystyle.btn2}><Link className={mystyle.lpa} to="/login">Login</Link></button>
                    <button className={mystyle.btn3}><Link className={mystyle.lpa1} to="/signup">Sign up</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;