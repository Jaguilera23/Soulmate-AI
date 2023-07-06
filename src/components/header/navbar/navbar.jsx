import { Link } from "react-router-dom";


const Navbar = ({linkA,linkB,linkC}) => {
    return(
            <nav >
                <ul className="flex space-x-11 text-[14px] leading-5 tracking-tight font-normal font-Inter text-subtitlePurple">
                    <li className="hover:text-titlePurple"><Link to="/About">{linkA}</Link></li>
                    <li className="hover:text-titlePurple"><Link to="/ItemListContainer">{linkB}</Link></li>
                    <li className="hover:text-titlePurple"><Link to="/Contact">{linkC}</Link></li>
                </ul>
            </nav>
    )
};

export default Navbar;
