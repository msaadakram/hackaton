import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
    return (
        <section className="stats-section">
            {/* Stats Container */}
            <div className="stats-container">
                <div className="laurel left-laurel">🏆</div>

                <div className="stat-item">
                    <h2 className="stat-number">300+</h2>
                    <p className="stat-label">Books and Other<br />Assets Produced</p>
                </div>

                <div className="stat-item">
                    <h2 className="stat-number">90+</h2>
                    <p className="stat-label">Founders, Creators,<br />and Brands Served</p>
                </div>

                <div className="stat-item">
                    <h2 className="stat-number">100%</h2>
                    <p className="stat-label">Client Satisfaction<br />Across All Projects</p>
                </div>

                <div className="laurel right-laurel">🏆</div>
            </div>

            {/* CTA Button */}
            <div className="cta-container">
                <button className="cta-button">
                    <span className="arrow-icon">→</span>
                    Get Custom Digital Product
                </button>
            </div>
        </section>
    );
};

export default StatsSection;
