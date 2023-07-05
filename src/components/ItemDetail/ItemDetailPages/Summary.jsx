// import { useFetch } from "../../Hooks/UseFetch"
// import Card from "../../ItemListContainer/Card/Card";
// import Spinner from "../../Spinner/Spinner";




// const Summary = () => {

//     const[characters,loading,error]= useFetch('./characters.json');

//     return (
//         <section className="flex justify-center">
//         {loading && <Spinner />}
//         {error && <h1>error</h1>}
//         <div className="grid gap-[2.06rem] grid-cols-4">
        
//             {characters.map((character) => ( 
//                 <Card  key={character.id}{...character}/>
//             ))}
//         </div>
//     </section>
//     )
// }

// export default Summary
