# 🛍️ Full-Stack E-Commerce Platform

This project is a complete full-stack e-commerce web application built using **React.js**, **Node.js**, and **MongoDB**, designed to provide a seamless shopping experience for users and an efficient admin dashboard for store managers.

## 🛠️ Technologies Used
| Layer       | Tech Stack                      |
|-------------|----------------------------------|
| Frontend    | React.js, CSS, Context API       |
| Backend     | Node.js, Express.js, JWT         |
| Database    | MongoDB, Mongoose                |
| Dev Tools   | VS Code, Postman, Git, GitHub    |
| Auth & Security | JWT, bcrypt, .env configs     |

## 🚀 Features
### 🧑‍💻 User Features
- Browse products by categories (Men, Women, Kids, Shoes, Bags)
- View detailed product descriptions
- Add items to cart and manage quantity
- Secure login/signup
- Checkout with secure order handling

### 🛠️ Admin Features
- Add / Update / Delete products
- View customer profiles and order history
- Manage inventory and order statuses

---

## 📐 Architecture

The system follows a **3-layer client-server architecture**:

1. **Frontend Layer** – Built in React.js (UI, routing, state management)
2. **Backend Layer** – Built in Node.js with Express.js (API, Auth, Business Logic)
3. **Database Layer** – MongoDB (NoSQL document store)

---

## 🖥️ Frontend Overview (React)

- **Component-Based Architecture** for scalability
- Responsive UI with modern CSS
- `Context API` for global state (e.g., cart, auth)
- Key Components:
  - `Navbar`, `Footer`, `ProductDisplay`, `CartItems`, `Offers`, `Newsletter`, etc.
- Route-based navigation for Home, Shop, Product, Cart, and Login

---

## 🧠 Backend Overview (Node.js)

- RESTful API using **Express.js**
- Middleware-driven routing
- Secure user authentication using **JWT**
- Password encryption via **bcrypt**
- Organized into:
  - Product APIs
  - Auth APIs
  - Order handling
  - Admin CRUD operations

---

## 🗄️ Database Design (MongoDB)

- **Products Collection** – name, price, description, category, image URL
- **Users Collection** – user credentials, shipping info, order history
- **Orders Collection** – cart items, payment status, timestamps
- **Cart Collection** – cart state saved for logged-in users
- **Admin Collection** – access level, secure credentials

---

## 🛒 Admin Panel

A secure, login-protected dashboard for store managers.

### Key Modules:
- **Product Management**: Add / Edit / Delete
- **Order Management**: View and update order statuses
- **Customer Management**: View users and their orders

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/pritamghosh827/Stylify-ecommerce.git
cd ecommerce-platform


Setup Backend
bash
Copy
Edit
cd Backend
npm install
# Create a .env file
touch .env
# Add:
# PORT=5000
# MONGODB_URL=mongodb://localhost:27017/ecommerce
npm run start


Setup Frontend
bash
Copy
Edit
cd ../Frontend
npm install
npm start



📦 ecommerce-platform
├── 📁 Frontend
│   ├── components/
│   ├── pages/
│   └── App.js, Index.js
├── 📁 Backend
│   ├── Upload/images/
│   ├── index.js
│   └── .env, package.json
├── 📁 Admin
│   ├── Components/
│   ├── Pages/
│   └── App.js, Index.js


![image](https://github.com/user-attachments/assets/d4225fda-9b61-47a1-9d0c-fa5f7e052d77)


Developer: Priatm Ghosh]
Email: gpritam827@gmail.com
GitHub: github.com/pritamghosh827





