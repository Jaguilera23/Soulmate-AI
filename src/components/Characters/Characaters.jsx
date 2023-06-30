/* eslint-disable react/jsx-key */
import { useState,useEffect } from 'react';
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import MostView from "../FilterMostView/MostView";
import Card from "../Cards/Card";

const Characters =() => {
    
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
    
    return(
        <>
            <h1 className="mt-36">
                <HeadingTitle subTitle1='Discover AI-generated' principalTitle='characters for virtual' />
            </h1>
            <section className="mt-32 mb-32">
                <div className="flex justify-center">
                    <MostView />
                </div>
                <section className="flex justify-center">
                    <div className="grid gap-[2.06rem] grid-cols-4">
                        {characters.map((character) => ( 
                            <Card {...character} />
                        ))}
                        
                    </div>
                </section>
            </section>
            <h1 className="mb-32">
                <HeadingTitle subTitle1='More Characters' principalTitle='Comming Soon' />
            </h1>
            
        </>
    )
}

export default Characters;