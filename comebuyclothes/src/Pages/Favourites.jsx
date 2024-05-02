import ListingItem from "../Components/ListingItem";

function Favourites(props) {
    const {favourites, removeFromFavourites, addToCart} = props;

    return (
        <div style={{border:'1px solid red'}}>
          {favourites.length > 0 ? (
            <div>
              {favourites.map((product) => (
                <div key={product.id}>
                  <ListingItem clothes={product} />
                  <button onClick={() => removeFromFavourites(product)}>
                  Remove from Favourites
                  </button>
                  <button onClick={() => addToCart(product)}>
                  Add To Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>You have no favourites.</p>
          )}
        </div>
      );
}

export default Favourites