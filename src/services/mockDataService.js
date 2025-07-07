// Mock data for homestays
const homestays = [
    {
        id: '1',
        title: 'AYANA Villas Bali',
        location: 'Bali, Indonesia',
        price: 120,
        rating: 4.9,
        reviewsCount: 350,
        images: [
            '/assets/images/homestay1-1.jpg',
            '/assets/images/homestay1-2.jpg',
            '/assets/images/homestay1-3.jpg',
        ],
        amenities: ['Wifi', 'Pool', 'Kitchen', 'Air conditioning', 'Ocean view'],
        description: 'Stunning beachfront villa with private pool and panoramic ocean views. Perfect for a romantic getaway or family vacation.',
        host: {
            id: 'host1',
            name: 'Sarah',
            avatar: '/assets/images/host1.jpg',
            joinedDate: 'January 2020',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Michael',
                rating: 5,
                date: '2023-06-15',
                comment: 'Absolutely breathtaking! The view was amazing and the villa is exactly as pictured.',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d504701.13871925784!2d114.52693176269534!3d-8.788169860839846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sAYANA%20Villas%20Bali!5e0!3m2!1sen!2sma!4v1751559751625!5m2!1sen!2sma"
    },
    {
        id: '2',
        title: 'Karpimo Horizon - Caldera view',
        location: 'Santorini, Fira, Greece',
        price: 250,
        rating: 4.7,
        reviewsCount: 330,
        images: [
            '/assets/images/homestay2-1.jpg',
            '/assets/images/homestay2-2.jpg',
            '/assets/images/homestay2-3.jpg',
        ],
        amenities: ['Wifi', 'Kitchen', 'Air conditioning', 'Ocean view'],
        description: "Renovated with comfort and style, offering a blend of traditional Cycladic architecture with modern facilities and luxury.",
        host: {
            id: 'host2',
            name: 'Iakovos',
            avatar: '/assets/images/host2.jpg',
            joinedDate: 'Mai 2021',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Michael',
                rating: 5,
                date: '2023-06-15',
                comment: 'Absolutely breathtaking! The view was amazing and the villa is exactly as pictured.',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d102721.81572330164!2d25.271413803100586!3d36.43201065063478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sSantorini%20Mansion%20Maisonette%20Sea%20View%20Jacuzzi%203BDR!5e0!3m2!1sen!2sma!4v1751560278491!5m2!1sen!2sma",
    },
    {
        id: '3',
        title: 'Kyoto Machiya Fukune Karpimo Horizon - Caldera view',
        location: 'Kyoto, Japan',
        price: 377,
        rating: 4.2,
        reviewsCount: 300,
        images: [
            '/assets/images/homestay3-1.jpg',
            '/assets/images/homestay3-2.jpg',
            '/assets/images/homestay3-3.jpg',
        ],
        amenities: ['Wifi', 'Kitchen', 'Air conditioning'],
        description: "Renovated with comfort and style, offering a blend of traditional Cycladic architecture with modern facilities and luxury.",
        host: {
            id: 'host3',
            name: 'Maro',
            avatar: '/assets/images/host3.jpg',
            joinedDate: 'January 2019',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Michael',
                rating: 5,
                date: '2023-06-15',
                comment: 'Absolutely breathtaking! The view was amazing and the villa is exactly as pictured.',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d52287.57990859032!2d135.6797180175781!3d35.007362365722656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sKyoto%20Machiya%20Fukune!5e0!3m2!1sen!2sma!4v1751560630825!5m2!1sen!2sma",
    },
    {
        id: '4',
        title: 'Villa Tirtadari w/ Pvt. Pool',
        location: 'Bali, Indonesia',
        price: 104,
        rating: 4.9,
        reviewsCount: 67,
        images: [
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1400489918517149977/original/85419b73-0e1f-4b65-8d56-9f442a48e976.jpeg?im_w=1440',
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1400489918517149977/original/33cd4233-2ede-49c3-b346-dee1e8bf205e.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1400489918517149977/original/e0c37c3c-d5e7-47ee-b52a-e65e22359e53.jpeg?im_w=1440',
        ],
        amenities: ['Wifi', 'Kitchen', 'Air conditioning', 'Pool', 'TV'],
        description: "Discover a serene escape in this beautiful 2-bd villa with stunning rice field views. Lounge by your private pool, relax in the breezy open-plan living space, and unwind in cozy bedrooms with stylish en-suite bathrooms. Equipped with a full kitchen, air conditioning, and high speed Wi-Fi. Hidden in a peaceful Canggu corner yet minutes from cafes, beaches, nightlife, and boutique shops. The perfect retreat for families, couples, or friends seeking comfort in nature. Unwind at this peaceful oasis.",
        host: {
            id: 'host4',
            name: 'Maro',
            avatar: '/assets/images/host3.jpg',
            joinedDate: 'January 2019',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Toni',
                rating: 5,
                date: '2023-09-11',
                comment: 'Really good experience and quality service, recommended!',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d504701.13871925784!2d114.52693176269534!3d-8.788169860839846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sVilla%20Tirtadari%20by%20Nakula!5e0!3m2!1sen!2sma!4v1751559966296!5m2!1sen!2sma",
    },
    {
        id: '6',
        title: 'Tropical Glamping Bali- Designer Villa 10 min to the Beach',
        location: 'Bali, Indonesia',
        price: 63,
        rating: 4.6,
        reviewsCount: 33,
        images: [
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzEyNTIzMTk4MDY2MjI3NDc4/original/9deb4ce1-c108-4250-ba9d-e8e50a71eb31.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzEyNTIzMTk4MDY2MjI3NDc4/original/2b453c25-fd2c-4789-806d-6352d7e9e22b.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzEyNTIzMTk4MDY2MjI3NDc4/original/8ee16fc9-ea46-4934-b4f9-090ffb50aa04.jpeg?im_w=1200',
        ],
        amenities: ['Wifi', 'Kitchen', 'Air conditioning', 'TV', 'Free parking', 'Workspace',],
        description: "Escape to COCOON Boutique Villas in Pererenan, where Bali’s beaches, temples, and fine dining are just minutes away. Villa BUMI offers a fully equipped kitchen, laundry room, daily cleaning, and night security for ultimate comfort. Enjoy exclusive access to the 5-star COMO Shambhala Spa for world-class relaxation. Unwind, rejuvenate, and experience the best of Bali with COCOON—your private sanctuary awaits.",
        host: {
            id: 'host6',
            name: 'Gregory',
            avatar: '/assets/images/host2.jpg',
            joinedDate: 'January 2019',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Domas',
                rating: 5,
                date: '2023-09-11',
                comment: 'Very good accommodation with a perfect location close to the city.',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d504955.3641199969!2d114.9045867919922!3d-8.599475759696665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sTropical%20Glamping%20Nusa%20Penida%20-%20Private%20Romantic%20Seaside%20Bungalow%20Diamond%20Beach!5e0!3m2!1sen!2sma!4v1751560148800!5m2!1sen!2sma",
    },
    {
        id: '7',
        title: 'Kyoto Kiyomizu Monzentei SEI Tanimachi-kun Hotel',
        location: 'Kyoto, Japan',
        price: 132,
        rating: 4.8,
        reviewsCount: 193,
        images: [
            'https://a0.muscache.com/im/pictures/7961077e-25c4-4d38-8366-4000822890d4.jpg?im_w=1200',
            'https://a0.muscache.com/im/pictures/c901e1a4-5113-46fc-afb3-3a737abac1a2.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-40403766/original/ae6ada51-c35f-4ded-948c-a8c31f386b41.jpeg?im_w=1200',
        ],
        amenities: ['Wifi', 'Washing machine', 'Air conditioning', 'TV', 'Free parking', 'Workspace',],
        description: "Crush On Hotel,\nLive in Tanimachi-kun and experience the charm of Kyoto. Crush On Hotel is a boutique hotel built by Tanimachi in 2019. Our service concept is: Only five-star service is worthy of five-star hardware, and only five-star hardware is worthy of our five-star guests.",
        host: {
            id: 'host7',
            name: 'Mei Lu',
            avatar: '/assets/images/host3.jpg',
            joinedDate: 'January 2017',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Emily',
                rating: 5,
                date: '2023-05-17',
                comment: 'We loved our stay. The previous reviews stating there is some street noise were accurate, but we did not find it intrusive. Additionally it was crucial to have AC in the intense heat. ',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d52287.57990859032!2d135.6797180175781!3d35.007362365722656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sSei%20Kiyomizu%20Monzentei!5e0!3m2!1sen!2sma!4v1751560736102!5m2!1sen!2sma",
    },
    {
        id: '8',
        title: 'Guest One More Heart at Higashi Otowa ',
        location: 'Kyoto, Japan',
        price: 55,
        rating: 4.7,
        reviewsCount: 202,
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-831584981374306453/original/f7985acf-68ca-4821-a440-028282f857c2.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODMxNTg0OTgxMzc0MzA2NDUz/original/c85af0e8-d716-41bb-9d4e-159c1463d703.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-831584981374306453/original/6e5652a9-e8bd-4e4b-8498-0666c8939459.png?im_w=1200',
        ],
        amenities: ['Wifi', 'Washing machine', 'Air conditioning', 'TV', 'Free parking',],
        description: "This room can accommodate up to 2 people with 2 single beds. \nRecommended points\nLocated a 5-minute walk from■ Nijo-jo-mae Station, it is convenient for sightseeing.\nThe ■key is a smart lock for a keyless stay♪\nThe ■kitchen is fully equipped with cooking utensils, a kettle, and a microwave oven☆\nFully equipped with■ coin laundry, perfect for long stays and business trips♪", host: {
            id: 'host8',
            name: 'Min',
            avatar: '/assets/images/host4.jpg',
            joinedDate: 'January 2018',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Joachim',
                rating: 5,
                date: '2025-05-17',
                comment: 'The place felt luxurious, the facilities and rooms were nice! With Nijo Castle and the center all within 30mins of walking the place was well-placed for those willing to put in some steps. Otherwise there’s an bus stop and subway closeby aswell! Also love that FamilyMart just down the street! The host was also flexible to give us an extra night of stay in the same room so we didn’t have to struggle and rush it having to swap rooms or find a new place! We enjoyed our stay here!',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d52287.57990859032!2d135.6797180175781!3d35.007362365722656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sGuest%20One%20More%20Heart%20at%20Higashi%20Otowa!5e0!3m2!1sen!2sma!4v1751560816173!5m2!1sen!2sma",
    },
    {
        id: '9',
        title: 'Andromaches Villa with private pool',
        location: 'Santorini, Fira, Greece',
        price: 254,
        rating: 4.9,
        reviewsCount: 224,
        images: [
            'https://a0.muscache.com/im/pictures/29fc015a-2e8b-4be7-ad79-0abfd5d9cf4e.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/967a5238-38c0-4799-9877-f5463f424d0e.jpg?im_w=1440',
            'https://a0.muscache.com/im/pictures/f1ef56df-ef57-421b-b8dc-dc6b9bedf121.jpg?im_w=1440',
        ],
        amenities: ['Wifi', 'Kitchen', 'Air conditioning', 'Ocean view', 'Mountain view', 'Pool'],
        description: "A beautiful villa with traditional and modern architecture, in the center of the traditional village of Kallistis, with complete privacy and private parking just outside the villa. Just 250m from the central square of the village of Pyrgos, 5km from Fira, 7km from the international airport of Santorini airport and 5km from the port. Spacious bedroom, seating area, bathroom with shower, wc, king size bed, private terrace with living area and private pool, overlooking the sea.",
        host: {
            id: 'host9',
            name: 'Katerina',
            avatar: '/assets/images/host1.jpg',
            joinedDate: 'February 2021',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Snezana',
                rating: 5,
                date: '2023-06-11',
                comment: 'This was an amazing stay, very quiet and peaceful. The host was fantastic and view was amazing. Would highly recommend!',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d102721.81572330164!2d25.271413803100586!3d36.43201065063478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s2BR%20Villa%3A%20Heated%20Pool%2C%20Sea%20View%2C%20Premium%20Package!5e0!3m2!1sen!2sma!4v1751560398721!5m2!1sen!2sma",
    },
    {
        id: '10',
        title: 'Pnoi luxury suites | Cycladic Cave house in Karterados',
        location: 'Santorini, Fira, Greece',
        price: 96,
        rating: 4.91,
        reviewsCount: 81,
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-636501371624310423/original/84602885-ba1c-409e-acb7-0019ccce9c02.jpeg?im_w=1200',
            'https://a0.muscache.com/im/pictures/miso/Hosting-636501371624310423/original/fcb67030-5b83-40a6-91f6-73341eb2af24.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-636501371624310423/original/56381595-7318-498d-9a88-f407b57b59cd.jpeg?im_w=720',
        ],
        amenities: ['Wifi', 'Kitchen', 'Air conditioning', 'Washing machine'],
        description: "Just 1.5 Km from the lively capital of Fira, in Karterados Village, with fantastic Caldera views. \n The accommodation comprises of a private cave suite room, in addition there is a spacious living room with 2 sofa-beds, smart TV with sound bar and free WiFi.\n Well equipped kitchen with oven, a microwave, free unlimited Nespresso coffee shots, private bathroom with shower, bathrobes and plentiful supply of towels, a beautiful patio area and much more! The Airport is 4 Km and Santorini Port is 8 Km",
        host: {
            id: 'host10',
            name: 'Cezar',
            avatar: '/assets/images/host2.jpg',
            joinedDate: 'Marsh 2021',
        },
        reviews: [
            {
                id: 'rev1',
                user: 'Molly',
                rating: 5,
                date: '2023-07-22',
                comment: 'Really lovely unit, clever set up to sleep four.  Loved the outdoor shower.  Beautiful to wander the narrow white-washed laneways',
            },
            // More reviews...
        ],
        latitude: -8.6478,
        longitude: 115.1385,
        map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d102721.81572330164!2d25.271413803100586!3d36.43201065063478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sPnoi%20Suites%202%20Bedroom%20Split%20Level%20Apartment!5e0!3m2!1sen!2sma!4v1751560513984!5m2!1sen!2sma",
    },
];

// Popular destinations
const popularDestinations = [
    {
        id: 'dest1',
        name: 'Bali, Indonesia',
        image: '/assets/images/bali.jpg',
        count: 254,
    },
    {
        id: 'dest2',
        name: 'Santorini, Greece',
        image: '/assets/images/santorini.jpg',
        count: 183,
    },
    {
        id: 'dest3',
        name: 'Kyoto, Japan',
        image: '/assets/images/kyoto.jpg',
        count: 129,
    },
    // More destinations...
];

// Testimonials
const testimonials = [
    {
        id: 'test1',
        name: 'Jessica Thompson',
        avatar: '/assets/images/testimonial1.jpg',
        text: 'StayVista made finding the perfect homestay so easy! The host was amazing and the place exceeded our expectations.',
        location: 'New York, USA',
    },
    {
        id: 'test2',
        name: 'Marco Rossi',
        avatar: '/assets/images/testimonial2.jpg',
        text: 'As a frequent traveler, I\'ve used many booking platforms, but StayVista offers the most authentic local experiences.',
        location: 'Milan, Italy',
    },
    {
        id: 'test3',
        name: 'Aisha Patel',
        avatar: '/assets/images/testimonial3.jpg',
        text: 'The attention to detail in the listings helped me find exactly what I was looking for. My family had an unforgettable vacation!',
        location: 'Sydney, Australia',
    },
];

// Mock functions to mimic API calls
export const getHomestays = (filters = {}) => {
    let filtered = [...homestays];

    // Apply filters (location, price, amenities, etc.)
    if (filters.location) {
        filtered = filtered.filter(home =>
            home.location.toLowerCase().includes(filters.location.toLowerCase())
        );
    }

    if (filters.minPrice) {
        filtered = filtered.filter(home => home.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
        filtered = filtered.filter(home => home.price <= filters.maxPrice);
    }

    if (filters.amenities && filters.amenities.length) {
        filtered = filtered.filter(home =>
            filters.amenities.every(amenity => home.amenities.includes(amenity))
        );
    }

    // Apply sorting
    if (filters.sortBy) {
        switch (filters.sortBy) {
            case 'price-low-high':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
                filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
                break;
            default:
                break;
        }
    }

    return Promise.resolve(filtered);
};

export const getHomestayById = (id) => {
    const homestay = homestays.find(h => h.id === id);
    return Promise.resolve(homestay);
};

export const getNearbyHomestays = (id, limit = 3) => {
    const currentHomestay = homestays.find(h => h.id === id);
    if (!currentHomestay) return Promise.resolve([]);

    // Find homestays in the same location
    const sameLocation = homestays.filter(h =>
        h.id !== id && h.location === currentHomestay.location
    );

    // If we don't have enough, add some others
    let nearby = [...sameLocation];
    if (nearby.length < limit) {
        const others = homestays.filter(h =>
            h.id !== id && !sameLocation.includes(h)
        ).slice(0, limit - nearby.length);

        nearby = [...nearby, ...others];
    }

    return Promise.resolve(nearby.slice(0, limit));
};

export const getPopularDestinations = () => {
    return Promise.resolve(popularDestinations);
};

export const getTestimonials = () => {
    return Promise.resolve(testimonials);
};

export const getFeaturedHomestays = (limit = 6) => {
    // Return highest rated homestays
    const featured = [...homestays]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);

    return Promise.resolve(featured);
};

// Mock host data functions
export const getHostListings = (hostId) => {
    const hostListings = homestays.filter(h => h.host.id === hostId);
    return Promise.resolve(hostListings);
};

export const getHostBookings = (hostId) => {
    // This would come from a backend in a real app
    return Promise.resolve([
        {
            id: 'booking1',
            homestayId: '1',
            homestayTitle: 'Modern Beachfront Villa',
            guestName: 'David Chen',
            checkIn: '2023-08-15',
            checkOut: '2023-08-20',
            totalAmount: 600,
            status: 'confirmed',
        },
        // More bookings...
    ]);
};

export const getHostStats = (hostId) => {
    // This would come from a backend in a real app
    return Promise.resolve({
        totalListings: 3,
        totalBookings: 28,
        averageRating: 4.8,
        totalEarnings: 5840,
    });
};