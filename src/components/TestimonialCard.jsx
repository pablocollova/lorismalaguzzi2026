import React from 'react';
import Card from './Card';
import './TestimonialCard.css';

const TestimonialCard = ({ avatar, name, date, text }) => {
    return (
        <Card className="testimonial-card">
            <div className="testimonial-header">
                <img src={avatar} alt={name} className="testimonial-avatar" />
                <div className="testimonial-info">
                    <h4 className="testimonial-name">{name}</h4>
                    <span className="testimonial-date">{date}</span>
                </div>
            </div>
            <p className="testimonial-text">"{text}"</p>
        </Card>
    );
};

export default TestimonialCard;
