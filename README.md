# ⌚ WristDigital - Smartwatch E-commerce Platform

**WristDigital** is a modern e-commerce platform specializing in premium smartwatches and accessories. Built on the **MERN Stack**, the project focuses on high-end design, seamless user experience, and a robust administrative system.

---

## 🚀 Key Features

### 🛍️ Client-Side (User Experience)
- **Comprehensive Auth System:** Secure registration, login with JWT, password recovery, and reset functionality.
- **Smart Catalog Browsing:** 
  - Advanced filtering by brand, category, and price range.
  - Flexible search and sorting options.
  - Smooth pagination for product listings.
- **Product Detail Interface:** 
  - Detailed technical specifications (OS, battery life, screen type, water resistance, etc.).
  - Multi-angle image gallery.
  - Related product recommendations.
- **Shopping Cart & Checkout:** 
  - Real-time cart management.
  - Coupon code integration for discounts.
  - Optimized multi-step or single-page checkout flow.
- **User Dashboard:** 
  - Profile and shipping address management.
  - Order history tracking with real-time status updates.
  - Personal Wishlist management.
- **Engagement & Community:** 
  - Product reviews with image uploads.
  - Technology blog with comment sections.

### 🔐 Admin Panel (Management)
- **Dashboard Overview:** Real-time analytics for revenue, orders, and user growth.
- **Catalog Management:** Full CRUD operations for Products, Categories, and Brands.
- **Order Fulfillment:** Comprehensive order tracking from processing to delivery or cancellation.
- **User Administration:** Role management (Admin/User) and account moderation (activate/suspend).
- **Marketing Suite:** 
  - Dynamic Coupon management.
  - Flash Sale and promotional campaign setup.
- **Content Management System (CMS):** Blog post management, comment moderation, and review oversight.

---

## 💻 Tech Stack

### Frontend
- **React 19:** Modern UI library for high performance.
- **Vite:** Next-generation frontend build tool.
- **Tailwind CSS:** Utility-first CSS framework for premium and responsive UI.
- **React Router 7:** Robust routing for Single Page Applications (SPA).
- **Lucide React:** Beautiful and consistent vector icons.

### Backend
- **Node.js & Express:** Scalable server-side runtime and framework.
- **MongoDB & Mongoose:** NoSQL database with flexible Schema design.
- **JWT (JSON Web Token):** Secure stateless authentication.
- **Zod:** Strict schema validation for API requests.
- **Cloudinary:** Cloud-based image management and optimization.
- **Swagger:** Professional API documentation and testing interface.

### Security
- **Helmet JS:** Critical protection for HTTP headers.
- **Rate Limiting:** Defense against Brute-force and DDoS attacks.
- **XSS-Clean & Mongo Sanitize:** Prevention of script injection and NoSQL injection.
- **Bcryptjs:** High-security password hashing.

---

## 📁 Project Structure

```text
WristDigital/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main application views
│   │   ├── assets/         # Static resources (images, icons)
│   │   ├── Layout.jsx      # Core layout wrapper
│   │   └── main.jsx        # React entry point
├── server/                 # Node.js Backend
│   ├── config/             # Database and Cloudinary configuration
│   ├── controllers/        # API request handling (Admin/User separation)
│   ├── models/             # Mongoose Schema definitions
│   ├── routes/             # API endpoint declarations
│   ├── services/           # Complex business logic
│   ├── middlewares/        # Auth, Validation, and Error handling
│   └── utils/              # Helper utilities (JWT, file uploaders)
```

---

## 🛠️ Installation Guide

### Prerequisites
- **Node.js**: Version 18.x or higher.
- **MongoDB**: Local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Cloudinary Account**: For media management.

### 1. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server/` root directory and add the following configurations:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```
Run in development mode:
```bash
npm run dev
```

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```
The application will be available at: `http://localhost:5173`

---

## 📑 API Documentation
The system integrates Swagger UI for easy API exploration and testing.
Once the server is running, visit:
`http://localhost:5000/api-docs`

---

## 🤝 Contact & Contribution
- **Project:** WristDigital Smartwatch Store
- **Created By:** Antigravity AI Assistant & Developer

---
⭐ *If you find this project helpful, please give us a Star on GitHub!*
