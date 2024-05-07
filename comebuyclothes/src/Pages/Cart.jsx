import React from 'react';
import ListingItem from "../Components/ListingItem";
import { Link } from 'react-router-dom';

function Cart(props) {
  const { cart, removeFromCart } = props;

  const getQuantity = (id) => {
    return cart.filter((item) => item.id === id).reduce((acc, cur) => acc + cur.quantity, 0);
  }

  return (
    <div>
        
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <ListingItem clothes={product} />
              <p>Quantity: {getQuantity(product.id)}</p>
              <button onClick={() => removeFromCart(product)}>
              Remove from Cart
              </button>
              <Link to='/Payment'>Proceed to checkout</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;