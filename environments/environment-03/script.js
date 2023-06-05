"use strict";

// 1. Liste med tre product-objekter
const products = [
    {
        name: "Product 1",
        price: 10,
        inStock: true
    },
    {
        name: "Product 2",
        price: 20,
        inStock: false
    },
    {
        name: "Product 3",
        price: 30,
        inStock: true
    }
];

// 2. Funktion der viser listen af produkter, hvor inStock er true
function displayProducts() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";

    const inStockProducts = products.filter(product => product.inStock);

    if (inStockProducts.length > 0) {
        const ul = document.createElement("ul");

        inStockProducts.forEach(product => {
            const li = document.createElement("li");
            li.textContent = `Name: ${product.name}, Price: ${product.price}`;
            ul.appendChild(li);
        });

        listContainer.appendChild(ul);
    } else {
        const message = document.createElement("p");
        message.textContent = "No products in stock.";
        listContainer.appendChild(message);
    }
}

// 3. Funktion der opretter et nyt product-objekt og tilføjer det til listen
function createProduct(event) {
    event.preventDefault();

    const nameInput = document.getElementById("product-name");
    const priceInput = document.getElementById("product-price");
    const inStockCheckbox = document.getElementById("stock");

    const name = nameInput.value;
    const price = parseFloat(priceInput.value);
    const inStock = inStockCheckbox.checked;

    if (name && !isNaN(price)) {
        const newProduct = {
            name,
            price,
            inStock
        };

        products.push(newProduct);
        displayProducts();

        nameInput.value = "";
        priceInput.value = "";
        inStockCheckbox.checked = false;
    }
}

// Event listener for form submission
const createForm = document.getElementById("create-form");
createForm.addEventListener("submit", createProduct);

// Call the function to display the products on page load
displayProducts();
