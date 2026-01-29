import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__container">
                <div className="header__logo">
                    <span className="logo-text">LORIS MALAGUZZI</span>
                </div>

                <nav className="header__nav">
                    <a href="#institutional" className="nav-link">{t('header.nav.institutional')}</a>
                    <a href="#initial" className="nav-link">{t('header.nav.initial')}</a>
                    <a href="#primary" className="nav-link">{t('header.nav.primary')}</a>
                    <a href="#secondary" className="nav-link">{t('header.nav.secondary')}</a>
                    <a href="#projects" className="nav-link">{t('header.nav.projects')}</a>
                    <a href="#pedagogy" className="nav-link">{t('header.nav.pedagogy')}</a>
                    <a href="#contact" className="nav-link nav-link--highlight">{t('header.nav.contact')}</a>
                </nav>

                <div className="header__actions">
                    <div className="language-switch">
                        <button onClick={() => changeLanguage('es')} className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}>ES</button>
                        <span className="separator">|</span>
                        <button onClick={() => changeLanguage('it')} className={`lang-btn ${i18n.language === 'it' ? 'active' : ''}`}>IT</button>
                    </div>
                    <div className="social-icons">
                        {/* Simple SVG Placeholders */}
                        <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
