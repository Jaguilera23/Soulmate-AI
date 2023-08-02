import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FilterProvider } from './context/FilterProvider.jsx'

import { CartProvider } from './context/cartContext.jsx'


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCKeSGKmG2LpKyJGF4eQs61BP6I5AUJQJI",

  authDomain: "marketplace-coder-30de6.firebaseapp.com",

  projectId: "marketplace-coder-30de6",

  storageBucket: "marketplace-coder-30de6.appspot.com",

  messagingSenderId: "49952842338",

  appId: "1:49952842338:web:dc76915beaf2aedaea273b"

};

// Initialize Firebase

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>

  </FilterProvider>,
)
