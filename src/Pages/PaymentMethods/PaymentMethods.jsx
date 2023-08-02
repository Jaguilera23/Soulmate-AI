import { useContext,useState } from "react";
import { CartContext } from "../../context/cartContext";
import svg from "../../assets/svg";
import { useNavigate,useLocation } from "react-router-dom";



const PaymentMethods = () => {

    const {total} = useContext(CartContext)
    const [creditCardChecked, setCreditCardChecked] = useState(false);
    const [applePayChecked, setApplePayChecked] = useState(false);
    const [paypalChecked, setPaypalChecked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const cartId = location.state.cartId;

    const handlePayment = () => {
            navigate('/CheckOut', { state: { cartId: cartId } });
        };
    
    const handleBack = () => {
        navigate('/CartPage');
    }
    
    const handleCreditCardChange = () => {
        setCreditCardChecked(!creditCardChecked);
    };

    return (    
        <main className="flex flex-col items-center justify-center mt-[6.56rem]">
            <div className="w-[34.5625rem] flex justify-start">
                <p className="font-Inter font-medium text-sm mb-[1.63rem]">Select payment process</p>
            </div>
            <div className="w-[34.5625rem] h-[7.8125rem] border-subtitlePurple border border-opacity-20 rounded-md flex justify-between  items-center mb-[1.62rem]">
                <div className="ms-8 font-Inter">
                    <p className="text-base">Total</p>
                    <p className="text-xs">Including $2.24 in taxes</p>
                </div>
                <div className="me-8">
                    <p className="text-titlePurple clash text-4xl">${total}</p>
                </div>
            </div>
            <div className="w-[34.5625rem] h-[5.1875rem] border-subtitlePurple border-opacity-20 border rounded-md my-[1.62rem] flex justify-between" >
                <div>
                    <div className=" flex my-[1.59rem]">
                        <input
                        type="checkbox"
                        checked={creditCardChecked}
                        onChange={handleCreditCardChange}
                        className={`w-[0.97275rem]] h-[0.97275rem]  rounded-full  transition-all ms-[1.96rem] me-[0.56rem] `}
                        />
                        <div>
                            <p className="font-Inter text-xxs">Credit Card</p>
                            <p className="font-Inter text-xxs text-[#667085]">Unlimited users and unlimited individual data.</p>
                        </div>
                    </div>
                </div>
                <div className="flex me-[1.96rem]">
                    <img src={svg.visa} alt="visa"  className="me-[0.43rem]"/>
                    <img src={svg.master} alt="mastercard" />
                </div>
            </div>
            <div className="w-[34.5625rem] h-[5.1875rem] border-subtitlePurple border-opacity-20 border rounded-md my-[1.62rem] flex justify-between" >
                <div>
                    <div className=" flex my-[1.59rem]">
                        <input
                        type="checkbox"
                        checked={applePayChecked}
                        onChange={() => setApplePayChecked(!applePayChecked)}
                        className={`w-[0.97275rem]] h-[0.97275rem]  rounded-full  transition-all ms-[1.96rem] me-[0.56rem] opacity-50`}
                        disabled
                        />
                        <div>
                            <p className="font-Inter text-xxs">Apple Pay</p>
                            <p className="font-Inter text-xxs text-[#667085]">Unlimited users and unlimited individual data.</p>
                        </div>
                    </div>
                </div>
                <div className="flex me-[1.96rem]">
                    <img src={svg.applePay} alt="applepay"  className="me-[0.43rem]"/>
                </div>
            </div>
            <div className="w-[34.5625rem] h-[5.1875rem] border-subtitlePurple border-opacity-20 border rounded-md mt-[1.62rem] flex justify-between" >
                <div>
                    <div className=" flex my-[1.59rem]">
                        <input
                        type="checkbox"
                        checked={paypalChecked}
                        onChange={() => setPaypalChecked(!paypalChecked)}
                        className={`w-[0.97275rem]] h-[0.97275rem]  rounded-full  transition-all ms-[1.96rem] me-[0.56rem] opacity-50`}
                        disabled
                        
                        />
                        <div>
                            <p className="font-Inter text-xxs">PayPal</p>
                            <p className="font-Inter text-xxs text-[#667085]">Unlimited users and unlimited individual data.</p>
                        </div>
                    </div>
                </div>
                <div className="flex me-[1.96rem]">
                    <img src={svg.paypal} alt="paypal"  className="me-[0.43rem]"/>
                    
                </div>
            </div>
            <div className="w-[34.5625rem] flex justify-center mt-[1.29rem]">
                <img src={svg.lock} alt="lock" className="me-[0.76rem]"/>
                <p className="font-inter text-xs">We protect your payment information using encryption to provide bank-level security.</p>
            </div>
            <div className="mt-[1.56rem] w-[34.53rem] flex justify-end">
                <button className="border rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-subtitlePurple font-Inter text-xs border-subtitlePurple me-[1.19rem] "onClick={handleBack} >
                    <span className="me-2 transform rotate-180">
                        <svg className="w-[0.30694rem] h-[0.61388rem]" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M1 1L8 8L1 15" stroke="#CDD4F0" strokeWidth="1.403" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    Back
                </button>
                <button className="border rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-subtitlePurple font-Inter text-xs border-subtitlePurple" onClick={handlePayment}>
                    Next
                    <span className="ms-2">
                        <svg className="w-[0.30694rem] h-[0.61388rem]" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M1 1L8 8L1 15" stroke="#CDD4F0" strokeWidth="1.403" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
        
        </main>
    )
}

export default PaymentMethods;