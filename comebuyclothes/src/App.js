import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import DisplayListing from './Pages/DisplayListing';
import Favourites from './Pages/Favourites';
import Profile from './Pages/Profile';
import Stores from './Pages/Stores';
import Checkout from './Pages/Checkout';
import Authentication from './Pages/Authentication';
import { addToCart, updateCart, removeFromCart } from './Utilities/cartUtilities';
import './App.css';

function App() {
  const [user, setUser] = useState(1);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const handleAddToCart = (clothes) => {
    setCart(addToCart(cart, clothes));
  };

  const handleUpdateCart = (updatedCart) => {
    setCart(updateCart(cart, updatedCart));
  };

  const handleRemoveFromCart = (product) => {
    setCart(removeFromCart(cart, product));
  };

  const handleAddToFavourites = (clothes) => {
    if (!favourites.some((item) => item.id === clothes.id)) {
      setFavourites([...favourites, clothes]);
    }
  };

  const handleRemoveFromFavourites = (product) => {
    setFavourites(favourites.filter((item) => item.id!== product.id));
  };

  return (
    <div className="App">
      {user? (
        <Router>
          <Navbar cart={cart} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/ShoppingCart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={handleRemoveFromCart}
                  updateCart={handleUpdateCart}
                />
              }
            />
            <Route
              path="/listings"
              element={
                <DisplayListing
                  addToCart={handleAddToCart}
                  addToFavourites={handleAddToFavourites}
                />
              }
            />
            <Route
              path="/Favourites"
              element={
                <Favourites
                  favourites={favourites}
                  addToCart={handleAddToCart}
                  removeFromFavourites={handleRemoveFromFavourites}
                />
              }
            />
            <Route path="/Profile" element={<Profile user={user} />} />
            <Route path="/Stores" element={<Stores />} />
            <Route path="/Checkout" element={<Checkout cart={cart} setCart={setCart}/>} />
          </Routes>
        </Router>
      ) : (
        <Authentication setUser={setUser} />
      )}
    </div>
  );
}

export default App;