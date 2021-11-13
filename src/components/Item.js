import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Item = ({ img, name, price }) => {
  let nameNoSpace = name.replaceAll(' ','-');
  return (
    <div>
      <Link to={`/men/${nameNoSpace}`}>
        <img src={img} alt="" />
      </Link>

      <p>{name}</p>
      <p>{`$ ${price}`}</p>
    </div>
  );
};

export default Item;
