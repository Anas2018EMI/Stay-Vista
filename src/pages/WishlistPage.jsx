import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import '../styles/pages/WishlistPage.css';

const WishlistPage = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    return (
        <div className="wishlist-page">
            <div className="wishlist-header">
                <h1>Your Wishlist</h1>
                <p>{wishlistItems.length} saved stays</p>
            </div>

            {wishlistItems.length > 0 ? (
                <div className="wishlist-grid">
                    {wishlistItems.map(homestay => (
                        <div key={homestay.id} className="wishlist-card">
                            <div className="wishlist-image">
                                <img src={homestay.images[0]} alt={homestay.title} />
                                <button
                                    className="remove-button"
                                    onClick={() => removeFromWishlist(homestay.id)}
                                    aria-label="Remove from wishlist"
                                >
                                    ❌
                                </button>
                            </div>
                            <div className="wishlist-info">
                                <Link to={`/homestay/${homestay.id}`} className="wishlist-title">
                                    {homestay.title}
                                </Link>
                                <div className="wishlist-location">{homestay.location}</div>
                                <div className="wishlist-meta">
                                    <div className="wishlist-rating">
                                        <span className="star-icon">★</span>
                                        <span>{homestay.rating}</span>
                                        {homestay.reviewsCount && (
                                            <span className="reviews-count">({homestay.reviewsCount} reviews)</span>
                                        )}
                                    </div>
                                    <div className="wishlist-price">${homestay.price}</div>
                                </div>
                                <Link to={`/homestay/${homestay.id}`} className="view-button">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-wishlist">
                    <div className="empty-icon">❤️</div>
                    <h2>Your wishlist is empty</h2>
                    <p>Start saving your favorite places by clicking the heart icon on any homestay.</p>
                    <Link to="/search" className="browse-button">Browse Homestays</Link>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;