// ExpandableMenu.js
import React, { useState, useEffect, useRef } from 'react';
import './ExpandableMenu.css';
import Card from '../drinks/DrinkCard';

export const ExpandableMenu = ({ category, drinks, isExpanded, onClick }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (isExpanded && menuRef.current) {
      menuRef.current.scrollTop = 0;
    }
  }, [isExpanded]);

  return (
    <div className='container'>
      <button className='categoryButton' onClick={onClick}>{category}</button>
      <div className={`expandable-menu ${isExpanded ? 'expanded' : ''}`}>
        {drinks.map((drink) => (
          <Card key={drink.id} name={drink.name} price={drink.price} />
        ))}
      </div>
    </div>
  );
};

// export default ExpandableMenu;