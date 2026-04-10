const loading = document.getElementById("loading");
const productList = document.getElementById("product-list");

const loginLink = document.getElementById("login-link");
const logoutBtn = document.getElementById("logout-btn");

const isLoggedIn = localStorage.getItem("isLoggedIn");
const user = JSON.parse(localStorage.getItem("user"));

/* ================= NAVBAR ================= */

// Show username
if (user && isLoggedIn === "true") {
    loginLink.innerHTML = `Hi, ${user.username}`;
}

// Show/hide login/logout
if (isLoggedIn === "true") {
    loginLink.style.display = "none";
    logoutBtn.style.display = "inline-block";
} else {
    loginLink.style.display = "inline-block";
    logoutBtn.style.display = "none";
}

// Logout
logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/Task 6(form validation)/pages/login.html";
});

/* ================= PRODUCTS ================= */

async function fetchProducts() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        const allProducts = data.products.map(p => ({
            id: p.id,
            title: p.title,
            price: p.price,
            image: p.thumbnail
        }));

        // 🔐 Limit products if not logged in
        const visibleProducts =
            isLoggedIn === "true"
                ? allProducts
                : allProducts.slice(0, 4);

        displayProducts(visibleProducts);

        // Show login message
        if (isLoggedIn !== "true") {
            const msg = document.createElement("p");
            msg.innerHTML = `
                🔒 Login to view more products 
                <a href="/Task 6(form validation)/pages/login.html">Login</a>
            `;
            productList.appendChild(msg);
        }

        loading.style.display = "none";

    } catch (error) {
        productList.innerHTML = "<p>Error loading products</p>";
    }
}

function displayProducts(products) {
    productList.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" style="width:150px; height:150px; object-fit:contain;">
            <h3>${product.title.substring(0, 20)}...</h3>
            <p>₹${Math.round(product.price * 80)}</p>
            <button ${isLoggedIn !== "true" ? "disabled" : ""}>
                ${isLoggedIn !== "true" ? "Login to Buy" : "Add To Cart"}
            </button>
        `;

        productList.appendChild(card);
    });
}

/* ================= RUN ================= */

fetchProducts();