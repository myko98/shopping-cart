import Basket from "../components/Basket"

const Checkout = ({basket}) => {


  return (
    <div>
      <h1>Checkout</h1>
      <Basket basket={basket} />
    </div>
  );
};

export default Checkout;