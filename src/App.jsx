import './App.css'
import { Route,Routes,useLocation } from 'react-router-dom';

import AboutUs from './Pages/About/AboutUs';
import ItemListContainer from './Pages/Characters/ItemListContainer';
import Contact from './Pages/Contact/Contact';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
















function App() {
  
  const location = useLocation();

  const isItemDetail=location.pathname.includes('/ItemDetail');/* verifica si la ruta actual es itemDetail */


  return (<>
  
      <ScrollToTop />  
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About"element={<AboutUs />} />
        <Route path='/ItemListContainer' element={<ItemListContainer />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/ItemDetail/:characterId' element={<ItemDetail />}/>
      </Routes>
      {!isItemDetail && <Footer />}
    </div>
    </>
  )
}

export default App
