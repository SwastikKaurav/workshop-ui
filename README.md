# FOSSEE Workshop Booking - UI Redesign

## About
This is a React-based frontend redesign of the FOSSEE Workshop Booking portal built with Vite + React.

## Live Demo
https://workshop-booking-iitb.netlify.app/

## Setup Instructions
1. Clone the repository
2. Navigate to frontend folder: `cd frontend`
3. Install dependencies: `npm install`
4. Run the app: `npm run dev`
5. Open `http://localhost:5173`

## Project Structure
├── Screenshots/               # Screenshots
├── frontend/                  # React application
│   ├── public/                # Static assets
│   └── src/
│       ├── components/        # Reusable components
│       │   ├── Navbar.jsx     # Navigation bar shown on all pages
│       │   ├── Navbar.css     # Navbar styles
│       │   ├── Footer.jsx     # Footer shown on all pages
│       │   └── Footer.css     # Footer styles
│       ├── pages/             # Individual pages
│       │   ├── Home.jsx       # Workshop listing page
│       │   ├── Home.css       # Home page styles
│       │   ├── Login.jsx      # User login page
│       │   ├── Register.jsx   # User registration page
│       │   ├── Auth.css       # Shared styles for Login and Register
│       │   ├── WorkshopDetail.jsx   # Individual workshop info page
│       │   ├── WorkshopDetail.css   # Workshop detail styles
│       │   ├── Profile.jsx    # User profile page
│       │   └── Profile.css    # Profile page styles
│       ├── App.jsx            # Main app component with routing
│       ├── main.jsx           # Entry point
│       └── index.css          # Global styles
├── README.md                  # Project documentation

## Pages
- Home - Workshop listing
- Login - User login
- Register - New user registration
- Workshop Detail - Individual workshop info
- Profile - User profile

## Design Principles
I focused on mobile-first design since most students access websites on their phones. I maintained a clean visual hierarchy with a consistent color scheme of dark navy and red throughout all pages to give it a modern and professional look.

## Responsiveness
Used CSS Grid and Flexbox for layouts. Added media queries for screens below 768px so all pages work well on mobile devices. The navbar stacks vertically on small screens and cards go single column.

## Trade-offs
I chose plain CSS over heavy UI frameworks like Bootstrap or Material UI to keep the app lightweight and fast loading. This means more manual styling but better performance.

## Challenges
The most challenging part was understanding React Router and how navigation works between pages. I approached it by building one page at a time and testing each route before moving to the next.

## Screenshots

### Home Page
![Home Page](Screenshots/Home.png)

### Login Page
![Login Page](Screenshots/Login.png)

### Register Page
![Register Page](Screenshots/Register.png)

### Workshop Detail Page
![Workshop Detail](Screenshots/WorkshopDetails.png)

### Profile Page
![Profile Page](Screenshots/Profile.png)
