import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)


  function handleCartClick(){
    setInCart(!inCart)
  }


  return (
    <li className={inCart === true ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart === false ? "add" : "remove"} onClick={handleCartClick}>{inCart === false ? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
