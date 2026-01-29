import React from 'react';
import Card from './Card';
import './MetricCard.css';

const MetricCard = ({ value, label }) => {
    return (
        <Card className="metric-card">
            <div className="metric-card__value">{value}</div>
            <div className="metric-card__label">{label}</div>
        </Card>
    );
};

export default MetricCard;
