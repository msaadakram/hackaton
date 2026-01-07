import React from 'react';
import './DiscoverSection.css';

const DiscoverSection = () => {
    return (
        <section className="discover-section">
            {/* Badge */}
            <div className="discover-badge">
                Unlimited Business Library
            </div>

            {/* Headline */}
            <h2 className="discover-headline">
                <span className="text-white">Discover done-for-you</span><br />
                <span className="text-white">digital products you can</span><br />
                <span className="text-red">sell or use in any way</span>
            </h2>

            {/* Subtitle */}
            <p className="discover-subtitle">
                Imagine you have more than 1000 courses,<br />
                books, templates, audios, and more. Your<br />
                own digital library without limits.
            </p>

            {/* CTA Button */}
            <button className="discover-cta">
                <span className="arrow-icon">→</span>
                Learn about Master Library
            </button>

            {/* Social Proof */}
            <div className="discover-social-proof">
                <div className="creator-avatars">
                    <img src="/src/assets/images/1EL3JrCHX1KpKsslf8i8syhI.jpeg" alt="Creator" className="creator-avatar" />
                    <img src="/src/assets/images/3wX5S7ucpAoi8Bpn5UjazFUzF54.jpeg" alt="Creator" className="creator-avatar" />
                    <img src="/src/assets/images/2HJ9S4s94MbNfS5G72iWdbIebo.jpeg" alt="Creator" className="creator-avatar" />
                    <img src="/src/assets/images/547Vblcrhjnad86yKZsIU8TkTs.jpeg" alt="Creator" className="creator-avatar" />
                    <img src="/src/assets/images/NeUwISmjPW4tIdBonFY3ltlgdM.jpeg" alt="Creator" className="creator-avatar" />
                </div>
                <div className="creator-info">
                    <div className="stars">★★★★★</div>
                    <span className="creator-count">20 000+ creators</span>
                </div>
            </div>

            {/* Product Categories Image */}
            <div className="categories-showcase">
                <img
                    src="/src/assets/images/WHHBxNCjnjvNUWalCq4CwE7qhI.png"
                    alt="Product Categories"
                    className="categories-image"
                />
            </div>
        </section>
    );
};

export default DiscoverSection;
