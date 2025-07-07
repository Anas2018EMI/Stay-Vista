import React, { createContext, useState, useContext, useEffect } from 'react';

const BookingContext = createContext();

export function useBooking() {
    return useContext(BookingContext);
}

export function BookingProvider({ children }) {
    const [bookingItems, setBookingItems] = useState([]);

    // Load Booking from localStorage on mount
    useEffect(() => {
        const savedBooking = localStorage.getItem('booking');
        if (savedBooking) {
            setBookingItems(JSON.parse(savedBooking));
        }
    }, []);

    // Save Booking to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('Booking', JSON.stringify(bookingItems));
    }, [bookingItems]);

    // Add item to Booking
    const addToBooking = (homestay) => {
        setBookingItems(prev => {
            if (!prev.some(item => item.id === homestay.id)) {
                return [...prev, homestay];
            }
            return prev;
        });
    };

    // Remove item from Booking
    const removeFromBooking = (homestayId) => {
        setBookingItems(prev => prev.filter(item => item.id !== homestayId));
    };

    // Check if an item is in the Booking
    const isInBooking = (homestayId) => {
        return bookingItems.some(item => item.id === homestayId);
    };

    const value = {
        bookingItems,
        addToBooking,
        removeFromBooking,
        isInBooking
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
}