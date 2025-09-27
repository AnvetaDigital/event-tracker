# Mini Event Tracker 🎉

A full-stack web application where users can sign up, log in, and manage personal events with filters for upcoming and past events.
---

## 🚀 Tech Stack

- **Backend**: Node.js (Express), MongoDB, JWT Auth  
  - ✅ Chosen for rapid prototyping & schema flexibility  
- **Frontend**: React (Vite), fetch, React Router  
  - ✅ Lightweight, fast development & responsive UI  
- **Database**: MongoDB (NoSQL)  
  - ✅ Simple JSON-like docs for quick iteration  

---

## 📂 Project Structure
event-tracker/
├── backend/ # Express API (auth + events)
│ └── src/
│ ├── config/ # DB connection
│ ├── models/ # Mongoose schemas
│ ├── controllers/ # Business logic
│ ├── routes/ # API routes
│ ├── middlewares/ # Auth check
│ └── server.js
│
└── frontend/ # React frontend
└── src/
├── components/ # Login, Signup, Dashboard, EventForm, EventList
├── App.jsx
└── main.jsx
└── index.css
---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-AnvetaDigital/event-tracker.git
cd event-tracker

2️⃣ Backend Setup
cd backend
npm install

Create .env file in /backend with the following:
# Server Port
PORT=5000

# MongoDB connection string (replace with your own cluster or local URI)
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/event-tracker

# JWT secret key (replace with a strong random string)
JWT_SECRET=your_jwt_secret_key

Run backend:
npm start


3️⃣ Frontend Setup
cd ../frontend
npm install

Run frontend:
npm run dev

🛠 Features
🔑 JWT Authentication (Signup/Login)
📝 Create, view, and filter events (upcoming/past)
📱 Responsive layout (mobile + desktop)
🔗 Bonus: Public shareable event link (optional)

🔒 Security Notes
Passwords hashed with bcrypt
JWT-based auth with expiry
Basic validation & error handling

📌 Trade-offs & Assumptions
No email verification (to save time)
Basic UI for simplicity
Public event links are unprotected URLs

