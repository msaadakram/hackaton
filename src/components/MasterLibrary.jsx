import React from 'react';


import './MasterLibrary.css';

const MasterLibrary = () => {
    return (
        <section className="master-library">
            <div className="badge-pill">
                Discover Master Library
            </div>

            <h2 className="master-headline">
                Sell or use market-ready<br />
                <span className="text-red">products under your name</span>
            </h2>

            <p className="master-subhead">
                Skip the research, writing, designing, or costly outsourcing.<br />
                Start using done-for-you content to grow your sales, audience, and authority in no time.
            </p>

            {/* Watch Video Button */}
            <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <button className="watch-video-btn">
                    <span className="play-icon">▶</span> Watch Explainer Video
                </button>
            </div>

            {/* Video Showcase */}
            <div className="dashboard-video-container">
                <video
                    src="https://entrepedia-products.com/website/scrolling.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="dashboard-video"
                />
            </div>
        </section>
    );
};

export default MasterLibrary;
