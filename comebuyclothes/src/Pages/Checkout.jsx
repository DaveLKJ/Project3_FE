import React from 'react';

function Checkout(props) {
  const { cart, setCart } = props;

  const handleProceedToPayment = () => {
    console.log('setCart:', setCart);
    setCart([]);
    alert('Thank you for your payment! Your cart has been cleared.');
  };

  return (
    <div>
      <div>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.quantity}</p>
                <p>total price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            );
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {cart.length > 0 && (
        <button onClick={handleProceedToPayment}>Pay!</button>
      )}
    </div>
  );
}

export default Checkout;