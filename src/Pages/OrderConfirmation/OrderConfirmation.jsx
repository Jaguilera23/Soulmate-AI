import { useLocation } from "react-router-dom";
import svg from "../../assets/svg";
import{useNavigate} from 'react-router-dom';


const OrderConfirmation = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const {orderId} = location.state || {orderId:null};
    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className=" flex flex-col justify-center items-center">
            <div className="xs:w-[22.1875rem] lg:w-[33.3973rem] text-center flex flex-col justify-center items-center  mt-[8.62rem]">
                <img src={svg.check} alt="" className="w-[3.74rem] h-[3.28rem] mb-[4.04rem]"/>
                <p className="font-Inter text-titlePurple text-lg">Thanks a lot for putting up this order</p>
                <p>Your order <span className="text-titlePurple underline">{orderId}</span> has successfully been placed. You`ll find all the details about your order below, and we`ll send you a shipping confirmation email as soon as your order ships <br /><br /> Questions? Suggestions? insightful showe thoughts? <br /><span className="text-titlePurple"><a href="mailto:">Shoot us an email</a></span></p>
            </div>
            <div className="xs:w-[22.1875rem] lg:w-[33.3973rem] flex justify-end">
                <button className="border  rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-subtitlePurple mt-[1.62rem] font-Inter text-xs border-subtitlePurple" type="submit" onClick={handleHome}>
                Go to Home
                    <span className="ms-2">
                        <svg className="w-[0.30694rem] h-[0.61388rem]" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M1 1L8 8L1 15" stroke="#CDD4F0" strokeWidth="1.403" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
            

                
        </div>
        
    )
}

export default OrderConfirmation