import React from "react";
import { Link } from "react-router-dom";

function ListingItem(props) {
  const { clothes} = props;

  return (
    <div>
      <Link to={`/clothes/${clothes.id}`}>
        <img src={clothes.imgUrl} alt={clothes.name} />
      </Link>
      <h3>{clothes.name}</h3>
      <p>${clothes.price}</p>
     
    </div>
  );
}

export default ListingItem;