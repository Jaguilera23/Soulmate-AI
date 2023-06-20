import Logo from './nav-item/logo';
import Cart from './nav-item/cart';
import HamIcon from './nav-item/hamIcon';
import ItemsCart from './nav-item/items-cart';
import Navbar from './navbar/navbar';


const Header =()=> {
    return (
        <header className="header flex justify-between py-10 px-10 items-center ">
            <a href="/" className='order-1'><Logo /></a>
            <div className='order-2 flex items-center space-x-11'>
                <div ><Navbar linkA="ABOUT US" linkB="CONTACT"/></div>
                <div className='order-last flex items-center'>
                    <p className='pe-2.5'>SHOP CART</p>
                    <div className='flex items-end space-x-1'>
                        <a href='/Cart'><Cart /></a>
                        <ItemsCart  />
                    </div>
                </div>
            </div>
            <div className='order-3'>
                    <HamIcon />
            </div>
        </header> 
    )
}

export default Header;