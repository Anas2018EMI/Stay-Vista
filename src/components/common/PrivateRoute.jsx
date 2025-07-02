import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ children, isHost = false }) => {
    const { currentUser, isHost: userIsHost } = useAuth();

    // If not logged in, redirect to login page
    if (!currentUser) {
        return <Navigate to={isHost ? "/host/login" : "/login"} />;
    }

    // If route requires host privileges but user is not a host, redirect to host signup
    if (isHost && !userIsHost) {
        return <Navigate to="/host/signup" />;
    }

    // Otherwise render the protected component
    return children;
};

export default PrivateRoute;