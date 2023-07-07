
import CompanyList from "./companyList/CompanyList";
import HelpList from "./helpList/HelpList";
import Download from "./Download/Download";
import Logo from "../Head/Nav-item/Logo";
import { Link } from "react-router-dom";

const Footline = () => {

    return(

        <div className="font-Inter text-subtitlePurple mb-64 flex justify-between mx-24  ">
            <div>
                <Link to="/" ><Logo /></Link>
                <p className="w-52 mt-5">Build and manage finances more structured</p>
                <p className="mt-8">© Soul-Mate,inc 2023</p>
            </div>
            <div className="flex justify-between w-[540px]">
                <CompanyList item1={"How it Works"} item2={"Service"} item3={"Blog"} item4={"About Us"} />
                <HelpList item1={"FAQ"} item2={"Online Chat"} item3={"Newsletter"} />
                <Download />
            </div>
        </div>
    )

}

export default Footline