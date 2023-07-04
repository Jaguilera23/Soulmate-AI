
import { useFetch } from '../Hooks/UseFetch'; 
import Avatar from '../Avatares/Avatar';


const Characters = () => {

    const{characters,loading,error}=useFetch('./characters.json');
    

    return (
        <div className=' flex flex-wrap  w-[917px]'>
            {characters.map((character) => ( 
                <Avatar key={character.id} {...character} />
            ))}
        </div>
    )
}

export default Characters;

