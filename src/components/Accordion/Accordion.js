import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items, allowMultiple = false }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const onItemClick = (index) => {
    if (allowMultiple) {
      setActiveIndices((prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index)
          : [...prevIndices, index]
      );
    } else {
      setActiveIndices((prevIndices) => (prevIndices[0] === index ? [] : [index]));
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndices.includes(index) ? 'active' : ''}`}
            onClick={() => onItemClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onItemClick(index);
              }
            }}
            aria-expanded={activeIndices.includes(index)}
            aria-controls={`accordion-content-${index}`}
          >
            {item.title}
            {/* Add an icon here if desired */}
          </div>
          <div
            id={`accordion-content-${index}`}
            className={`accordion-content ${activeIndices.includes(index) ? 'open' : ''}`}
            aria-hidden={!activeIndices.includes(index)}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
