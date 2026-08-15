// import { useDispatch, useSelector } from 'react-redux';
// import { actions } from '../store';
import mystyle from './Navbar.module.css';
import { Link } from 'react-router';


const NavBar = () => {
     
    
    return (
        <div className={mystyle.main}>

            <div className={mystyle.sub}>
                <ul>
                    <li>E-commers</li>
                    <li><Link to="/addprocard"><i class="bi bi-cart-plus"></i></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;