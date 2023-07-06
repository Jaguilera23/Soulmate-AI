import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/header/header';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './Pages/About/AboutUs';
import ItemListContainer from './Pages/Characters/ItemListContainer';
import Contact from './Pages/Contact/Contact';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';














function App() {
  



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
      {/* <Home />
      <ItemListContainer />
      <AboutUs />
      <Contact />  */}
      {/* <ItemDetail /> */}
      <Footer />
    </div>
    </>
  )
}

export default App
