import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import Button from '../components/Button';
import './News.css';

import artImg from '../assets/images/news/art_workshop.png';

const News = () => {
    const { t } = useTranslation();

    return (
        <section className="section news" id="news">
            <div className="container news__container">
                <div className="news__header">
                    <span className="news__label">{t('news.label')}</span>
                    <h2 className="news__headline">{t('news.headline')}</h2>
                </div>

                <div className="news__grid">
                    {/* Card 1: Art */}
                    <Card className="news-card">
                        <div className="news-card__image-wrapper">
                            <img src={artImg} alt="Art Workshop" className="news-card__image" />
                        </div>
                        <div className="news-card__content">
                            <h3>{t('news.art_workshop')}</h3>
                            <span className="read-more">→</span>
                        </div>
                    </Card>

                    {/* Card 2: Feedback - No specific image generated, using gradient or pattern? or just text. 
             "Cards" implies multiple. I'll use a placeholder colored div or similar if no image.
             Prompt didn't strictly require image for this one, but visual quality matters.
             I'll style it as a text cards.
          */}
                    <Card className="news-card">
                        <div className="news-card__content news-card__content--full">
                            <h3>{t('news.feedback')}</h3>
                            <p className="news-excerpt">La importancia de la comunicación constructiva en el entorno educativo.</p>
                            <span className="read-more">→</span>
                        </div>
                    </Card>

                    {/* Card 3: Admissions (Highlight) */}
                    <Card className="news-card news-card--highlight" highlight={true}>
                        <div className="news-card__content">
                            <h3>{t('news.admissions.title')}</h3>
                            <div className="admissions-details">
                                <p><strong>{t('news.admissions.initial')}</strong></p>
                                <p>{t('news.admissions.rest')}</p>
                            </div>
                            <Button variant="secondary" className="btn-small">{t('news.btn_info')}</Button>
                        </div>
                    </Card>
                </div>

                <div className="news__footer">
                    <Button variant="primary">{t('news.btn_info')}</Button>
                </div>
            </div>
        </section>
    );
};

export default News;
