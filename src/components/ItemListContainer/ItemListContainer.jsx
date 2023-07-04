import HeadingTitle from "../HeadingTitle/HeadingTitle";
import MostView from "../FilterMostView/MostView";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useFetch } from '../Hooks/UseFetch';

const ItemListContainer =() => {
    
    const{characters,loading,error} = useFetch('./characters.json');
    console.log(characters,loading,error)
    return(
        <>
            {loading && <h1 className="text-center text-xxl text-yellow-400 bg-red-400" >Loading...</h1>}
            <h1 className="mt-36">
                <HeadingTitle subTitle1='Discover AI-generated' principalTitle='characters for virtual'  divClass='text-center'/>
            </h1>
            <section className="mt-32 mb-32">
                <div className="flex justify-center">
                    <MostView />
                </div>
                <section className="flex justify-center">
                    <div className="grid gap-[2.06rem] grid-cols-4">
                    {loading && <h1 className="text-center text-xxl text-yellow-400 bg-red-400" >Loading...</h1>}
                        {characters.map((character) => ( 
                            
                            <ItemDetail key={character.id}{...character} />
                        ))}
                    </div>
                </section>
            </section>
            <h1 className="mb-32">
                <HeadingTitle subTitle1='More Characters' principalTitle='Comming Soon'  divClass='text-center'/>
            </h1>
            
        </>
    )
}

export default ItemListContainer;