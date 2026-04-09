# 📚 School Management API

A Node.js + Express + MySQL API to manage schools and fetch them based on proximity.

---

## 🚀 Features

- Add new schools
- Fetch schools sorted by distance
- MySQL database integration
- RESTful APIs

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- Haversine Formula (distance calculation)

---

## 📦 API Endpoints

### ➤ Add School
POST /addSchool

Request Body:
{
  "name": "ABC School",
  "address": "Mumbai",
  "latitude": 19.0760,
  "longitude": 72.8777
}

Response:
{
  "message": "School added successfully",
  "id": 1
}

---

### ➤ List Schools
GET /listSchools?latitude=19.0760&longitude=72.8777

Response:
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Mumbai",
    "latitude": 19.0760,
    "longitude": 72.8777,
    "distance": 0
  }
]

---

## 🗄 Database Schema

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT
);

---

## 🌐 Live API

Base URL:
https://your-app-name.onrender.com

---

## 📮 Postman Collection

https://your-postman-link

---

## ⚙️ Setup Instructions

1. Clone repo
2. Install dependencies:
   npm install

3. Add .env file:
   PORT=5000
   DB_HOST=xxxx
   DB_USER=xxxx
   DB_PASSWORD=xxxx
   DB_NAME=xxxx

4. Run server:
   npm start

---

## 👨‍💻 Author

vaishnavi Dhekare