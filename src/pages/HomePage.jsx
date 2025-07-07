import React, { useEffect, useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import { Link } from 'react-router-dom';
import { getFeaturedHomestays, getPopularDestinations, getTestimonials } from '../services/mockDataService';
import '../styles/pages/HomePage.css';

const HomePage = () => {
    const [featuredStays, setFeaturedStays] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [stays, dests, tests] = await Promise.all([
                    getFeaturedHomestays(),
                    getPopularDestinations(),
                    getTestimonials()
                ]);

                setFeaturedStays(stays);
                setDestinations(dests);
                setTestimonials(tests);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Find Your Perfect Homestay Experience</h1>
                    <p>Discover unique places to stay with local hosts around the world</p>
                    <SearchBar expanded={true} />
                </div>
            </section>

            <section className="featured-section">
                <div className="section-header">
                    <h2>Featured Stays</h2>
                    <p>Handpicked homes with amazing amenities</p>
                </div>
                <div className="featured-grid">
                    {featuredStays.map((stay) => (
                        <Link to={`/homestay/${stay.id}`} key={stay.id} >
                            <div key={stay.id} className="featured-card">
                                <img src={stay.images[0]} alt={stay.title} />
                                <div className="featured-card-content">
                                    <div className="featured-card-location">{stay.location}</div>
                                    <h3 className="featured-card-title">{stay.title}</h3>
                                    <div className="featured-card-price">${stay.price} <span>/ night</span></div>
                                    <div className="featured-card-rating">
                                        <span className="star-icon">★</span>
                                        <span>{stay.rating}</span>
                                        <span className="reviews-count">({stay.reviewsCount} reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="destinations-section">
                <div className="section-header">
                    <h2>Popular Destinations</h2>
                    <p>Explore our most-loved locations</p>
                </div>
                <div className="destinations-grid">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="destination-card">
                            <a href={`/search?location=${dest.name.substring(0,dest.name.indexOf(","))}`}>
                                <img src={dest.image} alt={dest.name} />
                                <div className="destination-overlay">
                                    <h3>{dest.name}</h3>
                                    <p>{dest.count} properties</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonials-section">
                <div className="section-header">
                    <h2>What Our Guests Say</h2>
                    <p>Genuine experiences from the StayVista community</p>
                </div>
                <div className="testimonials-container">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"{testimonial.text}"</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={testimonial.avatar} alt={testimonial.name} />
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Become a Host</h2>
                    <p>Share your space, earn extra income, and meet interesting people from around the world.</p>
                    <a href="/host/signup">
                        <button className="cta-button">Learn More</button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HomePage;