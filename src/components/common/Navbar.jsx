import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/components/Navbar.css';

const Navbar = () => {
    const { currentUser, isHost, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-icon">🏡</span>
                    <span className="logo-text">StayVista</span>
                </Link>

                <div className="navbar-links-container">
                    <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/search" className="nav-link">Find Stays</Link>

                        {!currentUser ? (
                            <>
                                <Link to="/login" className="nav-link">Login</Link>
                                <Link to="/signup" className="nav-button">Sign Up</Link>
                                <Link to="/host/login" className="nav-link">Host Login</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/wishlist" className="nav-link">Wishlist</Link>
                                {isHost ? (
                                    <Link to="/host/dashboard" className="nav-link">Host Dashboard</Link>
                                ) : null}
                                <div className="dropdown">
                                    <button className="dropdown-toggle">
                                        <img
                                            src={currentUser.avatar || '/assets/images/default-avatar.png'}
                                            alt={currentUser.name}
                                            className="user-avatar"
                                        />
                                        <span>{currentUser.name}</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link to="/profile" className="dropdown-item">Profile</Link>
                                        {!isHost && <Link to="/host/signup" className="dropdown-item">Become a Host</Link>}
                                        <button onClick={handleLogout} className="dropdown-item">Logout</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;