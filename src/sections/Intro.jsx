import React from 'react';
import { useTranslation } from 'react-i18next';
import './Intro.css';

const Intro = () => {
    const { t } = useTranslation();

    return (
        <section className="section intro" id="institutional">
            <div className="container intro__container">
                <span className="intro__label">Bienvenidos a nuestro website</span>
                <h2 className="intro__title">Educación completa en un solo lugar</h2>
                <p className="intro__text">
                    Somos una institución comprometida con el desarrollo integral de nuestros alumnos, inspirada en la pedagogía de Reggio Emilia, fomentando la creatividad, el pensamiento crítico y los valores humanos desde la primera infancia hasta la adolescencia.
                </p>
            </div>
        </section>
    );
};

export default Intro;
