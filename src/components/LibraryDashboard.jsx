import React from 'react';
import './LibraryDashboard.css';

const LibraryDashboard = () => {
    return (
        <div className="dashboard-mockup">
            {/* Sidebar */}
            <div className="dashboard-sidebar">
                <div className="sidebar-logo">
                    <div className="logo-icon">E</div>
                    <span className="logo-text">ENTREPEDIA</span>
                </div>

                <div className="sidebar-section">
                    <div className="sidebar-title">MASTER LIBRARY</div>
                    <div className="sidebar-item active">
                        <span className="icon">🏠</span> Home
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">⭐</span> Popular
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">💡</span> Product Requests
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">🔖</span> Saved
                    </div>
                </div>

                <div className="sidebar-section">
                    <div className="sidebar-title">RESOURCES</div>
                    <div className="sidebar-item">
                        <span className="icon">#</span> Special Deals <span className="tag-new">NEW</span>
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">🎓</span> Digital Product University
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">📦</span> Product Mockups
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">📖</span> Book Covers <span className="tag-new">NEW</span>
                    </div>
                </div>

                <div className="sidebar-section">
                    <div className="sidebar-title">TOOLS</div>
                    <div className="sidebar-item">
                        <span className="icon">📄</span> PDF Rebranders
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">📝</span> Product Descriptions
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">💭</span> Product Ideas
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">📚</span> Book Title Generator
                    </div>
                    <div className="sidebar-item">
                        <span className="icon">💰</span> Revenue Calculator
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="dashboard-content">
                {/* Top Filter Bar */}
                <div className="dashboard-topbar">
                    <div className="topbar-left">
                        <button className="filter-btn">Filter by tags <span className="chevron">▼</span></button>
                        <span className="item-selected">1 item selected</span>
                    </div>

                    <div className="topbar-actions">
                        <button className="pill-btn">📖 Book ×</button>
                        <button className="text-btn">Clear all</button>
                    </div>

                    <div className="topbar-search">
                        <span className="search-icon">🔍</span>
                        <input type="text" placeholder="Search products..." />
                    </div>
                </div>

                {/* Card Grid */}
                <div className="dashboard-grid">
                    {/* Card 1 */}
                    <div className="dash-card">
                        <div className="dash-card-image" style={{ background: '#111' }}>
                            {/* Placeholder for "Ultimate Survival Prepper" */}
                            <div style={{ color: 'white', textAlign: 'center', paddingTop: '40px' }}>
                                <div style={{ fontSize: '0.6rem', color: 'red' }}>THE ULTIMATE</div>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>SURVIVAL<br />PREPPER</div>
                            </div>
                        </div>
                        <div className="dash-card-details">
                            <h3 className="dash-card-title">The Ultimate Survival Prepper</h3>
                            <div className="dash-card-actions">
                                <button className="open-btn">Open</button>
                                <button className="download-btn">⬇</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="dash-card">
                        <div className="dash-card-image" style={{ background: '#8B0000' }}>
                            <div style={{ color: 'white', textAlign: 'center', paddingTop: '40px' }}>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>PROTECT YOUR<br />DIGITAL<br />LIFE</div>
                            </div>
                        </div>
                        <div className="dash-card-details">
                            <h3 className="dash-card-title">Protect Your Digital Life</h3>
                            <div className="dash-card-actions">
                                <button className="open-btn">Open</button>
                                <button className="download-btn">⬇</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="dash-card">
                        <div className="dash-card-image" style={{ background: '#111' }}>
                            <div style={{ color: 'white', textAlign: 'center', paddingTop: '40px' }}>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>Level Up Your<br />Emotional<br />Intelligence</div>
                            </div>
                        </div>
                        <div className="dash-card-details">
                            <h3 className="dash-card-title">Level Up Your Emotional Intelligence</h3>
                            <div className="dash-card-actions">
                                <button className="open-btn">Open</button>
                                <button className="download-btn">⬇</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="dash-card">
                        <div className="dash-card-image" style={{ background: '#111' }}>
                            <div style={{ color: 'white', textAlign: 'center', paddingTop: '40px' }}>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>CONVERTING<br />CONTENT<br />FUNNEL</div>
                            </div>
                        </div>
                        <div className="dash-card-details">
                            <h3 className="dash-card-title">Converting Content Funnel</h3>
                            <div className="dash-card-actions">
                                <button className="open-btn">Open</button>
                                <button className="download-btn">⬇</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="dash-card">
                        <div className="dash-card-image" style={{ background: '#D4AF37' }}>
                            <div style={{ color: 'white', textAlign: 'center', paddingTop: '40px' }}>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>FROM ZERO TO<br />CONTENT<br />HERO</div>
                            </div>
                        </div>
                        <div className="dash-card-details">
                            <h3 className="dash-card-title">From Zero to Content Hero</h3>
                            <div className="dash-card-actions">
                                <button className="open-btn">Open</button>
                                <button className="download-btn">⬇</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="dash-card">
                        <div className="dash-card-image" style={{ background: '#EAEAEA' }}>
                            <div style={{ color: '#111', textAlign: 'center', paddingTop: '40px' }}>
                                <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'turquoise' }}>THE UGC<br />CONVERSION<br />PLAYBOOK</div>
                            </div>
                        </div>
                        <div className="dash-card-details">
                            <h3 className="dash-card-title">The UGC Conversion Playbook</h3>
                            <div className="dash-card-actions">
                                <button className="open-btn">Open</button>
                                <button className="download-btn">⬇</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LibraryDashboard;
