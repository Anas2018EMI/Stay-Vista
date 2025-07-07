import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export function useWishlist() {
    return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] = useState([]);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            setWishlistItems(JSON.parse(savedWishlist));
        }
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    // Add item to wishlist
    const addToWishlist = (homestay) => {
        setWishlistItems(prev => {
            if (!prev.some(item => item.id === homestay.id)) {
                return [...prev, homestay];
            }
            return prev;
        });
    };

    // Remove item from wishlist
    const removeFromWishlist = (homestayId) => {
        setWishlistItems(prev => prev.filter(item => item.id !== homestayId));
    };

    // Check if an item is in the wishlist
    const isInWishlist = (homestayId) => {
        return wishlistItems.some(item => item.id === homestayId);
    };

    const value = {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}