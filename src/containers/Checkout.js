import Basket from "../components/Basket";
import {useContext} from 'react';

const Checkout = ({ basket }) => {
  return (
    <div>
      <h1>Checkout</h1>
      <Basket basket={basket} />
    </div>
  );
};

export default Checkout;
