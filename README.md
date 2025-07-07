# StayVista - Modern Homestay Booking Platform

![StayVista Logo](./public/favicon/house.png)

StayVista is a comprehensive React-based frontend application that simulates a homestay booking platform. The application allows guests to discover and book unique accommodations worldwide while providing hosts with tools to manage their properties and bookings.

## 🌟 Features

- **Intuitive Search System**: Search homestays by location, dates, and guest numbers with advanced filtering options
- **Detailed Property Pages**: Browse through property photos, amenities, descriptions, and reviews
- **User Authentication**: Separate authentication flows for guests and hosts
- **Wishlist Functionality**: Save favorite properties for future reference
- **Responsive Design**: Fully responsive interface that works seamlessly across all device sizes
- **User Profiles**: Manage personal information and booking history

## 🛠️ Tech Stack

- **React.js**: Frontend library for building the user interface
- **React Router**: Navigation and routing
- **Context API**: State management
- **Vite**: Build tool for fast development
- **CSS**: Custom styling without external libraries
- **LocalStorage**: Data persistence for authentication and wishlist

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

## 🚀 Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/stayvista.git
   cd stayvista
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
stayvista/
├── public/               # Static assets
│   └── assets/
│       └── images/       # Application images
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Shared components (Navbar, Footer, etc.)
│   │   ├── home/         # Homepage-specific components
│   │   ├── search/       # Search-related components
│   │   ├── homestay/     # Homestay detail components
│   │   ├── auth/         # Authentication components
│   │   ├── profile/      # User profile components
│   │   └── host/         # Host dashboard components
│   ├── contexts/         # React Context providers
│   │   ├── AuthContext.jsx   # Authentication state management
│   │   └── WishlistContext.jsx # Wishlist state management
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── SearchResultsPage.jsx
│   │   ├── HomestayDetailsPage.jsx
│   │   ├── UserProfilePage.jsx
│   │   ├── HostDashboardPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── SignupPage.jsx
│   ├── services/         # Service modules
│   │   ├── authService.js
│   │   └── mockDataService.js
│   ├── styles/           # CSS styles
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── pages/        # Page-specific styles
│   ├── utils/            # Utility functions
│   │   └── helpers.js
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
└── index.html            # HTML template
```

## 🧩 Component Architecture

StayVista follows a component-based architecture with a focus on reusability and separation of concerns:

- **Page Components**: High-level components that represent entire pages
- **Feature Components**: Components specific to a particular feature
- **Common Components**: Reusable components shared across the application
- **Context Providers**: Global state management with React Context API
- **Service Modules**: Handle data fetching and business logic

## 🔐 Authentication

StayVista implements a simulated authentication system with different flows for guests and hosts:

- **Guest Authentication**: Register and login as a traveler to book homestays
- **Host Authentication**: Register and login as a property owner to manage listings

Since this is a frontend-only application, authentication is simulated using localStorage for persistence.

## 🔄 State Management

The application uses React Context API for global state management:

- **AuthContext**: Manages user authentication state
- **WishlistContext**: Manages saved properties

For component-specific state, React's useState and useEffect hooks are used to maintain clean and manageable code.

## 📱 Responsive Design

StayVista is fully responsive and works on all device sizes:

- **Desktop**: Optimized for large screens with expanded layouts
- **Tablet**: Adjusted layouts for medium-sized screens
- **Mobile**: Streamlined interface for small screens with touch-friendly elements

The responsive design is implemented using CSS media queries and flexbox/grid layouts.

## 🌐 Mock Data Service

Since StayVista is a frontend-only application, it uses mock data services to simulate backend functionality:

- **mockDataService.js**: Provides methods to fetch homestay data, filter results, etc.
- **authService.js**: Handles user authentication and profile management

These services mimic API calls with promises and setTimeout to create a realistic data flow.

## 🎨 Design System

StayVista implements a consistent design system with:

- **Color Palette**: Teal primary color, Coral accent color, and neutral tones
- **Typography**: Montserrat for headings, Open Sans for body text
- **Components**: Consistent UI elements like buttons, cards, and form controls
- **Spacing**: Standardized spacing variables for consistent layouts

## 🧪 Testing

To run tests:

```bash
npm test
# or
yarn test
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- All images are sourced from [Unsplash](https://unsplash.com/)
- Icons from [Icons8](https://icons8.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Contact

If you have any questions or feedback, please reach out:

- Your Name - [anassaatef@gmail.com](mailto:anassaatef@gmail.com)
- GitHub: [https://github.com/Anas2018EMI](https://github.com/Anas2018EMI)
- LinkedIn: [www.linkedin.com/in/anas-aatef-a41627153](www.linkedin.com/in/anas-aatef-a41627153)

---

Happy booking with StayVista! 🏡✨
