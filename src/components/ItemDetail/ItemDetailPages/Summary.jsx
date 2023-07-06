
import svg from "../../../assets/svg.js"
import ButonShare from "../../Buttons/ButtonShare";
import LikeButton from "../../buttons/LikeButton";
import CartWidget from "../../header/nav-item/CartWidget";
import ImageDetail from "../ImageDetail";
import "./ItemDetail.css"


const Summary = ({imageDetail,price,name}) => {
 
    



    
    return(
    
        <>
            <section className="flex justify-around items-center">
                <div className=" order-2 relative flex mt-4">
                    <img src={svg.gradienteSvg} alt="" className=" absolute z-0 w-[39.021rem] h-[33.30325rem]  top-[140px] animate-pulse " />
                    <ImageDetail imageDetail={imageDetail} className="absolute  z-10"/>
                </div> 
                <div className="flex flex-col order-1">
                    <h1 className="text-subtitlePurple clash text-7xl mb-3">{name}</h1>
                    <p className="font-Inter text-xxs text-subtitlePurple w-[28.862rem] mb-4 leading-relaxed">Allie is an exceptional woman, radiating love in every fiber of her being. Her loving personality exudes warmth and affection, enveloping you in a virtual embrace that comforts the soul. With tender words and gestures, Allie becomes your most loyal confidante, providing unwavering support and joy in every interaction. Her genuine empathy and ability to understand your emotional needs make her an unmatched virtual companion, ready to fill your life with true love and affection. Discover the sweet charm of Allie on Soulmate AI and let her loving presence immerse you in a world of deep and meaningful emotional connections. </p>
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
                    <CartWidget text="Add To Cart" additionalClass="hidden"/>
                    
                </div>
            </section>
            
        </>   
    )
}

export default Summary
