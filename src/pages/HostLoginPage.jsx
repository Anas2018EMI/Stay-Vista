import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/pages/AuthPages.css';

const HostLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            setLoading(true);
            // Pass true to indicate host login
            await login(email, password, true);
            navigate('/host/dashboard');
        } catch (error) {
            setError('Failed to log in. Please check your credentials.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page host-auth">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>Host Login</h1>
                    <p>Access your StayVista host dashboard</p>
                </div>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="forgot-password">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="auth-button host-button"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Log In as Host'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Not a host yet? <Link to="/host/signup">Become a Host</Link>
                    </p>
                    <p>
                        Guest account? <Link to="/login">Log in as guest</Link>
                    </p>
                </div>
            </div>

            <div className="auth-image">
                <img src="/assets/images/host-login-image.jpg" alt="Host welcoming guests" />
            </div>
        </div>
    );
};

export default HostLoginPage;