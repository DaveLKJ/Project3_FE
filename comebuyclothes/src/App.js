import Authentication from './Pages/Authentication';
import './App.css';
import Cart from './Pages/Cart';
import DisplayListing from './Pages/DisplayListing';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import { useState } from "react";
import Favourites from './Pages/Favourites';
import Profile from './Pages/Profile';
import Stores from './Pages/Stores';
import { getUser } from './Utilities/users-service';
import Payment from './Pages/Payment'



function App() {

  const [user,setUser] = useState (1) //to have a function getUser to see if the person is logged in, tagged to backend

  const [cart, setCart] = useState([]);

 const addToCart = (clothes) => {
  const existingItem = cart.find((item) => item.id === clothes.id);
  if (existingItem) {
    existingItem.quantity = Number(existingItem.quantity) + 1;
    setCart([...cart]);
  } else {
    setCart([...cart, { ...clothes, quantity: 1 }]);
  }
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
      {user ? (<Router>
          <Navbar cart={cart}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ShoppingCart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
            <Route path='/listings' element={<DisplayListing addToCart={addToCart} addToFavourites={addToFavourites} />} />
            <Route path='/Favourites' element={<Favourites favourites={favourites} addToCart={addToCart} removeFromFavourites={removeFromFavourites}/>}/>
            <Route path='/Profile' element={<Profile user={user}/>}/>
            <Route path='/Stores' element={<Stores/>}/>
            <Route path='/Payment' element={<Payment cart={cart}/>}/>
            </Routes>
        </Router>
      ):(
        <Authentication setUser={setUser}/>
      )}

    </div>
  );
}

export default App;



