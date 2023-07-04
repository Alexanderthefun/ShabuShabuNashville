import React from 'react';
import './DrinkCard.css'

const Card = ({ name, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;