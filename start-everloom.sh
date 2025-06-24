#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🚀 Starting EVERLOOM - Production Ready"
echo "========================================"
echo "📁 Project directory: $SCRIPT_DIR"

# Kill any existing processes on these ports
echo "📋 Cleaning up existing processes..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
lsof -ti:8081 | xargs kill -9 2>/dev/null || true
lsof -ti:8080 | xargs kill -9 2>/dev/null || true

# Start backend
echo "🔧 Starting backend server..."
cd "$SCRIPT_DIR/backend" && node server.js &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend  
echo "🌐 Starting frontend server..."
cd "$SCRIPT_DIR" && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ EVERLOOM is starting up!"
echo "🔧 Backend: http://localhost:3001"
echo "🌐 Frontend: http://localhost:8081"
echo ""
echo "Press Ctrl+C to stop all servers"

# Handle cleanup on script termination
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    kill $BACKEND_PID 2>/dev/null || true
    kill $FRONTEND_PID 2>/dev/null || true
    exit 0
}

trap cleanup SIGINT SIGTERM

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID 