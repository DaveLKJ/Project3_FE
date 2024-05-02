import { useState } from "react";
import ListingItem from "../Components/ListingItem";

function DisplayListing(props) {
    const {addToCart, addToFavourites} = props
  const [availClothes, setAvailClothes] = useState([
    {
        id: 1,
      name: "Crop Tank Top",
      price: 14.9,
      color: ["blue", "green"],
      imgUrl:
        "https://www.halfphaselabel.com/cdn/shop/products/BF9I4729_1024x1024.jpg?v=1639675684",
    },
    {
        id: 2,
      name: "Cotton Short Sleeve T-Shirt",
      price: 14.9,
      color: ["yellow", "red"],
      imgUrl:
        "https://static.massimodutti.net/3/photos/2024/V/0/1/p/6802/901/704/6802901704_1_1_16.jpg?t=1704813553148&impolicy=massimodutti-itxmediumhigh&imformat=chrome&imwidth=500",
    },
    {
        id: 3,
      name: "Linen Short Sleeve T-Shirt",
      price: 14.9,
      color: ["blue"],
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgVFhtCzhphgdWfqgDXUcYfsaZXyzoAv0lgPNwPJjOA&s",
    },
  ]);

  return (
    <div>
      {availClothes.map((clothes) => {
        return (
          <div>
            <ListingItem clothes={clothes} />
            <button onClick={() => addToCart(clothes)}>Add to Cart</button>
            <button onClick={() => addToFavourites(clothes)}>Add to Favourites</button>
          </div>
        );
      })}
    </div>
  );
}
export default DisplayListing;
