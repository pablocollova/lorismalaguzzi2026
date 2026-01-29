import React from 'react';
import './Card.css';

const Card = ({ children, className = '', highlight = false }) => {
    return (
        <div className={`card ${highlight ? 'card--highlight' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
