const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route FIRST (for testing)
app.get("/", (req, res) => {
  res.send("API WORKING ✅");
});

const schoolRoutes = require("./routes/schoolRoutes");

// ❗ TEMPORARY (you can remove after submission)
const db = require("./config/db");

db.query(`
CREATE TABLE IF NOT EXISTS schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
)
`, (err) => {
  if (err) console.log("❌ Table Error:", err);
  else console.log("✅ Table created");
});

// ✅ Routes
app.use("/", schoolRoutes);

const PORT = process.env.PORT || 5000;

// 🔥 VERY IMPORTANT FIX
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT} 🚀`);
});