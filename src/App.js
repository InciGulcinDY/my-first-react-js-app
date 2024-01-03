import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.jsx';
import Navbar from './layouts/Navbar/Navbar.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';
import CartDetail from './pages/CartDetail/CartDetail.jsx';
import Footer from './layouts/Footer/Footer.jsx';
import ProductAdd from './pages/ProductAdd/ProductAdd.jsx';

function App() {
  return (
    <>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element= {<Homepage />}></Route>
        <Route path='/products/:id' element= {<ProductDetail />}></Route>
        <Route path='/productadd' element= {<ProductAdd />}></Route>
        <Route path='/cart' element= {<CartDetail/>}></Route>
      </Routes>
      
      <Footer></Footer>
    </>
  );
}

export default App;
