const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

connectDB();

const app = express();

const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Socket.IO
const io = new Server(server, {
cors: {
origin: "http://localhost:5173",
methods: ["GET", "POST", "PUT", "DELETE"]
}
});

app.set("io", io);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
