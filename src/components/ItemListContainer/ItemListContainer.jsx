/* eslint-disable react/jsx-key */
import { useState,useEffect } from 'react';
import Avatar from '../Avatares/Avatar';


const ItemListContainer = () => {

    
        const [characters, setCharacters] = useState([])
    
        useEffect(() => {
            const getCharacters = async () => {
            try {
            
                const response = await fetch('./characters.json');
                const data = await response.json();
    
                setTimeout(() => {
                    setCharacters(data);
                }, 2000);
    
            }catch(error){
                console.error(error)
            }
        }
    
        getCharacters();
        }, [])


    return (
        <div className=' flex flex-wrap  w-[917px]'>
            {characters.map((character) => ( 
                <Avatar {...character} />
            ))}
        </div>
    )
}

export default ItemListContainer;

