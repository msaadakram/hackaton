import React from 'react';
import './CustomProductSection.css';

const CustomProductSection = () => {
    const steps = [
        { label: 'Research &', sublabel: 'Trend Analysis', icon: '📊' },
        { label: 'Structure &', sublabel: 'Content Writing', icon: '📝' },
        { label: 'Multistep AI', sublabel: 'Optimization', icon: '🤖' },
        { label: 'Editing &', sublabel: 'Source Check', icon: '🔍' },
        { label: 'Layouting &', sublabel: 'Formatting', icon: '✂️' },
        { label: 'Designing', sublabel: 'Cover & Mockup', icon: '🎨' },
    ];

    return (
        <section className="custom-product-section">
            {/* Headline */}
            <h2 className="custom-headline">
                <span className="text-white">Get custom product tailored</span><br />
                <span className="text-red">to your brand in just 7 days</span>
            </h2>

            {/* Subtitle */}
            <p className="custom-subtitle">
                We transform your idea into signature book without you writing a single word.<br />
                Completely custom-made asset that builds authority and generates revenue.
            </p>

            {/* Workflow Steps */}
            <div className="workflow-container">
                <div className="workflow-labels">
                    {steps.map((step, index) => (
                        <div className="workflow-step" key={index}>
                            <span className="step-label">{step.label}</span>
                            <span className="step-sublabel">{step.sublabel}</span>
                        </div>
                    ))}
                </div>

                {/* Icons Row */}
                <div className="workflow-icons">
                    {/* Research */}
                    <div className="workflow-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                        </svg>
                    </div>
                    {/* Structure */}
                    <div className="workflow-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        </svg>
                    </div>
                    {/* AI */}
                    <div className="workflow-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" />
                        </svg>
                    </div>
                    {/* Editing */}
                    <div className="workflow-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                    </div>
                    {/* Layouting */}
                    <div className="workflow-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z" />
                        </svg>
                    </div>
                    {/* Designing */}
                    <div className="workflow-icon">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                        </svg>
                    </div>
                </div>

                {/* Curved Lines SVG */}
                <div className="workflow-lines">
                    <svg viewBox="0 0 600 150" preserveAspectRatio="none" className="lines-svg">
                        {/* Base gray lines */}
                        <path d="M300 150 Q 50 100 50 0" stroke="#333" strokeWidth="2" fill="none" />
                        <path d="M300 150 Q 130 80 130 0" stroke="#333" strokeWidth="2" fill="none" />
                        <path d="M300 150 Q 220 60 220 0" stroke="#333" strokeWidth="2" fill="none" />
                        <path d="M300 150 Q 380 60 380 0" stroke="#333" strokeWidth="2" fill="none" />
                        <path d="M300 150 Q 470 80 470 0" stroke="#333" strokeWidth="2" fill="none" />
                        <path d="M300 150 Q 550 100 550 0" stroke="#333" strokeWidth="2" fill="none" />

                        {/* Animated red overlay lines */}
                        <path d="M300 150 Q 50 100 50 0" className="animated-line line-1" fill="none" />
                        <path d="M300 150 Q 130 80 130 0" className="animated-line line-2" fill="none" />
                        <path d="M300 150 Q 220 60 220 0" className="animated-line line-3" fill="none" />
                        <path d="M300 150 Q 380 60 380 0" className="animated-line line-4" fill="none" />
                        <path d="M300 150 Q 470 80 470 0" className="animated-line line-5" fill="none" />
                        <path d="M300 150 Q 550 100 550 0" className="animated-line line-6" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Book Showcase Section */}
            <div className="book-showcase">
                {/* Left Features */}
                <div className="feature-column left">
                    <div className="feature-item">
                        <div className="check-circle">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                        </div>
                        <div className="feature-text">
                            <span>Tailored 100% to</span>
                            <span>your business goals</span>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="check-circle">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                        </div>
                        <div className="feature-text">
                            <span>A-Z strategy, writing,</span>
                            <span>editing, and designs</span>
                        </div>
                    </div>
                </div>

                {/* Center Book Image */}
                <div className="book-image-container">
                    <img
                        src="https://framerusercontent.com/images/VsHPzmHuTTlUkpfwj1CVWhSkA0.png?width=1500&height=1125"
                        alt="Your Book Mockup"
                        className="book-mockup"
                    />
                </div>

                {/* Right Features */}
                <div className="feature-column right">
                    <div className="feature-item">
                        <div className="check-circle">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                        </div>
                        <div className="feature-text">
                            <span>Creation handled in</span>
                            <span>house by real experts</span>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="check-circle">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                        </div>
                        <div className="feature-text">
                            <span>Finished world-class</span>
                            <span>asset in just 7 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomProductSection;
