import Authentication from './Pages/Authentication';
import './App.css';
import Cart from './Pages/Cart';
import DisplayListing from './Pages/DisplayListing';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
  <Authentication/>
  <hr />
  <Cart/>
  <hr />
  <DisplayListing />
  <hr/>
  <Home/>
    </div>
  );
}

export default App;
