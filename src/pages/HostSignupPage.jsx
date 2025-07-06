import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/pages/AuthPages.css';

const HostSignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !password || !confirmPassword || !phone) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        try {
            setLoading(true);
            // Pass true to indicate host signup
            await signup(name, email, password, true);
            navigate('/host/dashboard');
        } catch (error) {
            setError('Failed to create a host account. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page host-auth">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>Become a Host</h1>
                    <p>Start sharing your space and earning income with StayVista</p>
                </div>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <div className="terms-agreement">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            I agree to the <Link to="/terms">Terms of Service</Link>, <Link to="/privacy">Privacy Policy</Link>, and <Link to="/host-terms">Host Terms</Link>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="auth-button host-button"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up as Host'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Already a host? <Link to="/host/login">Log in as host</Link>
                    </p>
                </div>
            </div>

            <div className="auth-image">
                <img src="/assets/images/host-signup-image.jpg" alt="Beautiful property" />
            </div>
        </div>
    );
};

export default HostSignupPage;