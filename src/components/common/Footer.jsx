import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-column">
                        <h3>StayVista</h3>
                        <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Press</Link></li>
                            <li><Link to="/">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Hosting</h3>
                        <ul>
                            <li><Link to="/host/signup">Become a Host</Link></li>
                            <li><Link to="/">Hosting Resources</Link></li>
                            <li><Link to="/">Responsible Hosting</Link></li>
                            <li><Link to="/">Community Forum</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/">Help Center</Link></li>
                            <li><Link to="/">Safety Information</Link></li>
                            <li><Link to="/">Cancellation Options</Link></li>
                            <li><Link to="/">COVID-19 Response</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Connect</h3>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <span className="social-icon">f</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <span className="social-icon">t</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <span className="social-icon">i</span>
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                                <span className="social-icon">p</span>
                            </a>
                        </div>
                        <div className="newsletter">
                            <h4>Subscribe to our newsletter</h4>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Your email address" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>&copy; {new Date().getFullYear()} StayVista. All rights reserved.</p>
                        <ul className="legal-links">
                            <li><Link to="/">Privacy</Link></li>
                            <li><Link to="/">Terms</Link></li>
                            <li><Link to="/">Sitemap</Link></li>
                        </ul>
                    </div>
                    <div className="footer-currency">
                        <select defaultValue="USD">
                            <option value="USD">$ USD</option>
                            <option value="EUR">€ EUR</option>
                            <option value="GBP">£ GBP</option>
                            <option value="JPY">¥ JPY</option>
                        </select>
                        <select defaultValue="EN">
                            <option value="EN">English</option>
                            <option value="ES">Español</option>
                            <option value="FR">Français</option>
                            <option value="DE">Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;