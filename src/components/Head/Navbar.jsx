import { useState } from "react";
import CartWidget from './NavItem/CartWidget';
import Logo from './NavItem/Logo';
import HamIcon from './NavItem/HamIcon';
import svg from "../../assets/svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Download from "../Footline/Download/Download";


const Navbar =()=> {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick =()=>{
    setIsOpen(!isOpen)
 }
 const closeMenu = () => {
  setIsOpen(false);
};
  return (
    <div className="navbar justify-between mt-5">
      <div className="flex xs:ps-2 xs:pe-2 lg:ps-0 lg:pe-0 xs:w-screen xs:justify-between lg:w-fit">
        <div className={`nav-logo lg:order-2 xs:order-1 ${isOpen && "open"}`} >
          <Link to="/" onClick={closeMenu}><Logo /></Link>
        </div>
        <div className={`nav_toggle lg:order-1 xs:order-1 z-50 ${isOpen && "open"}`} onClick={handleClick}>
          <HamIcon isOpen={isOpen} handleClick={handleClick} />
        </div>
      </div>
      
      <div className={`nav-items  order-3   justify-between clash-regular items-center lg:w-[55rem] pe-5 2xl:w-[70rem] ${isOpen ? "open" : "flex"} `} >
        <div className={`links ${isOpen ? "open" : "flex"}`}>
          <Link to="/About" className="hover:text-titlePurple" onClick={closeMenu}>About</Link>
          <Link to="/ItemListContainer" className="hover:text-titlePurple" onClick={closeMenu}>Characters</Link>
          <Link to="/Contact" className="hover:text-titlePurple" onClick={closeMenu}>Contact</Link>
        </div>
        <div>
          <a href=""  ><CartWidget text="View Cart" /></a>
        </div>
        <hr className={`hr hidden ${isOpen && "open"}`}/>
        <div className={`hidden rrss ${isOpen && "open"}`}>
          <img src={svg.instagram} className="me-[0.94rem]" alt="" />
          <img src={svg.facebook} className="me-[0.94rem]" alt="" />
          <img src={svg.twitter} className="" alt="" />
        </div>
        <div className={` items-start   download hidden xs:text-xxs  ${isOpen && "open"}`}>
          <Download additionalClass="xs:w-[4rem]  xs:mb-3"/>
          <p className="w-52 mt-2 ">Build and manage finances more structured</p>
          <p className="mt-2">© Soul-Mate,inc 2023</p>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar












