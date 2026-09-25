# Paradise Nursery 🌿

**Paradise Nursery** is a dynamic React + Redux shopping cart web application for an
online plant shop. Users can browse houseplants organized by category, view each
plant's thumbnail, name, and price, add plants to a shopping cart, and manage
cart items — adjusting quantities, removing items, and viewing a live running
total — all built with React, Redux Toolkit, and React-Redux.

## Project Name
Paradise Nursery — Online Plant Shop

## Features
- Landing page with company name, tagline, About Us section, and a "Get Started" button
- Product listing page with plants grouped into multiple categories
- Add to Cart functionality with a dynamically updating cart icon count
- Full shopping cart page: quantity controls, item removal, subtotal and total calculation
- "Checkout" (Coming Soon) and "Continue Shopping" actions

## Tech Stack
- React
- Redux Toolkit
- React-Redux

## Getting Started
```bash
npm install
npm start
```

## Folder Structure
```
src/
  App.jsx          Landing page
  App.css          Global styling incl. landing page background
  AboutUs.jsx       About Us section content
  ProductList.jsx   Product listing page + navbar
  CartItem.jsx      Shopping cart page
  CartSlice.jsx     Redux slice: addItem, removeItem, updateQuantity
  store.js          Redux store configuration
  index.js          App entry point
```
