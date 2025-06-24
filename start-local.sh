#!/bin/bash

# EVERLOOM Local Development Startup Script
echo "🚀 Starting EVERLOOM with Local PostgreSQL..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if PostgreSQL is running
echo -e "${BLUE}📊 Checking PostgreSQL...${NC}"
if ! pg_isready -h localhost -p 5432 > /dev/null 2>&1; then
    echo -e "${RED}❌ PostgreSQL is not running. Please start it first:${NC}"
    echo "   macOS: brew services start postgresql"
    echo "   Ubuntu: sudo systemctl start postgresql"
    echo "   Windows: Start PostgreSQL service"
    exit 1
fi
echo -e "${GREEN}✅ PostgreSQL is running${NC}"

# Setup backend if needed
if [ ! -f "backend/.env" ]; then
    echo -e "${YELLOW}⚠️  Backend .env file not found. Please create one first.${NC}"
    echo "See POSTGRESQL_SETUP.md for instructions."
    exit 1
fi

# Install backend dependencies if needed
if [ ! -d "backend/node_modules" ]; then
    echo -e "${BLUE}📦 Installing backend dependencies...${NC}"
    cd backend && npm install && cd ..
fi

# Setup database if needed
echo -e "${BLUE}🏗️  Setting up database...${NC}"
cd backend && npm run db:setup > /dev/null 2>&1 && cd ..

# Install frontend dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
    npm install
fi

# Start backend in background
echo -e "${BLUE}🔧 Starting backend server...${NC}"
cd backend && npm run dev > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Check if backend is running
if ! curl -s http://localhost:3001/api/health > /dev/null; then
    echo -e "${RED}❌ Backend failed to start. Check backend.log for details.${NC}"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi
echo -e "${GREEN}✅ Backend running on http://localhost:3001${NC}"

# Start frontend
echo -e "${BLUE}🎨 Starting frontend...${NC}"
npm run dev &
FRONTEND_PID=$!

# Function to cleanup background processes
cleanup() {
    echo -e "\n${YELLOW}🛑 Shutting down servers...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo -e "${GREEN}✅ Shutdown complete${NC}"
    exit 0
}

# Trap Ctrl+C
trap cleanup INT

echo -e "${GREEN}🎉 EVERLOOM is starting up!${NC}"
echo -e "${BLUE}Frontend: http://localhost:8082${NC}"
echo -e "${BLUE}Backend API: http://localhost:3001/api${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop all servers${NC}"

# Wait for frontend process
wait $FRONTEND_PID 