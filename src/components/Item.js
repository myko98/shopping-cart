import React from "react";
import {Link } from "react-router-dom";

const Item = ({ key, img, name, price }) => {
  let nameNoSpace = name.replaceAll(' ','-');
  return (
    <div>
      <Link state={{name}} to={`/men/${nameNoSpace}`}>
        <img src={img} alt="" />
      </Link>

      <p>{name}</p>
      <p>{`$ ${price}`}</p>
    </div>
  );
};

export default Item;
