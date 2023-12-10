import React from "react";
import { Good } from "./type/Good";
import './Card.css';

type Props = {
  good: Good;
};

export const GoodCard: React.FC<Props> = ({ good }) => {
  return (
    <div className="card">
      <img src={good.photoUrl} alt="Product 2" />
      <h3>{good.name}</h3>
      <p className="price">{`${good.price}$`}</p>
    </div>
  );
};
