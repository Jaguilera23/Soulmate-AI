import { createContext, useState} from "react";
import { firebaseServices } from "../services/firebase";


const initialState = {
    characters:[],
    cart:[],
    setCart:()=>{},
    getItemQuantity:()=>{},
    onDecreaseItem:()=>{},
    onAddToCart:()=>{},
    onDeleteItem:()=>{},
    onHandlerCreateCart:()=>{},
    clearCart:()=>{},
    total:0,
    subtotal:0,
    
}

export const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [characters, setCharacters] = useState([]);

    const onHandlerCreateCart = async () => {
        const newCart = {
            buyer: {
            id: 1,
            },
            items: cart,
            createdAt: new Date(),
            total: total,
            status: 'pending',
        }

        const cartId = await firebaseServices.createCart(newCart)

        return cartId
    }

    const clearCart = () => {
        setCart([]);
    };


    const onAddToCart = (selectedCharacter) => {
        const item = cart.find((character) => character.id === selectedCharacter.id);
        if (!item) {
            setCart([...cart, { ...selectedCharacter, quantity: 1 }]);
        } else {
            setCart((currentCart) => {
            return currentCart.map((character) => {
                if (character.id === selectedCharacter.id) {
                return { ...character, quantity: character.quantity + 1 };
            } else {
                return character;
                }
            });
        });
        }
    };



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
        <CartContext.Provider value={{cart,setCart,onAddToCart,onDecreaseItem,onDeleteItem,total,characters,setCharacters,subtotal, onHandlerCreateCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )

}


