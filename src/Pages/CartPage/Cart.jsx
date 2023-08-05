import Counter from "../../components/Buttons/Counter";
import { CartContext } from "../../context/cartContext";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const {cart, onAddToCart, onDecreaseItem,total,subtotal,onHandlerCreateCart} = useContext(CartContext);
    const navigate = useNavigate();

    
    const handlePayment = async () => {
        const cartId = await onHandlerCreateCart();
        navigate('/PaymentMethods', { state: { cartId: cartId.id } });
        
    }
    


    return (
        <div className="w-screen flex flex-col   items-center  pt-[7.56rem]">
            <div className="xs:w-[22.1875rem] lg:w-[34.53rem] j  border rounded-md border-borderCard  ">
                {cart?.length > 0 ? cart.map((character) => (
                        <div key={character.id} className="">
                            <div className="xs:flex-col lg:flex-row flex justify-between py-[2rem] ps-[1.67rem] pe-[2.56rem]">
                                <div className="flex">
                                    <img src={character.imageHome} alt={character.name} className="lg:h-[4.97rem] lg:w-[4.97rem] xs:w-[10.61031rem] xs:h-[10.61031rem]"/>
                                    <div className="flex-col ms-[1.21rem]  xs:h-[2rem]">
                                        <h3 className="text-titlePurple text-[2rem] clash-regular">{character.name}</h3>
                                        <p className="font-Inter text-xs text-subtitlePurple lg:mt-[0rem] xs:mt-[1.12rem]">${character.price} per/month </p>
                                        <div className=" xs:block lg:hidden mt-[0.88rem] ">
                                            <p className="mb-[0.75rem] font-Inter text-xxs font-normal text-subtitlePurple">Qty per months: {character.quantity}</p>
                                            <Counter
                                                initialQuantity={character.quantity}
                                                onAddToCart={(quantity) => onAddToCart(character, quantity)}
                                                onDecreaseItem={(newQuantity) => onDecreaseItem(character.id, newQuantity)}/> 
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center xs:ms-[11rem] lg:ms-[0] ">
                                    <div className="xs:hidden lg:block">
                                        <p className="mb-[0.75rem] font-Inter text-xs font-normal text-subtitlePurple">Qty per months: {character.quantity}</p>
                                        <Counter
                                            initialQuantity={character.quantity}
                                            onAddToCart={(quantity) => onAddToCart(character, quantity)}
                                            onDecreaseItem={(newQuantity) => onDecreaseItem(character.id, newQuantity)}
                                        /> 
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <p className="text-subtitlePurple font-Inter text-xxs ps-[1.67rem] pe-[2.56rem] pb-[2.75rem] "     >{character.description}</p>
                            </div>
                        </div>
                    )):(
                        
                        <p key="empty-cart-message"  className="Clash text-titlePurple flex justify-center py-[10rem]">Cart is empty</p>
                        
                    )
                }
                {cart?.length > 0 && (
                    <div className="flex justify-center">
                        <hr className="w-[31rem] border-borderCard " />
                    </div>
                    )}
                {cart?.length > 0 && (
                    <div className="flex justify-between py-[2rem] ps-[1.67rem] pe-[2.56rem]">
                        <p className="font-Inter text-base">Subtotal</p>
                        <p className="clash text-base text-titlePurple ">${subtotal}</p>
                    </div>
                )}
                {cart?.length > 0 && (
                    <div className="flex justify-center">
                        <hr className="w-[31rem] border-borderCard " />
                    </div>
                    )}
                {cart?.length > 0 && (
                    <div className="flex justify-between py-[2rem] ps-[1.67rem] pe-[2.56rem]">
                        <div className="flex flex-col">
                            <p className="font-Inter text-base">Total</p>
                            <p>Including $2.24 in taxes</p>
                        </div>
                        <div>
                            <p className="text-titlePurple clash text-4xl">${total}</p>
                        </div>
                </div>
                )}
            </div>
            <div className="mt-[1.56rem] xs:w-[22.1875rem] lg:w-[34.53rem] flex justify-end">
                <button className="border rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-subtitlePurple font-Inter text-xs border-subtitlePurple me-[1.19rem] disabled:opacity-50 disabled:pointer-events-none"disabled >
                    <span className="me-2 transform rotate-180">
                        <svg className="w-[0.30694rem] h-[0.61388rem]" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M1 1L8 8L1 15" stroke="#CDD4F0" strokeWidth="1.403" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    Back
                </button>
                <button className={`border rounded-full w-[9.75rem] h-[2.5625rem] flex items-center justify-center text-subtitlePurple font-Inter text-xs border-subtitlePurple ${
                        cart.length === 0 ? "opacity-50" : ""
                    }`} onClick={handlePayment} disabled={cart.length === 0}>
                    Next
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


export default Cart