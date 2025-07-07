import React, { createContext, useState, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [registeredUsers, setRegisteredUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [isHost, setIsHost] = useState(false);
    let counter = 0;

    // Check if user is already logged in (from localStorage)
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const userData = JSON.parse(user);
            setCurrentUser(userData);
            setIsHost(userData.isHost || false);
        }
        setLoading(false);
    }, []);

    // Login function (mock)
    const login = (email, password, asHost = false) => {
        // I'm not connecting to database for now, I will use localStorage and contextAPI
        if (registeredUsers.some(item => item.email === email)) {
            const userData = registeredUsers.filter(item => item.email === email)[0];
            setCurrentUser(userData);
            setIsHost(asHost);
            localStorage.setItem('user', JSON.stringify(userData));
            return Promise.resolve(userData);
        }else {
            throw Error("User does not exist, try to sign up!");
        }

        
    };

    // Signup function (mock)
    const signup = (name, email, password, asHost = false) => {
        // I'm not connecting to database for now, I will use localStorage and contextAPI

        if (!registeredUsers.some(item => item.email === email)) {
            // A new user
            const userData = {
                id: nanoid(),
                // id: '123',
                name,
                email,
                isHost: asHost
            };
            setRegisteredUsers(prev => {
                setCurrentUser(userData);
                setIsHost(asHost);
                localStorage.setItem('user', JSON.stringify(userData));     
                return [...prev, userData];
            });
            console.log(registeredUsers); // Old value of registeredUsers
            return Promise.resolve(userData);
        } else {
            throw Error("Email already exist, try a new one!");
        }
       
        
       
        
    };

    // Logout function
    const logout = () => {
        setCurrentUser(null);
        setIsHost(false);
        localStorage.removeItem('user');
    };

    const  update = (name, email, user) => {
        user.name = name;
        user.email = email;
        setCurrentUser(user);
        // setIsHost(asHost);
        localStorage.setItem('user', JSON.stringify(user));
        return Promise.resolve(user);

    }

    const value = {
        currentUser,
        registeredUsers,
        isHost,
        login,
        signup,
        logout,
        update,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}