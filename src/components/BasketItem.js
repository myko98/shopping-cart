import React, {useState, useContext} from "react";
import {ItemContext} from "../components/ItemContext"

const BasketItem = ({ item }) => {

  const {men, setMen, women, setWomen} = useContext(ItemContext);

  const [amount, setAmount] = useState(parseInt(item.quantity));

  const changeAmount = (e) => {

    console.log(e.target.value)
    let newValue = parseInt(e.target.value) ;

    //delete quantity property when value is 0, else we update the quantity amount
    if (e.target.value == 0) {
      let {quantity, ...updatedItem} = item

      let allItems = men.concat(women);
      let newAllItems = allItems.map(piece => piece.name === item.name ? updatedItem : piece)
      let newMen = newAllItems.slice(0,8);
      let newWomen = newAllItems.slice(8,17);
    
      setMen(newMen);
      setWomen(newWomen);
    } else {
      setAmount(newValue);
  
      let allItems = men.concat(women);
      let newAllItems = allItems.map(piece => piece.name === item.name ? {...piece,quantity: parseInt(amount)+1} : piece)
      let newMen = newAllItems.slice(0,8);
      let newWomen = newAllItems.slice(8,17);
    
      setMen(newMen);
      setWomen(newWomen);
    }


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
