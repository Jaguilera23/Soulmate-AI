import Logo from './nav-item/Logo';
import CartWidget from './nav-item/CartWidget';
import HamIcon from './nav-item/HamIcon';
import Navbar from './navbar/Navbar';


const Header =()=> {
    return (
        <header className="header flex justify-between py-10 px-10 items-center ">
            <div className='order-1 flex items-center '>
                <HamIcon />
                <a href="/" className='order-1 ps-1'><Logo /></a>
            </div>
            <div className='order-2 flex items-center space-x-11'>
                <Navbar linkA="About us" linkB="Characters" linkC="Contact"/>
            </div>
            <div className="order-3 ">
                <CartWidget />
            </div>
        </header> 
    )
}

export default Header;