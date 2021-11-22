import React, { useState, useContext, useEffect } from "react";
import { ItemContext } from "../components/ItemContext";

const BasketItem = ({ item }) => {
  const { men, setMen, women, setWomen } = useContext(ItemContext);

  const [amount, setAmount] = useState(item.quantity);

  const deleteItem = () => {
    let { quantity, ...updatedItem } = item;

    let allItems = men.concat(women);
    let newAllItems = allItems.map((piece) =>
      piece.name === item.name ? updatedItem : piece
    );
    let newMen = newAllItems.slice(0, 8);
    let newWomen = newAllItems.slice(8, 17);

    setMen(newMen);
    setWomen(newWomen);
  };

  useEffect(() => {
    let allItems = men.concat(women);
    let newAllItems = allItems.map((piece) =>
      piece.name === item.name
        ? { ...piece, quantity: parseInt(amount) }
        : piece
    );
    let newMen = newAllItems.slice(0, 8);
    let newWomen = newAllItems.slice(8, 17);

    setMen(newMen);
    setWomen(newWomen);
  }, [amount]);

  const changeAmount = (e) => {
    let newValue = parseInt(e.target.value);
    setAmount(newValue);
  };

  return (
    <div className="basket-item">
      <div className="basket-item__left">
        <div className="basket-img">
          <img className="img" src={item.img} alt="" />
        </div>
        <div className="basket-item-info">
          <div>{item.name}</div>
          <div>Price ${item.price}</div>
        </div>
      </div>
      <div className="basket-item__right">
        <p>Quantity</p>
        <input className="right__quantity" type="number" min="1" onChange={changeAmount} value={amount} />
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
};

export default BasketItem;
