import React from 'react';
import './BrothCard.css'

const Card = ({ name, description, spicy, canBeGlutenFree, canBeVegetarian }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-spicy"><p className='bold'>Spicy: </p>{spicy? '🌶️Spicy. Ask your server.' : 'Not Spicy'}</p>
        <p className="card-gluten"><p className='bold'>Gluten: </p>{canBeGlutenFree? 'This broth can be modified to gluten-free if requested.' : 'Not gluten-free'}</p>
        <p className="card-vegetarian"><p className='bold'>Vegetarian: </p>{canBeVegetarian? 'This broth can be made vegetarian if requested' : 'Not Vegetarian'}</p>
      </div>
    </div>
  );
};

export default Card;