import { useContext, useEffect, useState } from "react";
import svg from "../../assets/svg";
import { useNavigate, useLocation } from "react-router-dom";
import { firebaseServices } from "../../services/firebase";
import { CartContext } from "../../context/cartContext";
import { useQuery } from "../../Hooks/useQuery";




const CheckOut = () => {

    const{cart, total, setCart,clearCart} = useContext(CartContext);
    const {state} = useLocation();
    const [creditCardChecked] = useState(true);
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);

    

    const handleBack = () => {
        navigate('/PaymentMethods');
    }
    
    let query = useQuery();

    useEffect(() => {
        const cartId = query.get("cartId") 
        
        if(query.get("cartId")) {
            const getCart = async () => {
                const cart = await firebaseServices.getCartById(cartId)
                return cart
            }
            getCart()
                .then((cart) => {
                    setCart(cart.items)
                })
                .catch((error) => {
                    console.log({error})
                })
        }

    }, [query, setCart])

    //validation name
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const validateName = (inputName) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(inputName);
    };

    const handleNameChange = (e) => {
    setName(e.target.value);
    if (!validateName(e.target.value)) {
        setNameError("Invalid name");
    } else {
        setNameError("");
    }
    };

    //validation  email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    //validation tdc

    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberError, setCardNumberError] = useState("");

    const validateCardNumber = (inputCardNumber) => {
        
        const cardNumberRegex = /^[0-9]{16,}$/;
        return cardNumberRegex.test(inputCardNumber);
    };
    
    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
        if (!validateCardNumber(e.target.value)) {
            setCardNumberError("Invalid card ");
        } else {
            setCardNumberError("");
        }
    };

    //validation cvv

    const [cvv, setCVV] = useState("");
    const [cvvError, setCVVError] = useState("");

    const validateCVV = (inputCVV) => {
        const cvvRegex = /^[0-9]{3}$/;
        return cvvRegex.test(inputCVV);
    };
    
    const handleCVVChange = (e) => {
        setCVV(e.target.value);
        if (!validateCVV(e.target.value)) {
            setCVVError("Invalid CVV format");
        } else {
            setCVVError("");
        }
    };
    
    //validation address

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    
    const validateAddress = (inputAddress) => {

        const addressRegex = /^[a-zA-Z0-9\s,-]+$/;
        return addressRegex.test(inputAddress);
    };

    const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (!validateAddress(e.target.value)) {
        setAddressError("Invalid address format");
    } else {
        setAddressError("");
    }
    };

    //validation ZIP
    const [postCode, setPostCode] = useState("");
    const [postCodeError, setPostCodeError] = useState("");

    const validatePostCode = (inputPostCode) => {
        const postCodeRegex = /^\d{5}$/;
        return postCodeRegex.test(inputPostCode);
    };
    
    const handlePostCodeChange = (e) => {
    setPostCode(e.target.value);
    if (!validatePostCode(e.target.value)) {
        setPostCodeError("Invalid must be 5 digits");
    } else {
        setPostCodeError("");
    }
    };

    const onHandlerOrder = async () => {
        const newOrder = {
            buyer: {
                name:name,
                email:email,
                address:address,
                cardNumber: cardNumber,
                cvv: cvv,
                postCode: postCode,
            },
            createAt: new Date(),
            items:cart,
            total:total,
            payment:{
                currency: 'USD',
                method: 'CREDIT CARD',
                type: 'CREDIT CARD' 
            }
        }

        const orderId = await firebaseServices.createOrder(newOrder);
        await firebaseServices.updateCart(state.cartId)
        clearCart();
        return {
            orderId
        };
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const {orderId} = await onHandlerOrder();
        navigate('/OrderConfirmation' , { state: { orderId: orderId.id } });
        
    }

    useEffect(() => {
        setIsFormValid(
            !nameError &&
            !emailError &&
            !cardNumberError &&
            !cvvError &&
            !addressError &&
            !postCodeError &&
            name.trim() !== "" &&
            email.trim() !== "" &&
            cardNumber.trim() !== "" &&
            cvv.trim() !== "" &&
            address.trim() !== "" &&
            postCode.trim() !== ""
        );
    }, [nameError, emailError, cardNumberError, cvvError, addressError, postCodeError, name, email, cardNumber, cvv, address, postCode]);



    return (

        <main className="flex flex-col items-center justify-center mt-[6.56rem]">
            <div className="xs:w-[22.1875rem] lg:w-[34.5625rem] flex justify-start">
                <p className="font-Inter font-medium text-sm mb-[1.63rem]">Select payment process</p>
            </div>
            <div className="xs:w-[22.1875rem] lg:w-[34.5625rem] h-[28.4375rem] border border-subtitlePurple border-opacity-20 rounded-md ">
                <div className="xs:w-[22.1875rem] lg:w-[34.5625rem] h-[5.1875rem] my-[1.62rem] flex justify-between" >
                    <div>
                        <div className=" flex my-[1.59rem]">
                            <input
                            type="checkbox"
                            checked={creditCardChecked}
                            className={`w-[0.97275rem]] h-[0.97275rem]  rounded-full  transition-all ms-[1.96rem] me-[0.56rem] `}
                            readOnly
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
                <form action="" className="flex flex-col" onSubmit={onSubmit}>
                    <div className="flex justify-evenly items-center relative">
                        <div className="flex flex-col items-center">
                            <label htmlFor="name" className="font-Inter text-xs mb-[0.29rem] text-transparent">Name</label>
                            <input type="text" id="name" placeholder="Jose Perez" className=" xs:w-[10.375rem] lg:xs:w-[10.375rem] lg:w-[23.625rem] h-[2.16rem] rounded-md text-black bg-[#D0D5DD]"value={name}
                                onChange={handleNameChange}/>
                            {nameError && <p className="text-red-500 text-xxs absolute z-50 top-16 ">{nameError}</p>}
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="date" className="font-Inter text-xs mb-[0.29rem]">Expiry</label>
                            <input type="date" id="date"  className="w-[7rem] h-[2.16rem] rounded-md text-xxs text-[#344054] bg-[#D0D5DD]  " />
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center mt-[0.78rem]">
                        <div className="flex flex-col relative ">
                                <label htmlFor="cardNumber" className="font-Inter text-xs text-[#344054] mb-[0.29rem]">Card number</label>
                                <input type="text" id="cardNumber"  placeholder="Card number" className="xs:w-[10.375rem] lg:w-[23.625rem] h-[2.16rem] rounded-md text-black bg-[#D0D5DD]" value={cardNumber}
                                onChange={handleCardNumberChange}/>
                                <div className="flex justify-center">
                                    {cardNumberError && <p className="text-red-500 text-xxs absolute z-50 top-16">{cardNumberError}</p>}
                                </div>
                        </div>
                        <div className="flex flex-col relative">
                            <label htmlFor="cvv" className="font-Inter text-xs mb-[0.29rem]">CVV</label>
                            <input type="password" id="cvv" placeholder="CVV" className="w-[7rem] h-[2.16rem] rounded-md text-black bg-[#D0D5DD]"value={cvv}
                            onChange={handleCVVChange}/>
                            {cvvError && <p className="text-red-500 text-xxs absolute z-50 top-16">{cvvError}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col items-center  mt-[1.06rem] relative">
                            <label htmlFor="email" className="font-Inter text-xs mb-[0.29rem] flex justify-start xs:w-[18.8125rem] lg:w-[32.125rem]">Email</label>
                            <input type="email" id="email" placeholder="correo@domain.com" className="xs:w-[18.8125rem] lg:w-[32.125rem] h-[2.16rem] rounded-md text-black bg-[#D0D5DD]" value={email}
                                onChange={handleEmailChange}/>
                            {emailError && <p className="text-red-500 text-xxs absolute z-50 top-16">{emailError}</p>}
                    </div>
                    <div className="flex justify-evenly items-center mt-[0.78rem] ">
                        <div className="flex flex-col relative">
                                <label htmlFor="address" className="font-Inter text-xs  mb-[0.29rem]">Address</label>
                                <input type="text" id="address" placeholder="Address here" className="xs:w-[10.375rem] lg:w-[23.625rem] h-[2.16rem] rounded-md text-black bg-[#D0D5DD]" value={address}
                                onChange={handleAddressChange}/>
                                {addressError && <p className="text-red-500 text-xxs z-50 absolute top-16">{addressError}</p>}
                        </div>
                        <div className="flex flex-col relative">
                            <label htmlFor="postCode" className="font-Inter text-xs mb-[0.29rem]">Zip Code</label>
                            <input type="password" id="postCode" placeholder="ZIP" className="w-[7rem] h-[2.16rem] rounded-md text-black bg-[#D0D5DD]"
                            value={postCode}
                            onChange={handlePostCodeChange}/>
                            {postCodeError && <p className="text-red-500 text-xxs absolute z-50 top-16">{postCodeError}</p>}
                        </div>
                    </div>
                    <div className="xs:w-[22.1875rem] lg:w-[34.5625rem] flex justify-center mt-[4.3rem]">
                        <img src={svg.lock} alt="lock" className="me-[0.76rem]"/>
                        <p className="font-inter text-xs">We protect your payment information using encryption to provide bank-level security.</p>
                    </div>
                    <div className="mt-[1.56rem] xs:w-[22.1875rem] lg:w-[34.5625rem] flex justify-end">
                        <button className="border rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-subtitlePurple font-Inter text-xs border-subtitlePurple me-[1.19rem] "onClick={handleBack} >
                            <span className="me-2 transform rotate-180">
                                <svg className="w-[0.30694rem] h-[0.61388rem]"  viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M1 1L8 8L1 15" stroke="#CDD4F0" strokeWidth="1.403" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            Back
                        </button>
                        <button className={`border rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-subtitlePurple font-Inter text-xs border-subtitlePurple ${isFormValid ? '' : 'opacity-50 pointer-events-none'}`} type="submit" disabled={!isFormValid}>
                            CheckOut
                            <span className="ms-2">
                                <svg className="w-[0.30694rem] h-[0.61388rem]" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M1 1L8 8L1 15" stroke="#CDD4F0" strokeWidth="1.403" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            
            
        </main>
    )
}

export default CheckOut

