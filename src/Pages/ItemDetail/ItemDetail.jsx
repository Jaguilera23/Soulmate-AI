import { useFetch } from "../../Hooks/useFetch";
import Spinner from "../../components/Spinner/Spinner";

import Summary from "../../components/ItemDetail/ItemDetailPages/Summary";
import { useParams} from "react-router-dom";


const ItemDetail = () => {
    const{characterId} = useParams();
    const { characters, loading, error } = useFetch('/characters.json');






    const selectedCharacter = characters.find((character) => character.id === characterId);

    return (
        <section className="">
            {loading && <Spinner />}
            {error && <h1>error</h1>}
            <div className="">
                {selectedCharacter && <Summary key={selectedCharacter.id} {...selectedCharacter} selectedCharacter={selectedCharacter}/>}
                
            </div>
        </section>
        )
}

export default ItemDetail;