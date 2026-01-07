import React from 'react';
import './TrustedSection.css';

const TrustedSection = () => {
    return (
        <section className="trusted-section">
            <div className="trusted-label">TRUSTED BY TOP BRANDS AND INDIVIDUALS WORLDWIDE</div>
            <div className="trusted-logos-wrapper">
                <div className="trusted-logos">
                    {/* Original Set */}
                    {/* Using text representations or placeholders that mimic the image logos */}
                    <div className="trusted-logo logo-pro">
                        <span style={{ fontWeight: 900, fontSize: '1.4rem', color: '#ccc' }}>na</span><span style={{ fontSize: '0.6rem', verticalAlign: 'super' }}>Pro</span>
                    </div>
                    <div className="trusted-logo logo-dype">
                        <div style={{ border: '2px solid #ccc', borderRadius: '4px', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>D</div>
                        <span>DYPE</span>
                    </div>
                    <div className="trusted-logo logo-safety">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>S</span>
                            <span style={{ fontSize: '0.5rem', letterSpacing: '1px' }}>SAFETYLINK</span>
                        </div>
                    </div>
                    <div className="trusted-logo logo-uplevel">
                        <span style={{ fontWeight: 800 }}>UPLEV<span style={{ borderBottom: '2px solid red' }}>E</span>L</span>
                        <br />
                        <span style={{ fontSize: '0.6rem', letterSpacing: '3px' }}>MARKETER</span>
                    </div>
                    <div className="trusted-logo logo-hevi">
                        <span style={{ fontWeight: 900, fontSize: '1.5rem' }}>hevi</span>
                    </div>
                    <div className="trusted-logo logo-acu">
                        <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>ACU-ELLIGE</span>
                    </div>

                    {/* Duplicated Set */}
                    <div className="trusted-logo logo-pro">
                        <span style={{ fontWeight: 900, fontSize: '1.4rem', color: '#ccc' }}>na</span><span style={{ fontSize: '0.6rem', verticalAlign: 'super' }}>Pro</span>
                    </div>
                    <div className="trusted-logo logo-dype">
                        <div style={{ border: '2px solid #ccc', borderRadius: '4px', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>D</div>
                        <span>DYPE</span>
                    </div>
                    <div className="trusted-logo logo-safety">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>S</span>
                            <span style={{ fontSize: '0.5rem', letterSpacing: '1px' }}>SAFETYLINK</span>
                        </div>
                    </div>
                    <div className="trusted-logo logo-uplevel">
                        <span style={{ fontWeight: 800 }}>UPLEV<span style={{ borderBottom: '2px solid red' }}>E</span>L</span>
                        <br />
                        <span style={{ fontSize: '0.6rem', letterSpacing: '3px' }}>MARKETER</span>
                    </div>
                    <div className="trusted-logo logo-hevi">
                        <span style={{ fontWeight: 900, fontSize: '1.5rem' }}>hevi</span>
                    </div>
                    <div className="trusted-logo logo-acu">
                        <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>ACU-ELLIGE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedSection;
