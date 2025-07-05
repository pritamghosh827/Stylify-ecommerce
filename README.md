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


![firstpage](https://github.com/user-attachments/assets/736addad-be09-4fa0-8897-8f2af4aae833)
![Opera Snapshot_2024-12-12_214230_localhost](https://github.com/user-attachments/assets/9dac92d5-adda-4b2c-bdc8-e91a9312b9de)
![Opera Snapshot_2024-12-12_214323_localhost](https://github.com/user-attachments/assets/e07e513b-d2f8-4d7f-9b37-0e63b0b3f5a1)
![Opera Snapshot_2024-12-12_214424_localhost](https://github.com/user-attachments/assets/64b71521-53d2-4b5a-a8c8-d620454a43c6)
![Opera Snapshot_2024-12-12_214712_localhost](https://github.com/user-attachments/assets/536bdecc-d60c-4ced-8e56-836e87944945)
![Opera Snapshot_2024-12-12_214615_localhost](https://github.com/user-attachments/assets/b88113f2-1a62-4091-a1ae-2a126f202dda)
![Opera Snapshot_2024-12-12_214539_localhost](https://github.com/user-attachments/assets/86bcd999-daed-48df-88b3-ddc61c57e878)
![Opera Snapshot_2024-12-12_214524_localhost](https://github.com/user-attachments/assets/8c5c7ca7-8a3b-46b8-8ade-d13cb3c6af27)
For questions, feedback, or collaboration:

Developer: Priatm Ghosh]
Email: gpritam827@gmail.com
GitHub: github.com/pritamghosh827





