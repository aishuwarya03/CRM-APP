# 📞 Role-Based CRM Application

A full-stack CRM app built with **React**, **Node.js**, and **MongoDB** that supports **JWT authentication**, **role-based access control**, and **lead management** for telecallers and admins.

---

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based secure login & logout
- Role-based access control for `admin` and `telecaller`

### 👤 Roles

- **Admin**
  - View dashboard metrics
  - Track telecaller activity
  - View connected call records

- **Telecaller**
  - Add / Edit / Delete leads
  - Update call status (Connected / Not Connected)
  - Add call responses based on status

### 📊 Dashboard Metrics (Admin)
- Total telecallers
- Total calls made
- Total customers contacted
- Call trends (Chart)
- Connected call logs

---

## 🏗️ Tech Stack

| Layer        | Tech                         |
|--------------|------------------------------|
| Frontend     | React, Vite, Tailwind CSS, Context API |
| Backend      | Node.js, Express             |
| Auth         | JWT                          |
| Database     | MongoDB (Mongoose)           |
| Deployment   | Vercel (frontend), Render (backend) |

---

## 🛠️ Local Setup Instructions

### Prerequisites

- Node.js & npm
- MongoDB URI (e.g., from MongoDB Atlas)

---
