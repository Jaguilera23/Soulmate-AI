import './App.css'
import { Route,Routes,useLocation } from 'react-router-dom';

import AboutUs from './Pages/About/AboutUs';
import ItemListContainer from './Pages/Characters/ItemListContainer.jsx';

import ItemDetail from './Pages/ItemDetail/ItemDetail.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Head from './components/Head/Navbar.jsx';
import Landing from './Pages/Landing/Landing.jsx';
import Footline from './components/Footline/Footline.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Cart from './Pages/cart/Cart.jsx';
















function App() {
  
  const location = useLocation();

  const isItemDetail=location.pathname.includes('/ItemDetail');/* verifica si la ruta actual es itemDetail */


  return (<>
     
      <ScrollToTop />  
    <div>
      <Head />  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About"element={<AboutUs />} />
        <Route path='/ItemListContainer'   element={<ItemListContainer />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/ItemDetail/:characterId' element={<ItemDetail />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      {!isItemDetail && <Footline />}
    </div>
    </>
  )
}

export default App
