
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch'; 
import Avatar from '../Avatares/Avatar';
import Spinner from '../Spinner/Spinner';
import useFilters from '../../Hooks/useFilters';


const Characters = ({claseContenedor}) => {
    
    const{characters,loading,error}=useFetch('/characters.json');

    const {filterProducts} = useFilters();
    

    return (
        <div className=' flex  xs:justify-center  xs:flex-wrap   sm:w-[70rem]  xs:w-[21.80rem]  '>
            {loading && <Spinner />}
            {error && <h1>error</h1>}
            {filterProducts(characters).map((character) => ( 
                <Link to={`/ItemDetail/${character.id}`} key={character.id}>
                    <Avatar {...character} claseContenedor={claseContenedor} />
                </Link>
            ))}
        </div>
    )
}

export default Characters;


