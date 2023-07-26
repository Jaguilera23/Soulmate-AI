import { createContext, useState} from "react";

const initialState = {
    characters:[],
    cart:[],
    setCart:()=>{},
    getItemQuantity:()=>{},
    onDecreaseItem:()=>{},
    onAddToCart:()=>{},
    onDeleteItem:()=>{},
    total:0,
    subtotal:0,
}

export const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [characters, setCharacters] = useState([]);



    const onAddToCart = (id) => {
        const item = characters.find((character) => character.id === id);
        if(cart?.length === 0){
            setCart([{...item, quantity: 1}])
        }
        if(cart?.length > 0 && !cart?.find((character) => character.id === id)){
            setCart([...cart, {...item, quantity: 1}])
        }
        if(cart?.length > 0 && cart?.find((character) => character.id === id)) {
            setCart((currentCart) => {
                return currentCart.map((character) => {
                    if(character.id === id) {
                        return { ...character, quantity: character.quantity + 1 }
                    } else {
                        return character
                    }
                })
            });
        }
    }
    const onDecreaseItem = (id, newQuantity) => {
        // Buscar el personaje en el carrito
        const existingCharacter = cart.find((character) => character.id === id);
    
        if (existingCharacter) {
          // Si el personaje está en el carrito, actualizamos su cantidad al nuevo valor recibido desde Counter
            const updatedCart = cart.map((character) =>
            character.id === id ? { ...character, quantity: newQuantity } : character
            );
            setCart(updatedCart);
            if (newQuantity === 0) {
                onDeleteItem(id);
            }
        }
        setCharacters([...characters])
    };

    const onDeleteItem = (id) => {
        // Filtrar los personajes que no tengan el ID recibido para eliminar el producto del carrito
        const updatedCart = cart.filter((character) => character.id !== id);
        setCart(updatedCart);
    };
    
    const subtotal = cart.reduce((total, character) => total + character.price * character.quantity, 0);

        // Calcular el total sumando el subtotal y los impuestos (por ejemplo, $2.24)
    const total = subtotal + 2.24;

    return(
        <CartContext.Provider value={{cart,setCart,onAddToCart,onDecreaseItem,onDeleteItem,total,characters,setCharacters,subtotal}}>
            {children}
        </CartContext.Provider>
    )

}


