git # ElectroCare

ElectroCare is a React-based electrical and home appliance service management
interface. It connects customers with service professionals through a simple
workflow for discovering services, booking appointments, tracking requests,
and submitting reviews.

## Features

- Responsive landing page with service highlights
- Service catalog with search and pricing
- Customer registration and login screens
- Electrician registration and login screens
- Customer dashboard
- Electrician dashboard
- Service booking form with:
  - Service selection
  - Date and time
  - Service address
  - Problem description
- Customer request tracking
- Service status updates for electricians
- Customer reviews and ratings
- About, help, and contact pages

## Technology

- React 19
- Vite 7
- JavaScript / JSX
- CSS3
- Google Fonts - Poppins

## Requirements

- Node.js 18 or newer
- npm

## Installation

Clone or download the project, then open a terminal in the project directory:

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://127.0.0.1:5173
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## How to use

### Customer flow

1. Open the application.
2. Select **Customer Login** or **Customer Register**.
3. Open **Services** and choose a service.
4. Complete the booking details.
5. View the request from **My Requests**.
6. Submit a review after the service is completed.

### Electrician flow

1. Select **Electrician Login** or **Electrician Register**.
2. Open the electrician dashboard.
3. View service requests.
4. Update the status of requests as work progresses.

## Current project scope

This version is a frontend prototype. Application state is held in React
state during the current browser session.

Authentication and registration are currently demonstration flows:

- Any non-empty email and password can be used to log in.
- Registration validates required fields but does not create a persistent
  account.
- Accounts, requests, and reviews are not stored in a backend database.
- Refreshing the page resets the current session.

## Recommended next steps

- Add a backend API and persistent database
- Implement secure password hashing and account validation
- Persist bookings, statuses, and reviews
- Add authentication tokens and protected routes
- Add technician availability and customer-technician matching
- Add notifications and payment processing
- Add automated unit, integration, and end-to-end tests

## Project structure

```text
Electro Care/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       └── pages/
│           └── data/
│               └── services.js
└── README.md
```

## Build verification

To verify that the project builds successfully:

```bash
npm run build
```

