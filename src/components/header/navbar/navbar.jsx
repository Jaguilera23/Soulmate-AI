import CartWidget from "../nav-item/CartWidget";

const Navbar = ({linkA,linkB,linkC}) => {
    return(
            <nav >
                <ul className="flex space-x-11 text-[14px] leading-5 tracking-tight font-normal font-Inter text-subtitlePurple">
                    <li className="hover:text-titlePurple"><a href="/">{linkA}</a></li>
                    <li className="hover:text-titlePurple"><a href="/about">{linkB}</a></li>
                    <li className="hover:text-titlePurple"><a href="/about">{linkC}</a></li>
                </ul>
            </nav>
    )
};

export default Navbar;
