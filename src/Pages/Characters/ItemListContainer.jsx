import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import MostView from "../../components/FilterMostView/MostView";
import Card from "../../components/Cards/Card";
import { useFetch } from '../../Hooks/useFetch';
import Spinner from "../../components/Spinner/Spinner";

const ItemListContainer =() => {
    
    const{characters,loading,error} = useFetch('/characters.json');
    
    return(
        <>
            
            <h1 className="mt-36">
                <HeadingTitle subTitle1='Discover AI-generated' principalTitle='characters for virtual'  divClass='text-center'/>
            </h1>
            <section className="mt-32 mb-32">
                <div className=" justify-center hidden lg:flex">
                    <MostView />
                </div>
                <section className="flex justify-center">
                    {loading && <Spinner />}
                    {error && <h1>error</h1>}
                    <div className={`grid gap-[2.06rem] lg:grid-cols-3 xl:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 `}>
                    
                        {characters.map((character) => ( 
                            <Card key={character.id}{...character} />
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