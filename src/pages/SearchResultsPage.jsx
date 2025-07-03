import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getHomestays } from '../services/mockDataService';
import { Link } from 'react-router-dom';
import '../styles/pages/SearchResultsPage.css';

const SearchResultsPage = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        location: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        minPrice: 0,
        maxPrice: 1000,
        amenities: [],
        sortBy: 'popular'
    });

    // Get initial filters from URL query params
    useEffect(() => {
        const params = new URLSearchParams(location.search);

        setFilters(prev => ({
            ...prev,
            location: params.get('location') || '',
            checkIn: params.get('checkIn') || '',
            checkOut: params.get('checkOut') || '',
            guests: parseInt(params.get('guests') || '1'),
        }));
    }, [location.search]);

    // Fetch results based on filters
    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const data = await getHomestays(filters);
                setResults(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [filters]);

    // Update the CSS variables for the slider track
    useEffect(() => {
        const minPercent = (filters.minPrice / 1000) * 100 + 10 * Math.log(Math.E *(1 -filters.minPrice / 1000)) ;
        const maxPercent = (filters.maxPrice / 1000) * 100 -10*  Math.log(Math.E *  filters.maxPrice / 1000);
        
        const sliderTrack = document.querySelector('.dual-slider-container');
        if (sliderTrack) {
        sliderTrack.style.setProperty('--min-percent', `${minPercent}%`);
        sliderTrack.style.setProperty('--max-percent', `${maxPercent}%`);
        }
    }, [filters.minPrice, filters.maxPrice]);

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleMinPriceChange = (value) => {
        const newMinPrice = Math.min(parseInt(value), filters.maxPrice);
        setFilters(prev => ({ ...prev, minPrice: newMinPrice }));
    };

    const handleMaxPriceChange = (value) => {
        const newMaxPrice = Math.max(parseInt(value), filters.minPrice);
        setFilters(prev => ({ ...prev, maxPrice: newMaxPrice }));
    };

    const handleAmenityToggle = (amenity) => {
        setFilters(prev => {
            const currentAmenities = [...prev.amenities];
            if (currentAmenities.includes(amenity)) {
                return {
                    ...prev,
                    amenities: currentAmenities.filter(a => a !== amenity)
                };
            } else {
                return {
                    ...prev,
                    amenities: [...currentAmenities, amenity]
                };
            }
        });
    };

    const clearFilters = () => {
        setFilters({
            ...filters,
            minPrice: 0,
            maxPrice: 1000,
            amenities: [],
            sortBy: 'popular'
        });
    };

    const amenitiesList = [
        'Wifi', 'Pool', 'Kitchen', 'Air conditioning', 'Free parking',
        'Washing machine', 'TV', 'Workspace', 'Ocean view', 'Mountain view'
    ];

    return (
        <div className="search-results-page">
            <div className="search-container">
                <aside className="filters-sidebar">
                    <div className="filters-header">
                        <h2>Filters</h2>
                        <button className="clear-filters" onClick={clearFilters}>Clear all</button>
                    </div>

                    <div className="filter-group">
                        <h3>Price Range</h3>
                        <div className="price-range-container">
                            <div className="price-inputs">
                                <div className="price-input-group">
                                    <label>Minimum</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max={filters.maxPrice}
                                        value={filters.minPrice}
                                        onChange={(e) => handleMinPriceChange(e.target.value)}
                                        className="price-input"
                                    />
                                </div>
                                <div className="price-input-group">
                                    <label>Maximum</label>
                                    <input
                                        type="number"
                                        min={filters.minPrice}
                                        max="1000"
                                        value={filters.maxPrice}
                                        onChange={(e) => handleMaxPriceChange(e.target.value)}
                                        className="price-input"
                                    />
                                </div>
                            </div>
                            
                            <div className="dual-slider-container">
                                <div className="slider-track"></div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={filters.minPrice}
                                    onChange={(e) => handleMinPriceChange(e.target.value)}
                                    className="price-slider min-price-slider"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={filters.maxPrice}
                                    onChange={(e) => handleMaxPriceChange(e.target.value)}
                                    className="price-slider max-price-slider"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Sort By</h3>
                        <select
                            value={filters.sortBy}
                            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                            className="sort-select"
                        >
                            <option value="popular">Popular</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Amenities</h3>
                        <div className="amenities-list">
                            {amenitiesList.map((amenity) => (
                                <label key={amenity} className="amenity-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={filters.amenities.includes(amenity)}
                                        onChange={() => handleAmenityToggle(amenity)}
                                    />
                                    {amenity}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                <div className="results-content">
                    <div className="results-header">
                        <h1>
                            {loading ? 'Searching...' :
                                results.length > 0
                                    ? `${results.length} stays found`
                                    : 'No stays found'
                            }
                            {filters.location && ` in ${filters.location}`}
                        </h1>
                        <p>
                            {filters.checkIn && filters.checkOut
                                ? `${filters.checkIn} to ${filters.checkOut} · `
                                : ''
                            }
                            {`${filters.guests} guest${filters.guests !== 1 ? 's' : ''}`}
                        </p>
                    </div>

                    {loading ? (
                        <div className="loading-results">Loading stays...</div>
                    ) : results.length > 0 ? (
                        <div className="results-list">
                            {results.map((homestay) => (
                                <div key={homestay.id} className="result-card">
                                    <div className="result-image">
                                        <img src={homestay.images[0]} alt={homestay.title} />
                                    </div>
                                    <div className="result-info">
                                        <div className="result-header">
                                            <h2 className="result-title">
                                                <Link to={`/homestay/${homestay.id}`}>{homestay.title}</Link>
                                            </h2>
                                            <div className="result-location">{homestay.location}</div>
                                            <div className="result-rating">
                                                <span className="star-icon">★</span>
                                                <span>{homestay.rating}</span>
                                                <span className="reviews-count">({homestay.reviewsCount} reviews)</span>
                                            </div>
                                        </div>
                                        <div className="result-amenities">
                                            {homestay.amenities.slice(0, 4).map((amenity, index) => (
                                                <span key={index} className="amenity-tag">
                                                    {getAmenityIcon(amenity)} {amenity}
                                                </span>
                                            ))}
                                            {homestay.amenities.length > 4 && (
                                                <span className="amenity-more">+{homestay.amenities.length - 4} more</span>
                                            )}
                                        </div>
                                        <div className="result-price">
                                            <span className="price-amount">${homestay.price}</span>
                                            <span className="price-night">/ night</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <p>No homestays found matching your criteria.</p>
                            <p>Try adjusting your filters or search for a different location.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Helper function to get appropriate icon for amenities
function getAmenityIcon(amenity) {
    switch (amenity.toLowerCase()) {
        case 'wifi': return <img src="../../public/assets/images/amenity-wifi.png" alt="amenity-wifi" /> ;
        case 'pool': return <img src="../../public/assets/images/amenity-pool.png" alt="" /> ;
        case 'kitchen': return <img src="../../public/assets/images/amenity-kitchen.png" alt="" /> ;
        case 'air conditioning': return <img src="../../public/assets/images/amenity-ac.png" alt="" /> ;
        case 'free parking': return <img src="../../public/assets/images/amenity-parking.png" alt="" /> ;
        case 'washing machine': return <img src="../../public/assets/images/amenity-washing.png" alt="" /> ;
        case 'tv': return <img src="" alt="../../public/assets/images/amenity-tv.png" /> ;
        case 'workspace': return <img src="../../public/assets/images/amenity-workspace.png" alt="" /> ;
        case 'ocean view': return <img src="../../public/assets/images/amenity-ocean-view.png" alt="" /> ;
        case 'mountain view': return <img src="../../public/assets/images/amenity-mountain-view.png" alt="" /> ;
        default: return '✓';
    }
}

export default SearchResultsPage;