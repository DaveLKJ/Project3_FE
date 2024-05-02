import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css"
import { Link } from "react-router-dom";



const Navbar = (props) => {
const {cart} = props

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">

          <div className="item">
            <Link className ="link" to="/listings">Shop</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">comebuyclothes</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" >
                <Link to="/ShoppingCart">
                    <ShoppingCartOutlinedIcon/>
                    <span>{cart.length}</span>
                    </Link>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;