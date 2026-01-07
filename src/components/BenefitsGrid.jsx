import React from 'react';
import './BenefitsGrid.css';

const BenefitsGrid = () => {
    return (
        <section className="benefits-grid-section">
            <div className="benefits-grid">
                {/* Top Row */}
                <div className="benefit-card dark-card span-1">
                    <div className="card-content">
                        <h3>Ready For Print</h3>
                        <p>Your book is formatted and polished to be print-ready, designed to look and feel like a true best-seller.</p>
                    </div>
                    <div className="card-image">
                        <img
                            src="/src/assets/images/fnUkXpORz8Sl5oEsZREogacJqw.webp"
                            alt="Globe"
                            className="globe-icon"
                        />
                    </div>
                </div>

                <div className="benefit-card light-card span-1">
                    <div className="card-image centered">
                        <img
                            src="/src/assets/images/F4JicOGcwtLwDBJkZOaLPvKXg.jpg"
                            alt="Document Preview"
                            className="document-image"
                        />
                    </div>
                </div>

                <div className="benefit-card dark-card span-1">
                    <div className="card-content">
                        <h3>Produced by experts</h3>
                        <p>Each part of the resource is created by our experienced team for maximum quality and brand alignment.</p>
                    </div>
                    <div className="card-image">
                        <img
                            src="/src/assets/images/t8TfhAfjoz6p8XjUGSNMYT8Pb7M.png"
                            alt="Brain"
                            className="brain-icon"
                        />
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="benefit-card light-card span-1">
                    <div className="card-image centered">
                        <img
                            src="/src/assets/images/09aOXr3r5bDOipwJYIl7UflYaOY.jpg"
                            alt="Book Stack"
                            className="books-stack-image"
                        />
                    </div>
                </div>

                <div className="benefit-card red-card span-1">
                    <h3>EPUB & Kindle</h3>
                    <p>Publish across major digital platforms with professional formatting optimized for every device.</p>
                </div>

                <div className="benefit-card dark-card span-2-rows">
                    <h3>Full Ownership License</h3>
                    <p>You keep 100% rights and profits. Your book is fully yours to distribute and monetize without restrictions.</p>
                </div>

                <div className="benefit-card red-card span-1 satisfaction">
                    <h3>Satisfaction Guarantee</h3>
                </div>
            </div>
        </section>
    );
};

export default BenefitsGrid;
