import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            {/* Rating Badge */}
            <div className="rating-badge">
                <div className="red-star-circle">
                    <svg viewBox="0 0 24 24" fill="white" width="12" height="12">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <span>Rated 4.8/5 overall by our users</span>
            </div>

            {/* Headline */}
            <h2 className="testimonials-headline">"Must have content"</h2>

            {/* Social Proof Container */}
            <div className="social-proof-container">
                {/* Trustpilot */}
                <div className="social-proof-item">
                    <div className="platform-icon trustpilot-star">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <h3>Trustpilot 4.8/5</h3>
                    <div className="stars">★★★★★</div>
                </div>

                {/* Facebook */}
                <div className="social-proof-item">
                    <div className="platform-icon facebook-logo">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3v-2.26c0-2.81 1.6-4.35 4.03-4.35 1.16 0 2.45.21 2.45.21v2.58h-1.34c-1.42 0-1.87.89-1.87 1.8V12h3.29l-.53 3h-2.76v6.8c4.56-.93 8-4.96 8-9.8z" />
                        </svg>
                    </div>
                    <h3>Facebook 5.0/5</h3>
                    <div className="stars">★★★★★</div>
                </div>

                {/* Google */}
                <div className="social-proof-item">
                    <div className="platform-icon google-logo">
                        <svg viewBox="0 0 24 24" width="40" height="40">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                    </div>
                    <h3>Google 4.5/5</h3>
                    <div className="stars">
                        <span style={{ color: '#FFC107' }}>★★★★</span>
                        <span style={{ color: '#ffffff33', position: 'relative' }}>
                            <span style={{ color: '#FFC107', position: 'absolute', left: 0, overflow: 'hidden', width: '50%' }}>★</span>★
                        </span>
                    </div>
                </div>
            </div>

            {/* Testimonial Cards Wrapper */}
            <div className="testimonial-cards-wrapper">
                <div className="testimonial-cards-track">
                    {/* Card 1 - Michael K. */}
                    <div className="testimonial-card">
                        <div className="quote-icon-circle">
                            <span className="quote-mark">❞</span>
                        </div>
                        <h3>An absolute game-changer for my own business community.</h3>
                        <p className="testimonial-text">This gave me the opportunity to quickly create digital products and lead magnets for my community.</p>
                        <div className="testimonial-user">
                            <div className="user-avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)' }}></div>
                            <div className="user-info">
                                <span className="user-name">Michael K.</span>
                                <span className="user-country">UNITED STATES</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Jacob L. */}
                    <div className="testimonial-card">
                        <div className="quote-icon-circle">
                            <span className="quote-mark">❞</span>
                        </div>
                        <h3>The resources have been a fantastic addition to our online academy</h3>
                        <p className="testimonial-text">Their high-quality content has enriched our educational offerings, making it easier for our students to learn.</p>
                        <div className="testimonial-user">
                            <div className="user-avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/44.jpg)' }}></div>
                            <div className="user-info">
                                <span className="user-name">Jacob L.</span>
                                <span className="user-country">UNITED STATES</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Sarah M. */}
                    <div className="testimonial-card">
                        <div className="quote-icon-circle">
                            <span className="quote-mark">❞</span>
                        </div>
                        <h3>Incredible value for the price. Highly recommended!</h3>
                        <p className="testimonial-text">I was blown away by the quality and variety of the assets available in the master library.</p>
                        <div className="testimonial-user">
                            <div className="user-avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/65.jpg)' }}></div>
                            <div className="user-info">
                                <span className="user-name">Sarah M.</span>
                                <span className="user-country">UNITED KINGDOM</span>
                            </div>
                        </div>
                    </div>

                    {/* Duplicate Set for Marquee */}
                    <div className="testimonial-card">
                        <div className="quote-icon-circle">
                            <span className="quote-mark">❞</span>
                        </div>
                        <h3>An absolute game-changer for my own business community.</h3>
                        <p className="testimonial-text">This gave me the opportunity to quickly create digital products and lead magnets for my community.</p>
                        <div className="testimonial-user">
                            <div className="user-avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)' }}></div>
                            <div className="user-info">
                                <span className="user-name">Michael K.</span>
                                <span className="user-country">UNITED STATES</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon-circle">
                            <span className="quote-mark">❞</span>
                        </div>
                        <h3>The resources have been a fantastic addition to our online academy</h3>
                        <p className="testimonial-text">Their high-quality content has enriched our educational offerings, making it easier for our students to learn.</p>
                        <div className="testimonial-user">
                            <div className="user-avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/men/44.jpg)' }}></div>
                            <div className="user-info">
                                <span className="user-name">Jacob L.</span>
                                <span className="user-country">UNITED STATES</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon-circle">
                            <span className="quote-mark">❞</span>
                        </div>
                        <h3>Incredible value for the price. Highly recommended!</h3>
                        <p className="testimonial-text">I was blown away by the quality and variety of the assets available in the master library.</p>
                        <div className="testimonial-user">
                            <div className="user-avatar" style={{ backgroundImage: 'url(https://randomuser.me/api/portraits/women/65.jpg)' }}></div>
                            <div className="user-info">
                                <span className="user-name">Sarah M.</span>
                                <span className="user-country">UNITED KINGDOM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bottom-cta-container">
                <button className="pill-cta-btn">
                    Haven't found <span style={{ fontWeight: '400' }}>the right fit?</span>
                </button>
            </div>
        </section>
    );
};

export default TestimonialsSection;
