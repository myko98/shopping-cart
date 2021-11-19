import Basket from "../components/Basket";
import React, { useContext } from "react";

const Checkout = ({ basket }) => {
  // const data = useContext(ItemContext);

  return (
    <div>
      <h1>Checkout</h1>
      <Basket basket={basket} />
    </div>
  );
};

export default Checkout;
