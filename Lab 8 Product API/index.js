const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

// Function to fetch and display products
function fetchProducts() {
    fetch("https://cynthiaesthermetilda.github.io/Xhrdemo/products.json")
        .then(response => response.json())
        .then(data => {
            // Parse JSON data and generate HTML
            displayProducts(data);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
}

// Function to display products
function displayProducts(products) {
    productList.innerHTML = ""; // Clear existing content

    // Sort products based on the selected option
    const sortBy = sortSelect.value;
    if (sortBy === "price") {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name") {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Filter products based on search input
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    // Create HTML elements for each product
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

// Event listeners for search and sort
searchInput.addEventListener("input", fetchProducts);
sortSelect.addEventListener("change", fetchProducts);

// Initial fetch and display
fetchProducts();