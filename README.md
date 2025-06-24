# EVERLOOM 🏘️

A neighborhood task-sharing application that connects community members to help each other with daily tasks and errands.

![EVERLOOM Logo](./logo.png)

## 🌟 Features

- **Task Posting**: Create and share tasks that need help in your neighborhood
- **Location-Based Matching**: Find tasks near your location
- **User Profiles**: Manage your profile and track your community contributions
- **Real-time Updates**: Live notifications for task updates using WebSocket
- **Secure Authentication**: User authentication and authorization
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** components for modern UI
- **React Router** for navigation
- **React Query** for data fetching
- **Clerk** for authentication (optional)

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database
- **WebSocket** for real-time communication
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** enabled for cross-origin requests

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL (for local development with database)

### Option 1: Production Setup (Recommended)
This uses in-memory storage and is perfect for testing and demos:

```bash
# Clone the repository
git clone https://github.com/MohitPatni0731/everloom.git
cd everloom

# Install dependencies
npm install
cd backend && npm install && cd ..

# Start the application
chmod +x start-everloom.sh
./start-everloom.sh
```

The application will be available at:
- 🌐 **Frontend**: http://localhost:8081
- 🔧 **Backend API**: http://localhost:3001

### Option 2: Local Development with PostgreSQL

```bash
# Install PostgreSQL (macOS)
brew install postgresql
brew services start postgresql

# Create database and user
createdb everloom_db
createuser everloom_user

# Create backend environment file
cd backend
cp .env.example .env
# Edit .env with your database credentials

# Install dependencies and setup database
npm install
npm run db:setup

# Go back to root and install frontend dependencies
cd ..
npm install

# Start with local database
chmod +x start-local.sh
./start-local.sh
```

## 📁 Project Structure

```
everloom/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   └── utils/             # Helper functions
├── backend/               # Backend source code
│   ├── scripts/           # Database setup scripts
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
├── public/                # Static assets
├── start-everloom.sh      # Production start script
├── start-local.sh         # Local development script
└── package.json           # Frontend dependencies
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get specific task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### Users
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build command: `npm run build`
2. Output directory: `dist`
3. Environment variables needed:
   - `VITE_API_URL` - Your backend API URL
   - `VITE_CLERK_PUBLISHABLE_KEY` - Clerk key (if using Clerk)

### Backend Deployment (Railway/Render/Heroku)
1. Deploy the `backend/` folder
2. Set environment variables:
   - `DATABASE_URL` - PostgreSQL connection string
   - `JWT_SECRET` - Secret for JWT tokens
   - `PORT` - Server port (usually set automatically)

## 🔧 Development

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd backend
npm run dev          # Start with nodemon
npm run start        # Start production server
npm run db:setup     # Setup database
npm run db:seed      # Seed database with sample data
```

## 📱 Features in Detail

### Task Management
- Create tasks with title, description, location, and category
- Set task status (open, in-progress, completed)
- Add photos to tasks
- Location-based task discovery

### User System
- User registration and authentication
- Profile management with avatar upload
- Task history and statistics
- Community reputation system

### Real-time Features
- Live task updates via WebSocket
- Instant notifications for task status changes
- Real-time chat between task poster and helper

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/MohitPatni0731/everloom/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Node.js](https://nodejs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Made with ❤️ for building stronger communities** 