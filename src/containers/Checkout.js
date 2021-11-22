import Basket from "../components/Basket";
import { useContext } from "react";
import "./Checkout.css";

const Checkout = ({ basket }) => {
  return (
    <div className="checkout">
      <div className="checkout-headers">
        <h1>Checkout</h1>
        <h1>Order Summary</h1>
      </div>
      <Basket basket={basket} />
    </div>
  );
};

export default Checkout;
