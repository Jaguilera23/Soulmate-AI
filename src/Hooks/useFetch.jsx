/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect,useState} from 'react';

export const useFetch =(url,config) => {


    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handelFetch = useCallback(
        async() => {
            try {
                const response = await fetch(url, config);
                if(!response.ok) throw new Error(response.statusText); //para prevenir un falso postivo
                const data = await response.json();


                // setTimeout(() => {
                    setCharacters(data);
                // }, 2000);
            } 
            catch (error) {
                setError(error.message)
            }
            finally {
                // setTimeout(() => {
                setLoading(false);
                // }, 2000);
            }
        },
        [],
    )

    useEffect(() => {
        if (characters.length === 0) handelFetch()   
    }, []);

    return{
        characters,
        loading,
        error,
    }

}