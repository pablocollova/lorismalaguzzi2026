import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import './FinalCTA.css';

import ctaImg from '../assets/images/cta/cta_community.png';

const FinalCTA = () => {
    const { t } = useTranslation();

    return (
        <section className="section final-cta" id="cta">
            <div className="container final-cta__container">
                <div className="final-cta__image-col">
                    <img src={ctaImg} alt="Community" className="cta-image" />
                </div>
                <div className="final-cta__content-col">
                    <h2 className="cta-headline">{t('cta.headline')}</h2>
                    <h3 className="cta-subheadline">{t('cta.subheadline')}</h3>
                    <p className="cta-description">{t('cta.description')}</p>
                    <Button variant="primary">{t('cta.btn_form')}</Button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
