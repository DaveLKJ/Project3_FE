import React, { useState, useEffect } from 'react';
import ListingItem from "../Components/ListingItem";
import { Link } from 'react-router-dom';

function Cart(props) {
  const { cart, removeFromCart, updateCart } = props;

  const [updatedCart, setUpdatedCart] = useState(cart);

  useEffect(() => {
    setUpdatedCart(cart);
  }, [cart]);

  const handleQuantityChange = (id, quantity) => {
    const updatedItem = updatedCart.find((item) => item.id === id);
    if (updatedItem && quantity >= 1) {
      updatedItem.quantity = quantity;
      setUpdatedCart([...updatedCart]);
      updateCart(updatedCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setUpdatedCart(updatedCart.filter((item) => item.id !== id));
    updateCart(updatedCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      {updatedCart.length > 0 ? (
        <div>
          {updatedCart.map((product) => (
            <div key={product.id}>
              <ListingItem clothes={product} />
              <p>
                Quantity: {product.quantity}
                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)} disabled={product.quantity <= 1}>-</button>
                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                {product.quantity === 1 && (
                  <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
              )}
              </p>
              <Link to='/Checkout'>Proceed to checkout</Link>
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