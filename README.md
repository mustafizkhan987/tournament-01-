# BGMI Tournaments Website

A modern website for managing BGMI (Battlegrounds Mobile India) esports tournaments.

## Live Demo

- Frontend: [https://bgmi-tournaments.vercel.app](https://bgmi-tournaments.vercel.app)
- Backend API: [https://bgmi-tournaments-api.onrender.com](https://bgmi-tournaments-api.onrender.com)

## Features

- Modern, responsive UI with BGMI theme
- User authentication system
- Tournament management
- Team registration
- Live match updates
- Real-time tournament tracking
- Leaderboard system

## Tech Stack

- Frontend:
  - HTML5, CSS3, JavaScript
  - Socket.io Client
  - Modern responsive design
  - Real-time updates

- Backend:
  - Node.js & Express
  - MongoDB with Mongoose
  - JWT Authentication
  - Socket.io for real-time events
  - RESTful API

## Setup Instructions

### Frontend Setup
1. Navigate to the frontend directory
```bash
cd frontend
```

2. Open index.html in a browser or use a local server
```bash
npx serve
```

### Backend Setup
1. Navigate to the backend directory
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create config.env in backend/config with:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
```

4. Start the server
```bash
npm start
```

## Deployment

### Frontend Deployment (Vercel)
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Backend Deployment (Render)
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Use the following settings:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Add environment variables from config.env

## API Documentation

### Auth Routes
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Tournament Routes
- GET /api/tournaments - Get all tournaments
- POST /api/tournaments - Create tournament
- GET /api/tournaments/:id - Get single tournament
- PUT /api/tournaments/:id - Update tournament
- DELETE /api/tournaments/:id - Delete tournament

### Team Routes
- GET /api/teams - Get all teams
- POST /api/teams - Create team
- GET /api/teams/:id - Get single team
- PUT /api/teams/:id - Update team
- DELETE /api/teams/:id - Delete team

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
