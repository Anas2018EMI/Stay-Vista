import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { WishlistProvider } from './contexts/WishlistContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import HomestayDetailsPage from './pages/HomestayDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import HostDashboardPage from './pages/HostDashboardPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HostLoginPage from './pages/HostLoginPage';
import HostSignupPage from './pages/HostSignupPage';
import PrivateRoute from './components/common/PrivateRoute';
import './styles/global.css';

function App() {
    return (
        <AuthProvider>
            <WishlistProvider>
                <Router>
                    <div className="app-container">
                        <Navbar />
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/search" element={<SearchResultsPage />} />
                                <Route path="/homestay/:id" element={<HomestayDetailsPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/signup" element={<SignupPage />} />
                                <Route path="/host/login" element={<HostLoginPage />} />
                                <Route path="/host/signup" element={<HostSignupPage />} />
                                <Route path="/profile" element={
                                    <PrivateRoute>
                                        <UserProfilePage />
                                    </PrivateRoute>
                                } />
                                <Route path="/host/dashboard" element={
                                    <PrivateRoute isHost={true}>
                                        <HostDashboardPage />
                                    </PrivateRoute>
                                } />
                                <Route path="/wishlist" element={
                                    <PrivateRoute>
                                        <WishlistPage />
                                    </PrivateRoute>
                                } />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </WishlistProvider>
        </AuthProvider>
    );
}

export default App;