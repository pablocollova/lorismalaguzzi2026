import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import MetricCard from '../components/MetricCard';
import VideoEmbed from '../components/VideoEmbed';
import './FeatureGrid.css';

import classroomImg from '../assets/images/features/classroom_feature.png';

const FeatureGrid = () => {
    const { t } = useTranslation();

    return (
        <section className="section feature-grid">
            <div className="container feature-grid__container">

                {/* Item 1: Classroom Image */}
                <Card className="grid-item item-image">
                    <img src={classroomImg} alt="Classroom" className="feature-image" />
                </Card>

                {/* Item 2: Red Card - Program */}
                <Card className="grid-item item-program" highlight={true}>
                    <h3>{t('features.program')}</h3>
                    <div className="decoration-line"></div>
                </Card>

                {/* Item 3: Video */}
                <div className="grid-item item-video">
                    <VideoEmbed videoId="dQw4w9WgXcQ" title="Institutional Video" />
                    {/* Placeholder ID, would replace with real institutional video if provided, using a standard safe ID for now */}
                </div>

                {/* Item 4: Metric - Satisfaction */}
                <MetricCard
                    value="9.8"
                    label={t('features.satisfaction')}
                />

                {/* Item 5: Metric - Students */}
                <MetricCard
                    value="718"
                    label={t('features.students')}
                />

                {/* Item 6: Red Card - Interaction */}
                <Card className="grid-item item-interaction" highlight={true}>
                    <h3>{t('features.interaction')}</h3>
                    <div className="decoration-line"></div>
                </Card>

            </div>
        </section>
    );
};

export default FeatureGrid;
