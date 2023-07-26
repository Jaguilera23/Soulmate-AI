import img from "../../../assets/imagenes.js";
import svg from "../../../assets/svg.js"
import ButonShare from "../../Buttons/ButtonShare.jsx";

import LikeButton from "../../Buttons/LikeButton.jsx";
import {useContext } from "react";
import ImageDetail from "../ImageDetail.jsx";
import "./ItemDetail.css"
import { CartContext } from "../../../context/cartContext.jsx";
import AddToCart from "../../Buttons/AddToCart.jsx";


const Summary = ({imageDetail,price,name,description, selectedCharacter }) => {
    
    
    const {onAddToCart} = useContext(CartContext);

        

    
  
    return(
    
        <>
            <section className="flex justify-around items-center">
                <div className=" order-2 relative flex mt-4 lg:bottom-[-2.8rem] 2xl:bottom-[-14rem]">
                    <img src={svg.gradienteSvg} alt="" className=" absolute z-0 w-[39.021rem] h-[33.30325rem]  top-[140px] animate-pulse " />
                    <img src={img.message1} alt="" className="absolute z-10 "/>
                    <img src={img.message2} alt="" className="absolute z-10 top-52 right-0 "/>
                    <img src={img.message3} alt="" className="absolute z-10 right-20 "/>
                    <ImageDetail imageDetail={imageDetail} className=""/>
                </div> 
                <div className="flex flex-col order-1">
                    <h1 className="text-subtitlePurple clash text-7xl mb-3">{name}</h1>
                    <p className="font-Inter text-xxs text-subtitlePurple w-[28.862rem] mb-4 leading-relaxed">{description}</p>
                    <div className="flex mb-3.5">
                        <p className="font-Inter text-sm text-subtitlePurple me-4">Robot Intelligence</p>
                        <div>
                            <LikeButton />
                            <ButonShare />
                        </div>
                    </div>
                    <div className="flex items-end mb-6">
                        <h1 className="clash text-subtitlePurple text-6xl pe-2">{price}<span className="text-4xl ps-1">$</span> </h1>
                        <p className="font-Inter text-xs text-subtitlePurple">Per/Month</p>
                    </div>
                    <AddToCart text="Add to Cart" imagen="cart" clase="w-[11.375rem] h-[2.5625rem] justify-center text-[0.78931rem] items-center border-subtitlePurple" onAddToCart={() => onAddToCart(selectedCharacter.id)} />
                    
                </div>
            </section>
            
        </>   
    )
}

export default Summary
