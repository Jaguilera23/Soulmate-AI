import LikeButton from "../buttons-main/button-like";
import ButtonNext from "../buttons-main/button-next";
import ButtonShare from "../buttons-main/button-share";
import ReturnButton from "../buttons-main/button-return";


const ItemListContainer = ({ name, description, cost }) => {
    return (
        <div className="mt-24 ml-28 w-9/12 h-1/2">
            <div className="ps-5 pb-8">
                <ReturnButton />    
            </div>
            <div className="flex items-center pb-4 ps-4">
                <p className=" pe-5 font-Inter">Robot Intelligence</p>
                <div className="pe-2 flex">
                    <LikeButton/>
                </div>
                <div className="flex">
                    <ButtonShare />
                </div>
            </div>
            <h1 className="lg:text-8xl md:text-6xl sm:text-4xl  text-3xl mb-10  clash tracking-wide">{name}</h1>
            <p className="mb-9 w-5/6 ps-3 font-Inter ">{description}</p>
            <div className="flex items-end ps-3">
                <p className="flex w-600px"> Total Cost </p>
                <h1 className="ps-5 text-7xl clash">{cost}</h1>
            </div>
            <div className="ps-3 pt-10">
                <ButtonNext />
            </div>
            
        </div>
    )
}

export default ItemListContainer;