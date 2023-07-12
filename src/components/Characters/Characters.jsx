
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch'; 
import Avatar from '../Avatares/Avatar';
import Spinner from '../Spinner/Spinner';



const Characters = () => {

    const{characters,loading,error}=useFetch('/characters.json');
    

    return (
        <div className=' flex  xs:justify-center  xs:flex-wrap   sm:w-[70rem]  xs:w-[21.80rem]  '>
            {loading && <Spinner />}
            {error && <h1>error</h1>}
            {characters.map((character) => ( 
                <Link to={`/ItemDetail/${character.id}`} key={character.id}>
                    <Avatar {...character} />
                </Link>
            ))}
        </div>
    )
}

export default Characters;

