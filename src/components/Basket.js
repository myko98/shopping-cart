import React , {useContext} from "react";
import "./Basket.css";
import BasketItem from "./BasketItem";

const Basket = ({ basket }) => {
  

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
          <h1>Order Summary</h1>
          <p>Item(s) Subtotal</p>
          <p>HST</p>
        </div>
      </div>
    </>
  );
};

export default Basket;
