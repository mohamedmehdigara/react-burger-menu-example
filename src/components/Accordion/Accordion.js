import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${index === activeIndex ? 'active' : ''}`}
            onClick={() => onItemClick(index)}
          >
            {item.title}
          </div>
          <div className={`accordion-content ${index === activeIndex ? 'open' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
