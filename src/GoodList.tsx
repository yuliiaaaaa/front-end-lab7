import React from "react";
import { GoodCard } from "./Good";
import { Good } from "./type/Good";
import './Card.css';

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <div className="goods-list">
      {goods.map((good) => (
        <GoodCard good={good} key={good.photoUrl} />
      ))}
    </div>
  );
};
