import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../components/Button';
import './Hero.css';

// Import the generated image (assuming it ends up in assets or we reference it by path)
// For now, we'll assume it's placed in /src/assets/images/hero/hero_bg.png or similar after generation
// But the tool saves it as artifact. I need to move it or import it from artifacts in the user's mind, 
// but code needs a real path. I'll stick to a relative path and expect the image to be there.
import heroBg from '../assets/images/hero/hero_bg.png';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero__overlay"></div>
            <div className="container hero__container">
                <div className="hero__content">
                    <span className="hero__pretitle">{t('hero.pretitle')}</span>
                    <h1 className="hero__title">
                        <Trans i18nKey="hero.title" components={{ highlight: <span className="text-accent" /> }} />
                    </h1>
                    <p className="hero__description">{t('hero.description')}</p>
                    <div className="hero__actions">
                        <Button variant="primary">{t('hero.btn_primary')}</Button>
                        <Button variant="secondary">{t('hero.btn_secondary')}</Button>
                    </div>
                </div>
            </div>
            <div className="hero__scroll-indicator">
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
