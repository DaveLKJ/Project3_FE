import React from "react";
import { Link } from "react-router-dom";

function ListingItem(props) {
  const { clothes} = props;

  return (
    <div>
        <img src={clothes.images[0]} alt={clothes.name} />
      <h3>{clothes.name}</h3>
      <p>${clothes.price}</p>
     
    </div>
  );
}

export default ListingItem;
