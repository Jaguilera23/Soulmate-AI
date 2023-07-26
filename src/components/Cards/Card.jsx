import { useState } from 'react';
import Avatar from "../Avatares/Avatar";
import imagenes from "../../assets/imagenes.js";
import ButonShare from "../Buttons/ButtonShare";
import ViewProfile from "../Buttons/ViewProfile";
import "./Card.css"
import LikeButton from '../Buttons/LikeButton';
import {useNavigate} from 'react-router-dom';
import AddToCart from '../Buttons/AddToCart';





const Card =({id,imageCard,price,onAddToCart}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    


    const onShowDetails = () => {
        navigate(`/ItemDetail/${id}`);
    
    }

    return(
        <div >
            <div className={`w-[15.625rem] h-[23.75rem] bg-[transparent] rounded-3xl border-borderCard border flex  flex-col pt-3 relative card-hover  GradientBorder ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <div className=" flex justify-center ">
                    <Avatar imageCard={imageCard} clase="w-[12.9375rem] h-[12.6875rem]  "/>
                    {isHovered && (<img src={imagenes.logoVoz} alt="" className="absolute top-36 w-40 h-40 animate-pulse "/>)}
                </div>    
                <div className="ps-5 pt-6 flex pb-9">
                    <p className="font-Inter clash-regular me-12 text-base"><span className="clash text-titlePurple pe-1">Base Price</span>{price}$</p>
                    <div className='flex'>
                        <LikeButton />
                        <ButonShare />
                    </div>
                </div>
                <div className="flex justify-evenly  items-center">
                    <ViewProfile text="View Profile" imagen="next" onShowDetails={onShowDetails} />
                    <AddToCart text="Add to Cart" imagen="cart" clase="bg-bgButtonGray border-none" onAddToCart={onAddToCart} id={id} />
                </div>
            </div>
        </div>
        
    )
}


export default Card;

