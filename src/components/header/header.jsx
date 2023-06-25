import Logo from './nav-item/Logo';
import CartWidget from './nav-item/CartWidget';
import HamIcon from './nav-item/HamIcon';
import Navbar from './navbar/Navbar';


const Header =()=> {
    return (
        <header className="header flex justify-between py-10 px-10 items-center ">
            <a href="/" className='order-1'><Logo /></a>
            <div className='order-2 flex items-center space-x-11'>
                <div ><Navbar linkA="ABOUT US" linkB="CHARACTERS" linkC="CONTACT"/></div>
                <div className='order-last flex items-center'>
                    <div className='flex items-end space-x-1'>
                        <a href='/Cart'><CartWidget /></a>
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