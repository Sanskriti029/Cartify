# Cartify
### 🛒 E-Commerce Web App (DummyJSON)

A simple and responsive eCommerce web application built using **HTML, CSS, JavaScript and Bootstrap**, integrating products from multiple APIs. This project demonstrates product listing, filtering, cart management, wishlist, and checkout functionality.

---

## 🚀 Features

### 🛍️ Product Listing

* Fetches products from:

  * DummyJSON API
* Combines and displays products in a unified UI

### 🔍 Search & Filters

* Search products by title
* Filter by:
  * Price range
  * Category

### 🛒 Cart System

* Add to cart
* Increase/decrease quantity
* Remove items
* Auto-save cart using `localStorage`

### ❤️ Wishlist

* Add products to wishlist
* Stored in `localStorage`
* Prevents duplicate entries

### 💳 Checkout

* Simple checkout form
* Displays total price
* Clears cart after order placement

### 🔔 Toast Notifications

* Shows success messages for:

  * Add to cart
  * Add to wishlist
  * Order placed
### 🔔 Authentication

  * User login and registration
  * Form validation for:
     - Email format validation
     - Password strength requirements
     - Required field validation


---

## 🧠 Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* REST APIs
* BootStrap

---

## 📦 APIs Used

### 1. DummyJSON

* Products with thumbnails, categories, and pricing
---

## 🔧 How It Works

1. Fetch data from both APIs using `Promise.all()`
2. Normalize product structure:
   * id
   * title
   * price
   * image
   * category
3. Merge both datasets
4. Store in a global `allProducts` array
5. Apply filters dynamically
6. Manage cart & wishlist using `localStorage`

---

## 🛠️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Sanskriti029/Cartify.git
```

2. Open project folder:

```bash
cd Cartify
```

3. Run the project:

* Open `index.html` in browser

---

## 📁 Project Structure

```
/project
│──pages
│    │──index.html
│    │── cart.html
│    │── shop.html
│    │── wishlist.html
│    │── login.html
│    │── register.html
│    │── wishlist.html
│── css
│    │── styles.css
│    │── cart.css
│    │── wishlist.css
│    │── login.css
│ 
│── script
│   │── script.js
│ 
│── uploads

```

---

## ⚠️ Known Limitations

* No backend (frontend-only project)
* No real payment gateway
* API data may vary
* Category mismatch between APIs

---

## 🚀 Future Improvements
* 💳 Payment integration (Stripe/Razorpay)
* 📦 Order history page
* 🔄 Pagination / infinite scroll
* ⚛️ Convert to React.js
* 🎨 Improve UI (Amazon/Flipkart style)

---

## 🙌 Acknowledgements

* DummyJSON API

---

## 📜 License

This project is open-source and free to use for learning purposes.

---

## 👨‍💻 Author

Developed as a practice project to learn:

* API integration
* DOM manipulation
* State management using localStorage

---

⭐ If you like this project, give it a star!
