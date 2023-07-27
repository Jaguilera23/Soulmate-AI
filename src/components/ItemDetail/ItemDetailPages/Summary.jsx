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
            <section className="lg:flex-row flex xs:flex-col justify-around items-center">
                <div className=" order-2 relative flex mt-4 lg:bottom-[-2.8rem] xs:bottom-[-3.5rem] 2xl:bottom-[-14rem]">
                    <img src={svg.gradienteSvg} alt="" className=" absolute z-0 lg:w-[39.021rem] lg:h-[33.30325rem] xs:w-[21.91688rem] h-[18.70538rem] xs:top-[80px] lg:top-[140px] animate-pulse " />
                    <img src={img.message1} alt="" className="absolute z-10 w-[ 9.13169rem] h-[5.06663rem]"/>
                    <img src={img.message2} alt="" className="absolute z-10 top-52 right-0 w-[10.45819rem] h-[4.59863rem]"/>
                    <img src={img.message3} alt="" className="absolute z-10 right-20 w-[5.40606rem] h-[1.14819rem]"/>
                    <ImageDetail imageDetail={imageDetail} className=" "/>
                </div> 
                <div className="flex flex-col order-1">
                    <h1 className="text-subtitlePurple clash xs:text-[4.29788rem] lg:text-7xl mb-3">{name}</h1>
                    <p className="font-Inter text-xxs text-subtitlePurple xs:w-[19.9375rem] lg:w-[28.862rem] mb-4 leading-relaxed">{description}</p>
                    <div className="flex mb-[3.5rem mt-[1.88rem]">
                        <p className="font-Inter text-sm text-subtitlePurple me-4">Robot Intelligence</p>
                        <div>
                            <LikeButton />
                            <ButonShare />
                        </div>
                        
                    </div>
                    <div className="xs:block lg:hidden">
                        <hr className="w-[13.5rem] h-[0.0625rem] border-subtitlePurple mt-[3.06rem] mb-[1.56rem]"/>
                        <p className="font-Inter text-xs  text-subtitlePurple mb-[0.81rem]">TotalCost</p>
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
