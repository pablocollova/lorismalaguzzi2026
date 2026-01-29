import React from 'react';
import Card from './Card';
import './VideoEmbed.css';

const VideoEmbed = ({ videoId, title = "Video" }) => {
    return (
        <Card className="video-card">
            <div className="video-embed">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${videoId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </Card>
    );
};

export default VideoEmbed;
