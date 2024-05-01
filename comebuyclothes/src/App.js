import Authentication from './Pages/Authentication';
import './App.css';
import Cart from './Pages/Cart';
import DisplayListing from './Pages/DisplayListing';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ShoppingCart' element={<Cart/>}/>
            <Route path='/DisplayListing' element={<DisplayListing/>} />
            <Route path='/UserIdentification' element={<Authentication/>}/>
            </Routes>
        </Router>


    </div>
  );
}

export default App;



