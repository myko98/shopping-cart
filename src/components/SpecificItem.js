import React, { useState } from "react";

const SpecificItem = ({ key, id, img, name, price, setMen, men }) => {
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(0);

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const addQuantity = () => {
    if (men[id].hasOwnProperty("quantity")) {
      console.log('hi')
      setTotal(prevState => prevState + parseInt(amount))
      console.log(total)
      let newMen = men.map((item) =>
      item.name === name ? { ...item, quantity: total  } : item
    );
    setMen(newMen);
    } else {
      let newMen = men.map((item) =>
      item.name === name ? { ...item, quantity: amount } : item
    );
    setMen(newMen);
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
