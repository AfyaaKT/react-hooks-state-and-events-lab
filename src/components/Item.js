import React, { useState } from "react";

function Item({ name, category }) {
  const [availability , setAvailability]=useState(true)
  const listClass = availability? "" : "in-cart"

  function addToCart(){
    setAvailability( !availability)
  }
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{availability ? 'Add to Cart' : 'Remove From Cart' }</button>
    </li>
  );
}

export default Item;
