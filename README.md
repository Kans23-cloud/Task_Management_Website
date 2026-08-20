# 🚀 Task Management Website

A full-stack Task Management Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This application allows users to securely manage their daily tasks with authentication, authorization, CRUD operations, and real-time updates using Socket.IO.

---

## 📌 Features

### 🔐 Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Logout

### 📋 Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Track Task Status
* Set Task Priority

### ⚡ Real-Time Updates

* Socket.IO Integration
* Instant Task Updates Across Connected Clients

### 📱 Responsive Design

* Mobile-Friendly Interface
* Clean Dashboard Layout
* Modern Card-Based UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Socket.IO Client
* CSS3

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

---

## 📂 Project Structure

```text
Task_Management_Website
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Kans23-cloud/Task_Management_Website.git
```

```bash
cd Task_Management_Website
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start Backend:

```bash
npx nodemon server.js
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Backend runs on:

```text
http://localhost:5000
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Tasks

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get All Tasks |
| POST   | /api/tasks     | Create Task   |
| PUT    | /api/tasks/:id | Update Task   |
| DELETE | /api/tasks/:id | Delete Task   |

---

## 📸 Screenshots

### Login Page

<img width="1005" height="595" alt="image" src="https://github.com/user-attachments/assets/8f847561-5047-4786-9594-3770462f2e48" />


### Register Page

<img width="1000" height="594" alt="image" src="https://github.com/user-attachments/assets/e2aa83e6-c007-4b3c-b6ee-d8676d0aebf0" />


### Dashboard

<img width="1005" height="590" alt="image" src="https://github.com/user-attachments/assets/3f89f849-3f94-429b-b456-3de54bc2d403" />
<img width="1005" height="257" alt="image" src="https://github.com/user-attachments/assets/71ca6dc3-1233-4995-8c80-60228a9b9c9a" />



---

## 👨‍💻 Author

**Kanthasamy K N**

GitHub: https://github.com/Kans23-cloud
