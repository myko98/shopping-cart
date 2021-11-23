import React from "react";
import { Link } from "react-router-dom";

const Item = ({ key, img, name, price, men, women }) => {
  let nameNoSpace = name.replaceAll(" ", "-");
  if (women === undefined) {
    return (
      <div>
        <div className="shopping-img">
          <Link state={{ name }} to={`/men/${nameNoSpace}`}>
            <img className="img" src={img} alt="" />
          </Link>
        </div>

        <p className="shopping-name">{name}</p>
        <p className="shopping-price">{`$ ${price}`}</p>
      </div>
    );
  } else {
    return (
      <div>
        <div className="shopping-img">
          <Link state={{ name }} to={`/women/${nameNoSpace}`}>
            <img className="img" src={img} alt="" />
          </Link>
        </div>

        <p className="shopping-name">{name}</p>
        <p className="shopping-price">{`$ ${price}`}</p>
      </div>
    );
  }
};

export default Item;
