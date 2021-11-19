import React, {useState} from "react";

const BasketItem = ({ item }) => {
  const [amount, setAmount] = useState(item.quantity);
  const changeAmount = (e) => {
    setAmount(e.target.value);
    item.quantity = amount;
  };
  return (
    <div className="basket-item">
      <div className="basket-img">
        <img className="img" src={item.img} alt="" />
      </div>
      <div className="basket-item-info">
        <div>{item.name}</div>
        <div>Price ${item.price}</div>
      </div>
      <div className="basket-quantity">
        <input type="number" onChange={changeAmount} value={amount} />
      </div>
    </div>
  );
};

export default BasketItem;
