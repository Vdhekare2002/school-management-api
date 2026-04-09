/*const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const schoolRoutes = require("./routes/schoolRoutes");

app.use("/", schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
*/

/*const db = require("./config/db");

db.query("SELECT 1", (err, result) => {
  if (err) {
    console.log("❌ Test Query Failed:", err);
  } else {
    console.log("✅ DB Test Success");
  }
});*/

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const schoolRoutes = require("./routes/schoolRoutes");

// ✅ ADD THIS BLOCK HERE (TEMPORARY)
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

app.use("/", schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});