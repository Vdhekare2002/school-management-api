const db = require("../config/db");
const getDistance = require("../utils/distance");

// ✅ Add School
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validation
  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return res.status(400).json({ message: "Invalid coordinates" });
  }

  const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: "School added successfully", id: result.insertId });
  });
};

// ✅ List Schools Sorted by Distance
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: "Latitude and Longitude required" });
  }

  const userLat = parseFloat(latitude);
  const userLon = parseFloat(longitude);

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    const sortedSchools = results.map((school) => {
      const distance = getDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    }).sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};



// Add School API
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  db.query(
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.json({
        message: "Data inserted",
        id: result.insertId
      });
    }
  );
};