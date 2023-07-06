import { useFetch } from "../../Hooks/useFetch";
import Spinner from "../../components/Spinner/Spinner";


import Summary from "../../components/ItemDetail/ItemDetailPages/Summary";
import { useParams } from "react-router-dom";


const ItemDetail = () => {
    const{characterId} = useParams();
    const url =`./characters.json/${characterId}`

    const { characters, loading, error } = useFetch(url);

    return (
        <section className="">
            {loading && <Spinner />}
            {error && <h1>error</h1>}
            <div className="">
                {characters.map((character) =>
                    character.id === characterId ? (
                    <Summary key={character.id} {...character} />
                ) : null
            )}
            </div>
        </section>
        )
}

export default ItemDetail;