import React from 'react';
import './FeaturesGrid.css';

const FeaturesGrid = () => {
    return (
        <section className="features-grid-section">
            <div className="features-grid">

                {/* Column 1 */}
                <div className="features-col">
                    <div className="feature-card small-card">
                        <h3>Demanded Content</h3>
                        <p>Best-selling topics that people really buy. Based on market research.</p>
                    </div>
                    <div className="feature-card small-card">
                        <h3>Constantly Updated</h3>
                        <p>We add 20 new products every week to meet the latest trends.</p>
                    </div>
                </div>

                {/* Column 2 - Tall Red */}
                <div className="features-col">
                    <div className="feature-card tall-card red-card">
                        <h3>Private<br />Label<br />Rights</h3>
                        <p>Fully rebrand, edit, and use as you want. Without any restrictions.</p>
                        <img
                            src="https://framerusercontent.com/images/5w0nynRBeqfiTZyL2l0uNcLs.png?width=563&height=563"
                            alt=""
                            className="card-decoration ribbon-wave"
                        />

                    </div>
                </div>

                {/* Column 3 - Tall Black */}
                <div className="features-col">
                    <div className="feature-card tall-card black-card">
                        <h3>1000+</h3>
                        <div className="book-decoration">
                            {/* Simple book representation using CSS or SVG */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="book-icon">
                                <path d="M12 3v18.5c0 .28-.22.5-.5.5-.28 0-.5-.22-.5-.5V3c0-.28.22-.5.5-.5.28 0 .5.22.5.5zm8.5-.5H13v19h7c.28 0 .5-.22.5-.5v-18c0-.28-.22-.5-.5-.5zM3.5 2.5h7.5v19H4c-.28 0-.5-.22-.5-.5v-18c0-.28.22-.5.5-.5z" />
                            </svg>
                        </div>
                        <h3>Digital Products</h3>
                        <p>Almost unlimited selection of content in one of the biggest libraries out there.</p>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="features-col">
                    <div className="feature-card small-card">
                        <h3>15 Media Formats</h3>
                        <p>Ebooks, Courses, Audios, Templates, Prompts, Notion Systems + more.</p>
                    </div>
                    <div className="feature-card small-card">
                        <h3>Created by Experts</h3>
                        <p>Each product is made in-house by our team. World-class standards.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesGrid;
