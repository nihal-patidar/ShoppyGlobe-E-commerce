# 🛍️ ShoppyGlobe

A modern e-commerce web application built with React, Vite, Redux Toolkit, React Router, and Tailwind CSS.

ShoppyGlobe allows users to browse products, search items, view detailed product information, manage a shopping cart, and complete a simulated checkout experience with a responsive and modern UI.

---

## ✨ Features

- Browse products from API
- Search products by name or description
- View detailed product information
- Product image gallery
- Add products to cart
- Increase and decrease quantity
- Remove items from cart
- Dynamic order summary
- Checkout flow with order processing animation
- Responsive design for mobile, tablet, and desktop
- Lazy loaded routes for improved performance
- Error handling and loading states
- Modern UI using Tailwind CSS

---

## 🔗 Repository

GitHub Repository:

https://github.com/nihal-patidar/ShoppyGlobe-E-commerce

---

## 🚀 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/nihal-patidar/ShoppyGlobe-E-commerce.git
```

### Navigate to Project

```bash
cd ShoppyGlobe-E-commerce
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application will be available at:

```txt
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```txt
src/
│
├── app/
│   └── store.js
│
├── redux/
│   ├── cartSlice.js
│   └── searchSlice.js
│
├── hooks/
│   └── useProducts.js
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── ProductDetail.jsx
│   ├── NotFound.jsx
│   └── RouteError.jsx
│
├── components/
│   ├── Layout.jsx
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── CartItem.jsx
│   ├── Loader.jsx
│   ├── PageLoader.jsx
│   ├── EmptyCart.jsx
│   ├── NoProductsFound.jsx
│   ├── OrderProcessing.jsx
│   └── ErrorMessage.jsx
│
├── routes/
│   └── Router.jsx
│
├── utils/
│   └── toaster.js
│
└── styles/
```

---

## 🛣️ Application Routes

| Route | Description |
|---------|-------------|
| `/` | Home Page |
| `/product/:id` | Product Details Page |
| `/cart` | Shopping Cart |
| `/checkout` | Checkout Page |
| `*` | Not Found Page |

---

## ⚡ Route Optimization

The application uses:

- React Lazy Loading
- Suspense
- Route-Based Code Splitting

Example:

```jsx
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
```

This improves initial load performance by loading pages only when required.

---

## 🛒 Redux Store Structure

```js
{
  cart: {
    items: []
  },

  search: {
    item: ""
  }
}
```

---

## 🎨 Tech Stack

- React
- Vite
- React Router DOM
- Redux Toolkit
- React Redux
- Tailwind CSS
- React Toastify

---

## 👨‍💻 Author

**Nihal Patidar**

GitHub Profile:

https://github.com/nihal-patidar

Project Repository:

https://github.com/nihal-patidar/ShoppyGlobe-E-commerce

---