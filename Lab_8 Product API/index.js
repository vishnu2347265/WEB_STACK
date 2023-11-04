const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

function fetchProducts() {
    fetch("https://cynthiaesthermetilda.github.io/Xhrdemo/products.json")
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
}

function displayProducts(products) {
    productList.innerHTML = "";

    const sortBy = sortSelect.value;
    if (sortBy === "price") {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name") {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }

    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);
    });
}

searchInput.addEventListener("input", fetchProducts);
sortSelect.addEventListener("change", fetchProducts);

fetchProducts();