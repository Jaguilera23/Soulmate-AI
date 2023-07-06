
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch'; 
import Avatar from '../Avatares/Avatar';
import Spinner from '../Spinner/Spinner';



const Characters = () => {

    const{characters,loading,error}=useFetch('/characters.json');
    

    return (
        <div className=' flex flex-wrap  w-[917px]'>
            {loading && <Spinner />}
            {error && <h1>error</h1>}
            {characters.map((character) => ( 
                <Link to={"/ItemListContainer"} key={character.id}>
                    <Avatar {...character} />
              </Link>
            ))}
        </div>
    )
}

export default Characters;

