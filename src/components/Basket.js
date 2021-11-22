import React , {useContext} from "react";
import BasketItem from "./BasketItem";
import {ItemContext} from "../components/ItemContext"

const Basket = ({ basket }) => {

  const {subTotal} = useContext(ItemContext)

  

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
  }

  const hst = roundToTwo(subTotal * .13);
  const total = roundToTwo(hst+subTotal)


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
          <p>Item(s) Subtotal</p>
          <p>{roundToTwo(subTotal)}</p>
          <p>HST (13%)</p>
          <p>{hst}</p>
          <p>Total</p>
          <p>{total}</p>
        </div>
      </div>
    </>
  );
};

export default Basket;
