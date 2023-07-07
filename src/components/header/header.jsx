import Logo from './nav-item/Logo';
import CartWidget from './nav-item/CartWidget';
import HamIcon from './nav-item/HamIcon';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';


const Header =()=> {
    return (
        <div className="header flex justify-between py-10 px-10 items-center ">
            <div className='order-1 flex items-center '>
                <HamIcon />
                <Link to="/" className='order-1 ps-1'><Logo /></Link>
            </div>
            <div className='order-2 flex items-center space-x-11'>
                <Navbar linkA="About us" linkB="Characters" linkC="Contact"/>
            </div>
            <div className="order-3 ">
                <CartWidget text="View cart"/>
            </div>
        </div> 
    )
}

export default Header;