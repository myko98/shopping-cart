import React from "react";
import "./Basket.css";

const Basket = ({ basket }) => {
  if (basket.length === 0) {
    return <div>Cart is empty</div>;
  }
  return (
    <>
      <div className="shopping-cart">
        <div className="basket-container">
          {basket.map((item) => (
            <div className="basket-item">
              <div className="basket-img">
                <img className="img" src={item.img} alt="" />
              </div>
              <div className="basket-item-info">
                <div>{item.name}</div>
                <div>Price ${item.price}</div>
              </div>
              <div className="basket-quantity">
                <input type="number" value={item.quantity}/>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <h1>Order Summary</h1>
        </div>
      </div>
    </>
  );
};

export default Basket;
