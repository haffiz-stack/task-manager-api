const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// Sync DB
sequelize.sync().then(() => console.log("✅ DB Synced"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
