import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useBooking } from '../contexts/BookingContext';
import '../styles/pages/UserProfilePage.css';

const UserProfilePage = () => {
    const { currentUser, logout, update } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');
    const { bookingItems } = useBooking();

    // Form state for profile info
    const [profileInfo, setProfileInfo] = useState({
        name: currentUser.name || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        bio: currentUser.bio || '',
    });

   const  navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileInfo(prev => ({ ...prev, [name]: value }));
        
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        // In a real app, this would call an API to update the user profile
        console.log('Profile updated:', profileInfo);

        try {
            await update(profileInfo.name, profileInfo.email, currentUser);
        } catch (error) {
            console.error(error);
        } finally {
            navigate("/profile")
        }
        // Show success message
        alert('Profile updated successfully!');
    };

    const viewDetails = (id) => {
        navigate(`/homestay/${id}`)
    }

    return (
        <div className="user-profile-page">
            <div className="profile-sidebar">
                <div className="user-info">
                    <img
                        src={currentUser.avatar || '/assets/images/default-avatar.png'}
                        alt={currentUser.name}
                        className="profile-avatar"
                    />
                    <h2>{currentUser.name}</h2>
                    <p className="user-email">{currentUser.email}</p>
                </div>

                <div className="profile-tabs">
                    <button
                        className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Personal Info
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'bookings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bookings')}
                    >
                        Booking History
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'payment' ? 'active' : ''}`}
                        onClick={() => setActiveTab('payment')}
                    >
                        Payment Methods
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        Security
                    </button>
                </div>

                <button className="logout-button" onClick={logout}>
                    Log Out
                </button>
            </div>

            <div className="profile-content">
                {activeTab === 'profile' && (
                    <div className="profile-info-tab">
                        <h1>Personal Information</h1>
                        <p className="tab-description">
                            Update your personal details and how we can reach you
                        </p>

                        <form onSubmit={handleProfileUpdate} className="profile-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={profileInfo.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={profileInfo.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={profileInfo.phone}
                                        onChange={handleInputChange}
                                        placeholder="Add your phone number"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="language">Preferred Language</label>
                                    <select id="language" defaultValue="en">
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                        <option value="fr">French</option>
                                        <option value="de">German</option>
                                        <option value="it">Italian</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="bio">About Me</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={profileInfo.bio}
                                    onChange={handleInputChange}
                                    placeholder="Tell hosts a little about yourself..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <button type="submit" className="update-profile-button">
                                Save Changes
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'bookings' && (
                    <div className="bookings-history-tab">
                        <h1>Your Booking History</h1>
                        <p className="tab-description">
                            View all your past and upcoming stays
                        </p>

                        <div className="bookings-list">
                            {bookingItems && bookingItems.map(booking => (
                                <div key={booking.id} className="booking-card">
                                    <div className="booking-header">
                                        <h3>{booking.homestayTitle}</h3>
                                        <span className={`booking-status ${booking.status}`}>
                                            {booking.status === 'completed' ? 'Completed' : 'Upcoming'}
                                        </span>
                                    </div>
                                    <div className="booking-details">
                                        <p className="booking-location">{booking.location}</p>
                                        <p className="booking-dates">{booking.dates}</p>
                                        <p className="booking-amount">Total: ${booking.amount}</p>
                                    </div>
                                    <div className  ="booking-actions">
                                        <button className="booking-action-button" onClick={() => viewDetails(booking.id)} >
                                            {booking.status === 'completed' ? 'View Details' :  'Leave a Review'}
                                        </button>
                                        {booking.status === 'upcoming' && (
                                            <button className="booking-action-button secondary">
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'payment' && (
                    <div className="payment-methods-tab">
                        <h1>Payment Methods</h1>
                        <p className="tab-description">
                            Manage your payment options
                        </p>

                        <div className="payment-methods-list">
                            <div className="payment-method-card">
                                <div className="payment-method-icon">💳</div>
                                <div className="payment-method-details">
                                    <h3>Visa ending in 4242</h3>
                                    <p>Expires 09/2025</p>
                                </div>
                                <div className="payment-method-actions">
                                    <button className="payment-action-button">Edit</button>
                                    <button className="payment-action-button secondary">Remove</button>
                                </div>
                            </div>

                            <button className="add-payment-button">
                                + Add Payment Method
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'security' && (
                    <div className="security-tab">
                        <h1>Security Settings</h1>
                        <p className="tab-description">
                            Manage your password and account security
                        </p>

                        <div className="security-options">
                            <div className="security-option">
                                <div className="security-option-content">
                                    <h3>Change Password</h3>
                                    <p>It's a good idea to use a strong password that you don't use elsewhere</p>
                                </div>
                                <button className="security-button">Update</button>
                            </div>

                            <div className="security-option">
                                <div className="security-option-content">
                                    <h3>Two-Factor Authentication</h3>
                                    <p>Add an extra layer of security to your account</p>
                                </div>
                                <button className="security-button">Enable</button>
                            </div>

                            <div className="security-option">
                                <div className="security-option-content">
                                    <h3>Connected Accounts</h3>
                                    <p>Manage social accounts connected to your profile</p>
                                </div>
                                <button className="security-button">Manage</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfilePage;