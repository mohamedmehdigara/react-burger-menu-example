import React from 'react';
import './ContentCards.css';

function ContentCards({ items }) {
  return (
    <div className="content-cards">
      {items.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.name} className="card-image" />
          <div className="card-content">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="card-price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentCards;
