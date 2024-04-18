import React from 'react';
import './ContentCards.css';

function ContentCards({ items }) {
    return (
        <div className="content-cards">
            {/* Iterate over the items to display each card */}
            {items.map((item, index) => (
                <div key={index} className="card">
                    {/* Use an SVG element instead of an <img> tag */}
                    <svg
                        className="card-image"
                        width="100%"
                        height="auto"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Set the path to the SVG file as the href attribute */}
                    </svg>

                    {/* Card content: name, description, and price */}
                    <div className="card-content">
                        <h3 className="card-title">{item.name}</h3>
                        <p className="card-description">{item.description}</p>
                        <p className="card-price">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContentCards;
