import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

// Placeholder avatars - in a real scenario we'd generate these too.
// Using a generic placeholder URL or a local asset if we had one.
// I will use a simple specialized placeholder service or local svg if possible.
// For now, I'll use a data URI or a simple colored box if I can't generate 3 images quickly.
// Or I can use the same art_workshop image cropped in CSS? No, that's weird.
// I'll use a placeholder from a standard library or just a generic image path and expect the user to fill it?
// "Faithful reconstruction" -> I should provide something.
// I will use query parameter styled placeholders for now to keep it moving, referencing `avatar_1` etc.
// I'll assume I will generate them or use a placeholder.
// Let's use 3 different colored avatars via CSS or SVGs.
const AvatarPlaceholder = ({ color }) => (
    <svg width="50" height="50" viewBox="0 0 50 50">
        <rect width="50" height="50" fill={color} />
        <circle cx="25" cy="20" r="8" fill="white" opacity="0.5" />
        <circle cx="25" cy="45" r="15" fill="white" opacity="0.5" />
    </svg>
);
// Actually I need file paths for the Card component.
// I will create a utility to return a data URI for an SVG.
const getAvatar = (color) => `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><rect width='50' height='50' fill='%23${color}'/><circle cx='25' cy='20' r='8' fill='white' opacity='0.5'/><circle cx='25' cy='45' r='15' fill='white' opacity='0.5'/></svg>`;

const Testimonials = () => {
    const { t } = useTranslation();

    // Need to safely access list from t, usually t return object if returnObjects: true
    const testimonialsList = t('testimonials.list', { returnObjects: true });

    // Fallback if translation isn't loaded yet or structure mismatch
    const list = Array.isArray(testimonialsList) ? testimonialsList : [];

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <div className="testimonials__header">
                    <span className="testimonials__label">{t('testimonials.label')}</span>
                    <h2 className="testimonials__title">
                        {t('testimonials.headline')}
                    </h2>
                </div>

                <div className="testimonials__carousel">
                    {list.map((item, index) => (
                        <TestimonialCard
                            key={index}
                            avatar={getAvatar(index === 0 ? 'd32f2f' : index === 1 ? '1976d2' : '388e3c')} // Red, Blue, Green placeholders
                            name={item.name}
                            date={item.date}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
