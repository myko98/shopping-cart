import React from "react";
import { Link } from "react-router-dom";

const Item = ({ key, img, name, price, men, women }) => {
  let nameNoSpace = name.replaceAll(" ", "-");
  if (women === undefined) {
    return (
      <div>
        <Link state={{ name }} to={`/men/${nameNoSpace}`}>
          <img src={img} alt="" />
        </Link>

        <p>{name}</p>
        <p>{`$ ${price}`}</p>
      </div>
    );
  } else {
    return (
      <div>
        <Link state={{ name }} to={`/women/${nameNoSpace}`}>
          <img src={img} alt="" />
        </Link>

        <p>{name}</p>
        <p>{`$ ${price}`}</p>
      </div>
    );
  }
};

export default Item;
