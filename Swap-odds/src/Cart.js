import React from "react";
import Item from "./Item";

const Cart = ({ items, cartNumber }) => {
  return (
    <div className="cart-container flex">
      <h3>Cart {cartNumber}</h3>
      {items.map((item, index) => {
        return <Item key={index} item={item} index={index} />;
      })}
    </div>
  );
};
export default Cart;
