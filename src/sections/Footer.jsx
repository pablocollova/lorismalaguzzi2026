import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer" id="contact">
            <div className="container footer__grid">
                <div className="footer__col branding">
                    <div className="footer__logo">
                        <span className="logo-text">LORIS MALAGUZZI</span>
                    </div>
                    <p className="footer__tagline">{t('hero.description')}</p>
                </div>

                <div className="footer__col contact">
                    <h4>{t('header.nav.contact')}</h4>
                    <p>Calle Falsa 123, Mar del Plata</p>
                    <p>Buenos Aires, Argentina</p>
                    <br />
                    <p>Email: info@lorismalaguzzi.edu.ar</p>
                    <p>Tel: +54 223 123 4567</p>
                    <br />
                    <p>Horario: Lun - Vie: 8:00 - 17:00</p>
                </div>

                <div className="footer__col map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.5042860822187!2d-57.55018658425!3d-38.012176465355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de80302b4a39%3A0x6b323c28b557b42d!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1642183421523!5m2!1ses-419!2sar"
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Map"
                    ></iframe>
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; 2025 Instituto Loris Malaguzzi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
