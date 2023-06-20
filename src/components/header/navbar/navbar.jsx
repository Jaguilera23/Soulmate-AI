const Navbar = ({linkA,linkB}) => {
    return(
            <nav >
                <ul className="flex space-x-11 text-base leading-5 tracking-tight font-normal font-Inter">
                    <li><a href="/">{linkA}</a></li>
                    <li><a href="/about">{linkB}</a></li>
                </ul>
            </nav>
    )
};

export default Navbar;
