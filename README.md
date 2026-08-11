# 🥦 FreshCart - A Full-Stack MERN E-Commerce Application

FreshCart is a modern, responsive e-commerce web application built from the ground up, designed to simulate a real-world online grocery store. Developed with the **MERN stack** (MongoDB, Express.js, React, Node.js), it provides a complete user journey from browsing products to creating an account and managing a shopping cart.

![FreshCart Screenshot](client/public/images/screenshot.png) 

---

### Features

-   **Full-Stack Architecture:** Clean separation between the React frontend and the Node.js/Express backend API.
-   **RESTful API:** A robust backend API for handling product data and user authentication.
-   **Secure User Authentication:** Users can register and log in securely. Passwords are hashed using **bcrypt.js** and sessions are managed using **JSON Web Tokens (JWT)**.
-   **Product Browsing & Search:** A dynamic grid of products fetched from the database, with a real-time search filter.
-   **Dynamic Shopping Cart:** A global cart state managed with **React's Context API** provides a seamless user experience.
-   **Protected Routes:** A User Profile page that is only accessible to logged-in users.
-   **Mock Checkout Flow:** A simulated checkout process that demonstrates the full user journey from cart to order confirmation.
-   **Responsive Design:** A clean and modern UI that is functional and visually appealing on both desktop and mobile devices.

---

### Technology Stack

-   **Frontend:** React, React Router, Axios, CSS3
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB with Mongoose
-   **Authentication:** JSON Web Tokens (JWT), bcrypt.js

---

### Getting Started

**Prerequisites:**
* Node.js v18.x or later
* MongoDB installed and running locally.

**1. Clone the Repository**
git clone [https://github.com/Srushti707/FreshCart.git](https://github.com/Srushti707/FreshCart.git)
cd freshcart

**2. Backend Setup**
 Navigate to the server directory
cd server

**Install dependencies**
npm install

**Create a .env file in the /server root with the following content:**
 MONGO_URI=your_mongodb_connection_string (e.g., mongodb://localhost:27017/freshcart)
 JWT_SECRET=a_long_random_secret_string

**Run the server**
npm run dev

The backend will be running on http://localhost:5000.

**3. Frontend Setup**
**Open a new terminal and navigate to the client directory**
cd client

**Install dependencies**
npm install

**Run the React application**
npm start
The frontend will be running on http://localhost:3000.
