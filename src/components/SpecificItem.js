import React, { useState } from "react";

const SpecificItem = ({
  key,
  menId,
  womenId,
  img,
  name,
  price,
  setMen,
  men,
  women,
  setWomen,
}) => {
  const [amount, setAmount] = useState(1);

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };
  //console.log(women[id]);
  //console.log(men[id])

  const addQuantity = () => {
    if (women === undefined) {
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
    <div className="specific-item">
      <div className="specific-item__img">
        <img className="img" src={img} alt="" />
      </div>

      <div className="specific-item__info">
        <h1>{name}</h1>
        <h1>{`$${price}`}</h1>
        <p>Quantity</p>
        <input
          className="specific-item__quantity"
          type="number"
          min="1"
          value={amount}
          onChange={changeAmount}
        />
        <br></br>
        <button className="specific-item__add" onClick={addQuantity}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default SpecificItem;
