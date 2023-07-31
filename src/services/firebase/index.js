import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';




export const firebaseServices ={
    createOrder : async (order) =>{
        try{
        const db = getFirestore();
        const ordersCollections = collection(db, 'orders');
        const orderCreated = await addDoc(ordersCollections, order);
        return{
            id: orderCreated.id,
        }
    }
    catch(error){
        console.log(error);
        return {error: error};


        }
    },

    createCart: async (cart) => {
        try {
            const db = getFirestore();
            const cartsCollection = collection(db, 'carts');
            const cartCreated = await addDoc(cartsCollection, cart);
            return {
                id: cartCreated.id
            }
        } catch (error) {
            return { error }
        }
    },

    updateCart: async (cartId) => {
        try {
            const db = getFirestore();
            const docRef = doc(db, 'carts', cartId);
            const data = {
                status: 'completed'
            }

            await updateDoc(docRef, data);
        } catch (error) {
            console.error(error)
            return { error }
        }
    },

    getCartById: async (cartId) => {
        try{
            const db = getFirestore();
            const docRef = doc(db, 'carts', cartId);
            const result = await getDoc(doc(docRef));
            return result.data();

        }
        catch(error){
            return {error: error};
        }
    }
}