import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import './Reggio.css';

import reggioBg from '../assets/images/features/reggio_bg.png'; // Assuming placed in features or dedicated folder? Prompt said assets/images/features used for generated image dest before. I'll put it in features or hero. Let's put in 'features' or maybe 'images'. I will copy to features/reggio_bg.png.

const Reggio = () => {
    const { t } = useTranslation();

    return (
        <section className="section reggio" id="pedagogy" style={{ backgroundImage: `url(${reggioBg})` }}>
            <div className="reggio__overlay"></div>
            <div className="container reggio__container">
                <span className="reggio__label">{t('reggio.label')}</span>
                <h2 className="reggio__title">
                    <span className="text-accent">{t('reggio.title')}</span>
                </h2>
                <p className="reggio__description">{t('reggio.description')}</p>
                <Button variant="primary">{t('reggio.btn_more')}</Button>
            </div>
        </section>
    );
};

export default Reggio;
