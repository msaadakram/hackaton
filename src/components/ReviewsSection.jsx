import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
    const reviews = [
        {
            name: 'Jason Kearns',
            company: 'Eezylearn',
            avatar: '/src/assets/images/1EL3JrCHX1KpKsslf8i8syhI.jpeg',
            rating: 5,
            text: "Entrepedia's premade courses and ebooks have been a fantastic addition to our online academy at Eezylearn. Their high-quality content has enriched our..."
        },
        {
            name: 'Greg Wilson',
            company: 'Fix and Flippers',
            avatar: '/src/assets/images/3wX5S7ucpAoi8Bpn5UjazFUzF54.jpeg',
            rating: 5,
            text: "I love the PLR content from Entrepedia. We use the handouts as freebies and bundle the guides into our coaching programs. I would certainly recommen..."
        },
        {
            name: 'Sheena Whyatt',
            company: 'Kapow',
            avatar: '/src/assets/images/2HJ9S4s94MbNfS5G72iWdbIebo.jpeg',
            rating: 5,
            text: "I simply love the variety of topics & delivery that Entrepedia offers - being able to offer audio, video & book options to my customers is fabulous, as it cove..."
        },
        {
            name: 'Greg Beacher',
            company: 'Trow Bridge Solutions',
            avatar: '/src/assets/images/547Vblcrhjnad86yKZsIU8TkTs.jpeg',
            rating: 5,
            text: "The quality of the material from Entrepedia is very high, with clear visuals, videos and audio products. The library contains loads of information to..."
        },
        {
            name: 'James Powell',
            company: '',
            avatar: '',
            initials: 'JP',
            rating: 5,
            text: "Love the platform, the GUI and interface is so easy to use and the digital products are extremely professional. Entrepedia has knocked it out of the park!!"
        },
        {
            name: 'Clyde Will',
            company: '',
            avatar: '/src/assets/images/NeUwISmjPW4tIdBonFY3ltlgdM.jpeg',
            rating: 5,
            text: "Exceptional quality. Unbeatable price. Loads of content. With the Master Library the possibilities for my business are endless."
        },
        {
            name: 'Kat Clore',
            company: '',
            avatar: '/src/assets/images/9LyopQa5nBaoboghFzGRQqG07xE.jpeg',
            rating: 5,
            featured: true,
            text: "The value of the articles, information, and resources which are included in this lifetime Entrepedia membership, is absolutely OVER THE TOP! Not only for..."
        },
        {
            name: 'Darren Thompson',
            company: "Teacher's Coach",
            avatar: '/src/assets/images/SOfvcAOlzgfeTZml7rwTp84O9E.jpeg',
            rating: 5,
            text: "The influx of teaching online from countries with a lower cost of living is making it difficult for teachers to charge their worth...."
        },
        {
            name: 'Derek Passalaqua',
            company: 'Legacy Guard Financial Group',
            avatar: '/src/assets/images/OgqwX98DwyKg9hkQiMR1WMWxy0.jpeg',
            rating: 5,
            text: "Absolutely amazing product probably the best investment i have ever made when it comes to online or digital products these guys are the best and..."
        },
        {
            name: 'James Joseph Berk',
            company: '',
            avatar: '/src/assets/images/89dT58TDysdKQZu6QrvDXRTiTYM.jpg',
            rating: 5,
            text: "I have been nothing but impressed with the quality of every single item I have downloaded! They have been relevant..."
        },
        {
            name: 'Dr Philip Sykes',
            company: '',
            avatar: '/src/assets/images/PKJnAETGFhA4OrB9NDOesfMM54.jpg',
            rating: 5,
            text: "Entrepedia is a no-brainer. It is genius and provides you with incredible tools to create your own lead magnets, learning, books to sell and more..."
        },
        {
            name: 'Sandi Bohak',
            company: '',
            avatar: '/src/assets/images/7vjWHHpfNznU13kWKalbY3FtZs.jpg',
            rating: 5,
            text: "Entrepedia has everything what you need for starting successful digital business. I would recommend to my friends who want to start selling digital..."
        }
    ];

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, i) => (
            <span key={i} className="star">★</span>
        ));
    };

    return (
        <section className="reviews-section">
            {/* Rating Badge */}
            <div className="rating-badge">
                <span className="star-icon">⭐</span>
                <span>Rated 4.8/5 overall by our users</span>
            </div>

            {/* Headline */}
            <h2 className="reviews-headline">
                <span className="text-dark">See what our</span><br />
                <span className="text-red">users are saying</span>
            </h2>

            {/* Reviews Grid */}
            <div className="reviews-grid">
                {reviews.map((review, index) => (
                    <div className={`review-card ${review.featured ? 'featured' : ''}`} key={index}>
                        <div className="review-header">
                            {review.avatar ? (
                                <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                            ) : (
                                <div className="reviewer-initials">{review.initials}</div>
                            )}
                            <div className="reviewer-info">
                                <h4 className="reviewer-name">{review.name}</h4>
                                {review.company && <p className="reviewer-company">{review.company}</p>}
                            </div>
                            {review.featured && <span className="featured-badge">★</span>}
                        </div>
                        <div className="review-rating">
                            {renderStars(review.rating)}
                        </div>
                        <p className="review-text">{review.text}</p>
                        <a href="#" className="read-more">Read more</a>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button className="see-all-reviews-btn">
                See all reviews
            </button>
        </section>
    );
};

export default ReviewsSection;
