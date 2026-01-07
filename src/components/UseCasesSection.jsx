import React from 'react';
import './UseCasesSection.css';

const UseCasesSection = () => {
    return (
        <section className="use-cases-section">
            <div className="badge-pill-dark">
                You have complete freedom
            </div>

            <h2 className="section-headline">
                Unlimited options to<br />
                <span className="text-red">use the resources</span>
            </h2>

            <div className="use-cases-cards-wrapper">
                <div className="use-cases-track">
                    {/* First Set of Cards */}
                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#ccc' }}>
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <h3>Create your<br />audience</h3>
                        <p className="card-subtitle">Grow your email list and followers.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#333' }}>
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                            </svg>
                        </div>
                        <h3>Boost your<br />community</h3>
                        <p className="card-subtitle">Engage your members with value.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <div style={{ fontWeight: 'bold', fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
                                a
                                <svg viewBox="0 0 50 20" width="40" height="15" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M5 5 Q 25 20 45 5" stroke="#333" fill="none" strokeLinecap="round" />
                                    <path d="M40 8 L45 5 L42 12" fill="#333" stroke="none" />
                                </svg>
                            </div>
                        </div>
                        <h3>Sell as author<br />on Amazon</h3>
                        <p className="card-subtitle">Publish ebooks and kindle guides.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#333' }}>
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2v-3h2v3zm4 0h-2v-5h2v5z" />
                            </svg>
                        </div>
                        <h3>Add to your<br />coaching</h3>
                        <p className="card-subtitle">Provide resources to your clients.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#ccc' }}>
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </div>
                        <h3>Build your<br />authority</h3>
                        <p className="card-subtitle">Establish yourself as an expert.</p>
                    </div>

                    {/* Duplicate Set for Marquee */}
                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#ccc' }}>
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <h3>Create your<br />audience</h3>
                        <p className="card-subtitle">Grow your email list and followers.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#333' }}>
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                            </svg>
                        </div>
                        <h3>Boost your<br />community</h3>
                        <p className="card-subtitle">Engage your members with value.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <div style={{ fontWeight: 'bold', fontSize: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
                                a
                                <svg viewBox="0 0 50 20" width="40" height="15" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M5 5 Q 25 20 45 5" stroke="#333" fill="none" strokeLinecap="round" />
                                    <path d="M40 8 L45 5 L42 12" fill="#333" stroke="none" />
                                </svg>
                            </div>
                        </div>
                        <h3>Sell as author<br />on Amazon</h3>
                        <p className="card-subtitle">Publish ebooks and kindle guides.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#333' }}>
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2v-3h2v3zm4 0h-2v-5h2v5z" />
                            </svg>
                        </div>
                        <h3>Add to your<br />coaching</h3>
                        <p className="card-subtitle">Provide resources to your clients.</p>
                    </div>

                    <div className="use-case-card">
                        <div className="icon-container">
                            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" style={{ color: '#ccc' }}>
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </div>
                        <h3>Build your<br />authority</h3>
                        <p className="card-subtitle">Establish yourself as an expert.</p>
                    </div>

                </div>
            </div>

            <button className="explore-btn">
                <span className="arrow-circle">→</span> Explore Master Library
            </button>
        </section>
    );
};

export default UseCasesSection;
