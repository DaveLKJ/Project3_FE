import ListingItem from "../Components/ListingItem";

function Cart(props) {
  const { cart, removeFromCart } = props;

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <ListingItem clothes={product} />
              <button onClick={() => removeFromCart(product)}>
              Remove from Cart
              </button>
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