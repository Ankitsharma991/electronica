import React, { Fragment } from "react";
import "./cart.css";
import CartItemCard from "./CartItemCard.js";

const Cart = () => {
  const item = {
    product: "productId",
    price: 200,
    name: "Ankit",
    quantity: 1,
  };
  return (
    <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="cartContainer">
          <CartItemCard item={item} />
          <div className="cartInput">
            <button>-</button>
            <input type="number" value={item.quantity} readOnly />
            <button>+</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
