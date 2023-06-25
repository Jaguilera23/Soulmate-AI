const Navbar = ({linkA,linkB,linkC}) => {
    return(
            <nav >
                <ul className="flex space-x-11 text-base leading-5 tracking-tight font-normal font-Inter text-subtitlePurple">
                    <li><a href="/">{linkA}</a></li>
                    <li><a href="/about">{linkB}</a></li>
                    <li><a href="/about">{linkC}</a></li>
                </ul>
            </nav>
    )
};

export default Navbar;
