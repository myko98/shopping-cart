import React, { useContext } from "react";
import BasketItem from "./BasketItem";
import { ItemContext } from "../components/ItemContext";

const Basket = ({ basket }) => {
  const { subTotal } = useContext(ItemContext);

  let num = 0;

  let numItems = basket.map((item) => {
    num = num + item.quantity;
  });

  console.log(num);

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
  };

  const hst = roundToTwo(subTotal * 0.13);
  const total = roundToTwo(hst + subTotal);

  if (basket.length === 0) {
    return <div>Cart is empty</div>;
  }

  return (
    <>
      <div className="shopping-cart">
        <div className="basket-container">
          {basket.map((item) => (
            <BasketItem item={item} />
          ))}
        </div>
        <div className="order-summary">
          <div className="order-summary__line">
            <p className="order-summary__header">Order Summary</p>
            <p>{num} Items</p>
          </div>
          <div className="order-summary__line">
            <p className="order-summary__header">Item(s) Subtotal</p>
            <p>{roundToTwo(subTotal)}</p>
          </div>
          <div className="order-summary__line">
            <p className="order-summary__header">HST (13%)</p>
            <p>{hst}</p>
          </div>
          <div className="order-summary__line">
            <p className="order-summary__header">Total</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
