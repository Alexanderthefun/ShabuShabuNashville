// ExpandableMenu.js
import React, { useState, useEffect, useRef } from 'react';
import './ExpandableBroth.css';
import Card from '../broths/BrothCard';

export const ExpandableMenu = ({ category, broths, isExpanded, onClick }) => {
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
        {drinks.map((broth) => (
          <Card key={broth.id} 
                name={broth.name} 
                description={broth.description}
                spicy={broth.spicy}
                canBeGlutenFree={broth.canBeGlutenFree}
                canBeVegetarian={broth.canBeVegetarian}  />
        ))}
      </div>
    </div>
  );
};

