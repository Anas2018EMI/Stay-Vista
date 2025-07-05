import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getHomestayById, getNearbyHomestays } from '../services/mockDataService';
import { useAuth } from '../contexts/AuthContext';
import { useWishlist } from '../contexts/WishlistContext';
import '../styles/pages/HomestayDetailsPage.css';

const HomestayDetailsPage = () => {
    const { id } = useParams();
    const { currentUser } = useAuth();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const [homestay, setHomestay] = useState(null);
    const [nearbyHomestays, setNearbyHomestays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const [review, setReview] = useState({ rating: 5, comment: '' });
    const [showAllAmenities, setShowAllAmenities] = useState(false);
    const location = useLocation();
    const [bookingDetails, setBookingDetails] = useState({
        location: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
    });
    let numDays = (new Date(bookingDetails.checkOut) - new Date(bookingDetails.checkIn))/(1000*60*60*24);

    // Get initial filters from URL query params
    useEffect(() => {
        const params = new URLSearchParams(location.search);

        setBookingDetails(prev => ({
            ...prev,
            location: params.get('location') || '',
            checkIn: params.get('checkIn') || '',
            checkOut: params.get('checkOut') || '',
            guests: parseInt(params.get('guests') || '1'),
        }));
    }, [location.search]);

    useEffect(() => {
        const fetchHomestay = async () => {
            setLoading(true);
            try {
                const data = await getHomestayById(id);
                setHomestay(data);

                const nearby = await getNearbyHomestays(id, 3);
                setNearbyHomestays(nearby);
            } catch (error) {
                console.error('Error fetching homestay details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHomestay();
        // Scroll to top when component mounts or id changes
        window.scrollTo(0, 0);
    }, [id]);

    const handleWishlistToggle = () => {
        if (isInWishlist(homestay.id)) {
            removeFromWishlist(homestay.id);
        } else {
            addToWishlist(homestay);
        }
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        console.log('Review submitted:', review);

        const newReview = {
            id: `new-${Date.now()}`,
            user: currentUser.name,
            rating: review.rating,
            date: new Date().toISOString().split('T')[0],
            comment: review.comment
        };

        setHomestay(prev => ({
            ...prev,
            reviews: [newReview, ...prev.reviews]
        }));

        // Reset the form
        setReview({ rating: 5, comment: '' });
    };

    if (loading) {
        return <div className="loading">Loading homestay details...</div>;
    }

    if (!homestay) {
        return <div className="not-found">Homestay not found</div>;
    }

    return (
        <div className="homestay-details-page">
            <div className="homestay-header">
                <h1 className="homestay-title">{homestay.title}</h1>
                <div className="homestay-subheader">
                    <div className="homestay-rating">
                        <span className="star-icon">★</span>
                        <span>{homestay.rating}</span>
                        <span className="reviews-count">({homestay.reviewsCount} reviews)</span>
                    </div>
                    <div className="homestay-location">{homestay.location}</div>
                </div>
            </div>

            <div className="homestay-gallery">
                <div className="gallery-main">
                    <img
                        src={homestay.images[activeImage]}
                        alt={`${homestay.title} - Image ${activeImage + 1}`}
                    />
                </div>
                <div className="gallery-thumbnails">
                    {homestay.images.map((image, index) => (
                        <div
                            key={index}
                            className={`gallery-thumbnail ${index === activeImage ? 'active' : ''}`}
                            onClick={() => setActiveImage(index)}
                        >
                            <img src={image} alt={`${homestay.title} - Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="homestay-content">
                <div className="homestay-main">
                    <section className="homestay-description">
                        <h2>About this place</h2>
                        <p>{homestay.description}</p>
                    </section>

                    <section className="homestay-amenities">
                        <h2>Amenities</h2>
                        <div className={`amenities-grid ${showAllAmenities ? 'show-all' : ''}`}>
                            {homestay.amenities.map((amenity, index) => (
                                <div key={index} className="amenity-item">
                                    <span className="amenity-icon">{getAmenityIcon(amenity)}</span>
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                        {/* {homestay.amenities.length > 6 && (
                            <button
                                className="show-more-button"
                                onClick={() => setShowAllAmenities(!showAllAmenities)}
                            >
                                {showAllAmenities ? 'Show less' : 'Show all amenities'}
                            </button>
                        )} */}
                    </section>

                    <section className="homestay-location-map">
                        <h2>Location</h2>
                        <div className="map-container">
                            <div className="map-placeholder">
                            <iframe src={homestay.map} width="600" height="450"  
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            {/* style="border:0;" */}
                                {/* <p>Map showing location at {homestay.location}</p>
                                <p>Latitude: {homestay.latitude}, Longitude: {homestay.longitude}</p> */}
                            </div>
                        </div>
                        <p className="location-note">
                            Exact location provided after booking. For privacy and security reasons.
                        </p>
                    </section>

                    <section className="homestay-host">
                        <h2>Hosted by {homestay.host.name}</h2>
                        <div className="host-info">
                            <img
                                src={homestay.host.avatar}
                                alt={homestay.host.name}
                                className="host-avatar"
                            />
                            <div className="host-details">
                                <p>Member since {homestay.host.joinedDate}</p>
                                <button className="contact-host-button">Contact Host</button>
                            </div>
                        </div>
                    </section>

                    <section className="homestay-reviews">
                        <h2>Reviews</h2>
                        <div className="reviews-summary">
                            <div className="average-rating">
                                <span className="big-star">★</span>
                                <span className="rating-number">{homestay.rating}</span>
                            </div>
                            <div className="reviews-count">
                                {homestay.reviews.length} reviews
                            </div>
                        </div>

                        {currentUser && (
                            <div className="add-review">
                                <h3>Write a Review</h3>
                                <form onSubmit={handleReviewSubmit}>
                                    <div className="rating-input">
                                        <label>Rating:</label>
                                        <select
                                            value={review.rating}
                                            onChange={(e) => setReview({ ...review, rating: parseInt(e.target.value) })}
                                        >
                                            {[5, 4, 3, 2, 1].map(num => (
                                                <option key={num} value={num}>{num} stars</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="comment-input">
                                        <label>Your experience:</label>
                                        <textarea
                                            value={review.comment}
                                            onChange={(e) => setReview({ ...review, comment: e.target.value })}
                                            placeholder="Share your experience staying at this place..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="submit-review-button">Submit Review</button>
                                </form>
                            </div>
                        )}

                        <div className="reviews-list">
                            {homestay.reviews.map((review) => (
                                <div key={review.id} className="review-item">
                                    <div className="review-header">
                                        <div className="reviewer-name">{review.user}</div>
                                        <div className="review-date">{review.date}</div>
                                    </div>
                                    <div className="review-rating">
                                        {'★'.repeat(review.rating)}
                                        {'☆'.repeat(5 - review.rating)}
                                    </div>
                                    <div className="review-comment">{review.comment}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="nearby-homestays">
                        <h2>Other homestays nearby</h2>
                        <div className="nearby-grid">
                            {nearbyHomestays.map((stay) => (
                                <Link to={`/homestay/${stay.id}`} key={stay.id} className="nearby-card">
                                    <div className="nearby-image">
                                        <img src={stay.images[0]} alt={stay.title} />
                                    </div>
                                    <div className="nearby-info">
                                        <h3>{stay.title}</h3>
                                        <div className="nearby-location">{stay.location}</div>
                                        <div className="nearby-price">${stay.price} / night</div>
                                        <div className="nearby-rating">
                                            <span className="star-icon">★</span>
                                            <span>{stay.rating}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="homestay-sidebar">
                    <div className="booking-card">
                        <div className="booking-price">
                            <span className="price-amount">${homestay.price}</span>
                            <span className="price-night">/ night</span>
                        </div>

                        <form className="booking-form">
                            <div className="booking-dates">
                                <div className="date-input">
                                    <label>Check-in</label>
                                    <input type="date" value={bookingDetails.checkIn}
                                    onChange={(e) => setBookingDetails(prev =>({...prev, checkIn: e.target.value}))} 
                                    required />
                                </div>
                                <div className="date-input">
                                    <label>Check-out</label>
                                    <input type="date" value={bookingDetails.checkOut} 
                                    onChange={(e) => setBookingDetails(prev =>({...prev, checkOut: e.target.value}))}
                                    required />
                                </div>
                            </div>

                            <div className="guests-input">
                                <label>Guests</label>
                                <select  value={bookingDetails.guests} 
                                onChange={(e) => setBookingDetails(prev =>({...prev, guests: e.target.value}))} >
                                    {[1, 2, 3, 4, 5, 6].map(num => (
                                        <option key={num} value={num}>
                                            {num} guest{num !== 1 ? 's' : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className="book-now-button">Book Now</button>
                        </form>

                        <div className="booking-total">
                            <div className="price-breakdown">
                                <div className="price-item">
                                    <span>${homestay.price} x {numDays ? numDays : 0} nights x {bookingDetails.guests} guests</span>
                                    <span>${homestay.price * (numDays ? numDays : 0) * bookingDetails.guests}</span>
                                </div>
                                <div className="price-item">
                                    <span>Cleaning fee</span>
                                    <span>$50</span>
                                </div>
                                <div className="price-item">
                                    <span>Service fee</span>
                                    <span>$30</span>
                                </div>
                            </div>
                            <div className="price-total">
                                <span>Total</span>
                                <span>${numDays ?  homestay.price * numDays * bookingDetails.guests + 50 + 30 : 0}</span>
                            </div>
                        </div>
                        {currentUser && <button
                            className={`wishlist-button ${isInWishlist(homestay.id) ? 'active' : ''}`}
                            onClick={handleWishlistToggle}
                        >
                            {isInWishlist(homestay.id)
                                ? '❤️ Remove from Wishlist'
                                : '🤍 Add to Wishlist'
                            }
                        </button>}
                        {/* Reporting a homestay is not essential for now */}
                        {/* <div className="report-listing">
                            <button className="report-button">Report this listing</button>
                        </div> */}
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

// Helper function to get appropriate icon for amenities (same as in SearchResultsPage)
function getAmenityIcon(amenity) {
    switch (amenity.toLowerCase()) {
        case 'wifi': return <img src="../../public/assets/images/amenity-wifi.png" alt="amenity-wifi" /> ;
        case 'pool': return <img src="../../public/assets/images/amenity-pool.png" alt="" /> ;
        case 'kitchen': return <img src="../../public/assets/images/amenity-kitchen.png" alt="" /> ;
        case 'air conditioning': return <img src="../../public/assets/images/amenity-ac.png" alt="" /> ;
        case 'free parking': return <img src="../../public/assets/images/amenity-parking.png" alt="" /> ;
        case 'washing machine': return <img src="../../public/assets/images/amenity-washing.png" alt="" /> ;
        case 'tv': return <img alt="" src="../../public/assets/images/amenity-tv.png" /> ;
        case 'workspace': return <img src="../../public/assets/images/amenity-workspace.png" alt="" /> ;
        case 'ocean view': return <img src="../../public/assets/images/amenity-ocean-view.png" alt="" /> ;
        case 'mountain view': return <img src="../../public/assets/images/amenity-mountain-view.png" alt="" /> ;
        default: return '✓';
    }
}

export default HomestayDetailsPage;