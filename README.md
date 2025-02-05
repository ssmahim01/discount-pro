<div align="center">
  <img width="100%" height="340" src="https://github.com/ssmahim01/discount-pro/blob/main/public/discount-pro-bg.png"  />
</div>

# 🛍️ Discount PRO

**A platform to discover brand discounts and easily apply coupon codes.**

---

## 🎯 Purpose

The main goal of **Discount PRO** is to help users discover discounts from various brands. Many brand shops offer coupon codes for exclusive discounts, and our platform aggregates these coupons in one place.  

**Key Benefits:**
- Users can **browse brands by category**.
- Users can **copy and use coupon codes** easily.
- Only logged-in users can **view detailed brand information**.

---

## 🛠️ Used Main Technologies

| Category        | Technologies |
|----------------|-------------|
| **Frontend**   | React, Tailwind CSS |
| **Backend**    | Firebase (Authentication, Hosting) |
| **Routing**    | React Router |
| **UI Components** | React Icons, React Fast Marquee, Animate.css |

---

## 🚀 Core Features

### ✅ User Authentication
- **Register & Login** with email and password.
- **Google Authentication** for quick access.

### ✅ Collect Coupons
- View **active discounts** on the homepage.
- **Stores with no discounts** are also displayed separately.
- **Logged-in users** can view brand details and copy coupon codes with a single click.

### ✅ User Profile
- Displays **User Photo, Name, and Email**.
- **Firebase Authentication** manages user sessions.
- Users can **update profile details** and reset passwords.

---

## 📦 Used Dependencies

```json
"dependencies": {
  "animate.css": "^4.1.1",
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-copy-to-clipboard": "^5.1.0",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-icons": "^5.3.0",
  "react-rating-stars-component": "^2.2.0",
  "react-router-dom": "^6.28.0",
  "react-toastify": "^10.0.6",
  "sort-by": "^1.2.0",
  "swiper": "^11.1.15"
}
```

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ssmahim01/discount-pro.git
cd discount-pro
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory and add the secret keys with URLs. 

---

## 🏃 Project Run Locally

To start the project locally, run:

```sh
npm run dev
```

🔹 This will start the development server, and you can access it at:  
📌 **`http://localhost:5173`**  

---

## 🌍 Live Demo

🔗 **[Discount PRO - Live Site](https://discount-pro-market.web.app/)**  

---

## 📦 Used NPM Packages

| Package | Description | Link |
|---------|------------|------|
| **React Fast Marquee** | Smooth scrolling marquee effect | [🔗 npm](https://www.npmjs.com/package/react-fast-marquee) |
| **React Toastify** | Notifications for user feedback | [🔗 npm](https://www.npmjs.com/package/react-toastify) |
| **React Icons** | A collection of customizable icons | [🔗 React Icons](https://react-icons.github.io/react-icons/) |
| **React Rating Stars** | Star rating component | [🔗 npm](https://www.npmjs.com/package/react-rating-stars-component) |
| **Animate.css** | CSS animations library | [🔗 Animate.css](https://animate.style/) |
| **React Copy To Clipboard** | Allows users to copy text with one click | [🔗 npm](https://www.npmjs.com/package/react-copy-to-clipboard) |
| **Swiper JS** | Modern slider component | [🔗 SwiperJS](https://swiperjs.com/) |

---

## ⚙️ Setup

This template provides a minimal setup to get **React** working with **Vite** along with **ESLint rules**.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.
