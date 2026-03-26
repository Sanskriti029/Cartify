const productList = document.getElementById("product-list");
const loading = document.getElementById("loading");

// Fetch both APIs
async function fetchProducts() {
    try {
        const [dummyRes, fakeRes] = await Promise.all([
            fetch("https://dummyjson.com/products"),
            fetch("https://fakestoreapi.com/products")
        ]);

        const dummyData = await dummyRes.json();
        const fakeData = await fakeRes.json();

        // Normalize both APIs
        const dummyProducts = dummyData.products.map(p => ({
            id: "d-" + p.id,
            title: p.title,
            price: p.price,
            image: p.thumbnail,
            rating: p.rating
        }));

        const fakeProducts = fakeData.map(p => ({
            id: "f-" + p.id,
            title: p.title,
            price: p.price,
            image: p.image,
            rating: p.rating
        }));

        // Merge both
        const allProducts = [...dummyProducts, ...fakeProducts];

        displayProducts(allProducts);
        loading.style.display = "none";

    } catch (error) {
        productList.innerHTML = "<p>Error loading products</p>";
    }
}

// Display products
function displayProducts(products) {
    productList.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" style="width:150px; height:150px; object-fit:contain;">
            <h3>${product.title.substring(0, 20)}...</h3>
            <p>₹${Math.round(product.price * 80)}</p>
            <button>Add To Cart</button>
        `;

        productList.appendChild(card);
    });
}

// Run
fetchProducts();