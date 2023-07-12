
import CompanyList from "./companyList/CompanyList";
import HelpList from "./helpList/HelpList";
import Download from "./Download/Download";
import Logo from "../Head/NavItem/Logo";
import { Link } from "react-router-dom";

const Footline = () => {

    return(

        <div className="font-Inter  xs:ps-4 md:ps-0 text-subtitlePurple xs:mb-20 md:mb-64 flex md:justify-between  md:mx-24 xs:flex-col   md:flex-col lg:flex-row md:w-10/12  lg:mx-24   xs:w-[22rem] ">
            <div>
                <Link to="/" ><Logo /></Link>
                <p className="w-52 mt-5 ">Build and manage finances more structured</p>
                <p className="mt-8">© Soul-Mate,inc 2023</p>
            </div>
            <div className="flex md:justify-between   xs:mt-8 xs:flex-col md:flex-row    md:w-[540px]  ">
                <div className="flex xs:mb-10 md:mb-0">
                    <CompanyList item1={"How it Works"} item2={"Service"} item3={"Blog"} item4={"About Us"} />
                <HelpList item1={"FAQ"} item2={"Online Chat"} item3={"Newsletter"} />
                </div>
                
                <Download />
            </div>
        </div>
    )

}

export default Footline