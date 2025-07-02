import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/SearchBar.css';

const SearchBar = ({ expanded = false }) => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSearch = (e) => {
        e.preventDefault();

        // Build query params
        const params = new URLSearchParams();
        if (location) params.set('location', location);
        if (checkIn) params.set('checkIn', checkIn);
        if (checkOut) params.set('checkOut', checkOut);
        if (guests > 0) params.set('guests', guests.toString());

        // Navigate to search results with query params
        navigate(`/search?${params.toString()}`);
    };

    return (
        <div className={`search-bar ${expanded ? 'expanded' : ''}`}>
            <form onSubmit={handleSearch}>
                <div className="search-inputs">
                    <div className="search-input-group">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Where are you going?"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="search-input-group">
                        <label htmlFor="check-in">Check In</label>
                        <input
                            type="date"
                            id="check-in"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>

                    <div className="search-input-group">
                        <label htmlFor="check-out">Check Out</label>
                        <input
                            type="date"
                            id="check-out"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>

                    <div className="search-input-group">
                        <label htmlFor="guests">Guests</label>
                        <input
                            type="number"
                            id="guests"
                            min="1"
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value))}
                        />
                    </div>

                    <button type="submit" className="search-button">
                        <span className="search-icon"><img src="public/assets/images/search.png" alt="" /></span>
                        <span className="search-text">Search</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;