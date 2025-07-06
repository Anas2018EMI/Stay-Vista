import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHostListings, getHostBookings, getHostStats } from '../services/mockDataService';
import { useAuth } from '../contexts/AuthContext';
import '../styles/pages/HostDashboardPage.css';

const HostDashboardPage = () => {
    const { currentUser } = useAuth();
    const [listings, setListings] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [stats, setStats] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHostData = async () => {
            setLoading(true);
            try {
                // In a real app, we would pass the actual host ID
                const [listingsData, bookingsData, statsData] = await Promise.all([
                    getHostListings(currentUser.id),
                    getHostBookings(currentUser.id),
                    getHostStats(currentUser.id)
                ]);

                setListings(listingsData);
                setBookings(bookingsData);
                setStats(statsData);
            } catch (error) {
                console.error('Error fetching host data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHostData();
    }, [currentUser.id]);

    if (loading) {
        return <div className="loading">Loading dashboard...</div>;
    }

    return (
        <div className="host-dashboard-page">
            <div className="dashboard-header">
                <h1>Host Dashboard</h1>
                <div className="host-welcome">
                    <p>Welcome back, {currentUser.name}!</p>
                    <button className="add-listing-button">+ Add New Listing</button>
                </div>
            </div>

            <div className="dashboard-tabs">
                <button
                    className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`tab-button ${activeTab === 'listings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('listings')}
                >
                    Your Listings
                </button>
                <button
                    className={`tab-button ${activeTab === 'bookings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('bookings')}
                >
                    Bookings
                </button>
                <button
                    className={`tab-button ${activeTab === 'messages' ? 'active' : ''}`}
                    onClick={() => setActiveTab('messages')}
                >
                    Messages
                </button>
            </div>

            <div className="dashboard-content">
                {activeTab === 'overview' && stats && (
                    <div className="dashboard-overview">
                        <div className="stats-cards">
                            <div className="stat-card">
                                <div className="stat-value">{stats.totalListings}</div>
                                <div className="stat-label">Active Listings</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">{stats.totalBookings}</div>
                                <div className="stat-label">Total Bookings</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">${stats.totalEarnings}</div>
                                <div className="stat-label">Total Earnings</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-value">{stats.averageRating} ★</div>
                                <div className="stat-label">Average Rating</div>
                            </div>
                        </div>

                        <div className="recent-activity">
                            <h2>Recent Activity</h2>
                            <div className="activity-list">
                                {bookings.slice(0, 3).map(booking => (
                                    <div key={booking.id} className="activity-item">
                                        <div className="activity-icon">📅</div>
                                        <div className="activity-details">
                                            <p>New booking for <strong>{booking.homestayTitle}</strong></p>
                                            <p className="activity-meta">
                                                {booking.guestName} • {booking.checkIn} to {booking.checkOut}
                                            </p>
                                        </div>
                                        <div className="activity-amount">${booking.totalAmount}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="performance-chart">
                            <h2>Earnings Overview</h2>
                            <div className="chart-placeholder">
                                <p>Chart showing monthly earnings would appear here</p>
                                <p>In a real application, this would be implemented with a charting library</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'listings' && (
                    <div className="dashboard-listings">
                        <h2>Your Listings</h2>
                        {listings.length > 0 ? (
                            <div className="listings-grid">
                                {listings.map(listing => (
                                    <div key={listing.id} className="listing-card">
                                        <div className="listing-image">
                                            <img src={listing.images[0]} alt={listing.title} />
                                        </div>
                                        <div className="listing-details">
                                            <h3>{listing.title}</h3>
                                            <p className="listing-location">{listing.location}</p>
                                            <div className="listing-meta">
                                                <span className="listing-price">${listing.price}/night</span>
                                                <span className="listing-rating">
                                                    ★ {listing.rating} ({listing.reviewsCount} reviews)
                                                </span>
                                            </div>
                                            <div className="listing-actions">
                                                <Link to={`/homestay/${listing.id}`} className="view-button">View</Link>
                                                <button className="edit-button">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="no-listings">
                                <p>You don't have any listings yet.</p>
                                <button className="add-listing-button">Add Your First Listing</button>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'bookings' && (
                    <div className="dashboard-bookings">
                        <h2>Your Bookings</h2>
                        {bookings.length > 0 ? (
                            <div className="bookings-table-container">
                                <table className="bookings-table">
                                    <thead>
                                        <tr>
                                            <th>Guest</th>
                                            <th>Property</th>
                                            <th>Dates</th>
                                            <th>Status</th>
                                            <th>Amount</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.map(booking => (
                                            <tr key={booking.id}>
                                                <td>{booking.guestName}</td>
                                                <td>{booking.homestayTitle}</td>
                                                <td>{booking.checkIn} to {booking.checkOut}</td>
                                                <td>
                                                    <span className={`status-badge ${booking.status}`}>
                                                        {booking.status}
                                                    </span>
                                                </td>
                                                <td>${booking.totalAmount}</td>
                                                <td>
                                                    <button className="message-button">Message</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="no-bookings">
                                <p>You don't have any bookings yet.</p>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="dashboard-messages">
                        <h2>Messages</h2>
                        <div className="messages-placeholder">
                            <p>Your messages with guests would appear here.</p>
                            <p>This feature would be implemented with real-time messaging in a full application.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HostDashboardPage;