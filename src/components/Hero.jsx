import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">

                {/* Social Proof */}
                <div className="social-proof">
                    <div className="avatars">
                        {/* Using placeholder colors/gradients for avatars */}
                        <div className="avatar" style={{ backgroundImage: 'linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)' }}></div>
                        <div className="avatar" style={{ backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}></div>
                        <div className="avatar" style={{ backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)' }}></div>
                        <div className="avatar" style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}></div>
                        <div className="avatar" style={{ backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' }}></div>
                    </div>
                    <div className="stars">
                        ★★★★★
                    </div>
                    <span className="creators-count">20 000+ creators</span>
                </div>

                {/* Headlines */}
                <h1 className="headline">
                    Done-for-You Infoproducts
                    <span className="highlight-red">to Grow Your Business</span>
                </h1>

                <p className="subhead">
                    You can instantly have your own ebooks, courses, and more to sell or plug into your offers. Without high investments or months of creation.
                </p>

                {/* Features */}
                <div className="features">
                    <div className="feature-item">
                        <span className="check-icon">✓</span>
                        Pre-Made Products
                    </div>
                    <div className="feature-item">
                        <span className="check-icon">✓</span>
                        Fully Custom Creation
                    </div>
                </div>

                {/* Search */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Find your next winning products"
                    />
                    <button className="search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>

                <div className="browse-text">Browse 1000+ resources</div>

                {/* Product Showcase - Diverging */}
                <div className="product-showcase-wrapper">
                    {/* Top Row - Moves Left */}
                    <div className="product-showcase">
                        {[
                            { gradient: 'card-gradient-1', image: 'https://framerusercontent.com/images/vXwg8VpYf1pMLVQmE8NbjEYipmk.jpeg?width=612&height=877' },
                            { gradient: 'card-gradient-2', image: 'https://framerusercontent.com/images/22W09KHdo1QeaEyMvMsqgFciKU.jpeg?width=612&height=875' },
                            { gradient: 'card-gradient-3', image: 'https://framerusercontent.com/images/ViYKAbSyrY13JlLpQJ1u594xlI.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-4', image: 'https://framerusercontent.com/images/t1aCHCw36kL8TtQSWKCWXE8V8.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-5', image: 'https://framerusercontent.com/images/Fx20IPHRUB04aBQIkkN8fq6h0Oc.jpeg?width=612&height=877' },
                            // Duplicates
                            { gradient: 'card-gradient-1', image: 'https://framerusercontent.com/images/vXwg8VpYf1pMLVQmE8NbjEYipmk.jpeg?width=612&height=877' },
                            { gradient: 'card-gradient-2', image: 'https://framerusercontent.com/images/22W09KHdo1QeaEyMvMsqgFciKU.jpeg?width=612&height=875' },
                            { gradient: 'card-gradient-3', image: 'https://framerusercontent.com/images/ViYKAbSyrY13JlLpQJ1u594xlI.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-4', image: 'https://framerusercontent.com/images/t1aCHCw36kL8TtQSWKCWXE8V8.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-5', image: 'https://framerusercontent.com/images/Fx20IPHRUB04aBQIkkN8fq6h0Oc.jpeg?width=612&height=877' },
                        ].map((item, index) => (
                            <div key={`row1-${index}`} className={`product-card ${!item.image ? item.gradient : ''}`}>
                                {item.image && (
                                    <div className="card-bg-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                )}
                                <div className="card-overlay"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - Moves Right (Diverging) */}
                    <div className="product-showcase reverse">
                        {[
                            { gradient: 'card-gradient-1', image: 'https://framerusercontent.com/images/fFcfRq5ReDnP6JcPd5pRECcNWQ.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-2', image: 'https://framerusercontent.com/images/OgqwX98DwyKg9hkQiMR1WMWxy0.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-3', image: 'https://framerusercontent.com/images/pX3BLff8NWhSllGRgrIiIM2exE.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-4', image: 'https://framerusercontent.com/images/UZgvJOl7LloDdmg0PVsVpdwby8.jpeg?width=612&height=877' },
                            { gradient: 'card-gradient-5', image: 'https://framerusercontent.com/images/iPBxmmH3n1p1akKkP9PRogQWjA.jpeg?width=600&height=877' },
                            // Duplicates
                            { gradient: 'card-gradient-1', image: 'https://framerusercontent.com/images/fFcfRq5ReDnP6JcPd5pRECcNWQ.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-2', image: 'https://framerusercontent.com/images/OgqwX98DwyKg9hkQiMR1WMWxy0.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-3', image: 'https://framerusercontent.com/images/pX3BLff8NWhSllGRgrIiIM2exE.jpeg?width=600&height=877' },
                            { gradient: 'card-gradient-4', image: 'https://framerusercontent.com/images/UZgvJOl7LloDdmg0PVsVpdwby8.jpeg?width=612&height=877' },
                            { gradient: 'card-gradient-5', image: 'https://framerusercontent.com/images/iPBxmmH3n1p1akKkP9PRogQWjA.jpeg?width=600&height=877' },
                        ].map((item, index) => (
                            <div key={`row2-${index}`} className={`product-card ${!item.image ? item.gradient : ''}`}>
                                {item.image && (
                                    <div className="card-bg-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                )}
                                <div className="card-overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Floating Chat Bubble */}
            <div className="chat-bubble">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
