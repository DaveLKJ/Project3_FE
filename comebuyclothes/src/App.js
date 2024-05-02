import Authentication from './Pages/Authentication';
import './App.css';
import Cart from './Pages/Cart';
import DisplayListing from './Pages/DisplayListing';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import { useState } from "react";
import Favourites from './Pages/Favourites';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (clothes) => {
    setCart([...cart, clothes]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (clothes) => {
    if (!favourites.some((item) => item.id === clothes.id)) {
      setFavourites([...favourites, clothes]);
    }
  };

  const removeFromFavourites = (product) => {
    setFavourites(favourites.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <Router>
          <Navbar cart={cart}/>
          <Favourites favourites={favourites} addToCart={addToCart} removeFromFavourites={removeFromFavourites}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ShoppingCart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
            <Route path='/listings' element={<DisplayListing addToCart={addToCart} addToFavourites={addToFavourites} />} />
            <Route path='/UserIdentification' element={<Authentication/>}/>
            </Routes>
        </Router>


    </div>
  );
}

export default App;



