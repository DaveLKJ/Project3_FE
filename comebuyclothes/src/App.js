import Authentication from './Pages/Authentication';
import './App.css';
import Cart from './Pages/Cart';
import DisplayListing from './Pages/DisplayListing';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (clothes) => {
    setCart([...cart, clothes]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <Router>
          <Navbar cart={cart}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ShoppingCart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
            <Route path='/listings' element={<DisplayListing addToCart={addToCart} />} />
            <Route path='/UserIdentification' element={<Authentication/>}/>
            </Routes>
        </Router>


    </div>
  );
}

export default App;



