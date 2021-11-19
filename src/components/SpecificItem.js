import React, { useState } from "react";

const SpecificItem = ({key,menId, womenId,img,name,price,setMen,men,women,setWomen,}) => {
  const [amount, setAmount] = useState(1);

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };
  //console.log(women[id]);
  //console.log(men[id])

  const addQuantity = () => {
  
    if (women === undefined) {
      console.log(men[menId])
      //amount value is actually a string -> needs to be converted to integer
      if (men[menId].hasOwnProperty("quantity")) {
        let prevAmount = parseInt(men[menId].quantity);
        let total = prevAmount + parseInt(amount);

        let newMen = men.map((item) =>
          item.name === name ? { ...item, quantity: total } : item
        );
        setMen(newMen);
      } else {
        let newMen = men.map((item) =>
          item.name === name ? { ...item, quantity: parseInt(amount) } : item
        );
        setMen(newMen);
      }
    } else {
      console.log(womenId);
      if (women[womenId].hasOwnProperty("quantity")) {
        let prevAmount = parseInt(women[womenId].quantity);
        let total = prevAmount + parseInt(amount);

        let newWomen = women.map((item) =>
          item.name === name ? { ...item, quantity: total } : item
        );
        setWomen(newWomen);
      } else {
        let newWomen = women.map((item) =>
          item.name === name ? { ...item, quantity: parseInt(amount) } : item
        );
        setWomen(newWomen);
      }
     }
  };

  return (
    <div>
      <img src={img} alt="" />

      <p>{name}</p>
      <p>{`$ ${price}`}</p>
      <input
        className="quantity"
        type="number"
        min="1"
        value={amount}
        onChange={changeAmount}
      />
      <button onClick={addQuantity}>Add to cart</button>
    </div>
  );
};

export default SpecificItem;
