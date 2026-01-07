import React from 'react';
import './FreeResourcesSection.css';

const FreeResourcesSection = () => {
    const resources = [
        {
            title: 'Digital Product Funnels Blueprint',
            description: '10 proven funnels that turn your leads into customers using digital products.',
            buttonText: 'Copy proven funnels',
            image: '/src/assets/images/AbpIeUOwimkXr4E9pi7LuGZYbs.webp'
        },
        {
            title: 'Online Business Master Plan',
            description: 'Access a guide full of actionable steps and tips for growing your online business.',
            buttonText: 'Kickstart your business',
            image: '/src/assets/images/rqBUkaZTux2NgF8ZnjMv6SCAhfs.png'
        },
        {
            title: 'Digital Product Pricing Strategies',
            description: 'This free guide reveals the exact pricing frameworks used by top online sellers.',
            buttonText: 'Get your pricing right',
            image: '/src/assets/images/I8srIL5qZt28XJ624ZHdv2bs.webp'
        }
    ];

    return (
        <section className="free-resources-section">
            {/* Header */}
            <div className="free-resources-header">
                <h2 className="free-resources-title">
                    <span className="text-white">Get started with</span><br />
                    <span className="text-red">free resources</span>
                </h2>
                <p className="free-resources-subtitle">
                    All designed to simplify your online business journey, no matter your experience level.
                </p>
            </div>

            {/* Resources Grid */}
            <div className="resources-grid">
                {resources.map((resource, index) => (
                    <div className="resource-card" key={index}>
                        <div className="resource-image">
                            <img src={resource.image} alt={resource.title} />
                        </div>
                        <div className="resource-content">
                            <h3 className="resource-title">{resource.title}</h3>
                            <p className="resource-description">{resource.description}</p>
                            <button className="resource-btn">{resource.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FreeResourcesSection;
