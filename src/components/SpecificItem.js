import React from "react";

const SpecificItem = ({ key, img, name, price, setMen, men}) => {


  const addQuantity = () => {
    let quantity = document.querySelector(".quantity");
    let value = quantity.value
    let newMen = men.map((item) => 
    item.name === name? {...item,quantity: value}: item)

    setMen(newMen);

  }



  return (
    <div>
      <img src={img} alt="" />

      <p>{name}</p>
      <p>{`$ ${price}`}</p>
      <input className="quantity" type="number" min="1" max="90"/>
      <button onClick={addQuantity}>Add to cart</button>
    </div>
  );
};

export default SpecificItem;
