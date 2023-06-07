"use strict";

let products = [
    { name: "Product 1", price: 10.99, inStock: true },
    { name: "Product 2", price: 19.99, inStock: false },
    { name: "Product 3", price: 7.99, inStock: true }
  ];
  
  // Function to display the product list
  function showProductList() {
    const listContainer = document.getElementById("list-container");
    listContainer.innerHTML = ""; // Clear the container
  
    products
      .filter(product => product.inStock) // Filter products that are in stock
      .forEach(product => {
        const listItem = document.createElement("div");
        listItem.classList.add("product-item");
        listItem.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: ${product.price} DKK</p>
        `;
        listContainer.appendChild(listItem);
      });
  }
  
  // Function to add a new product
  function addProduct(event) {
    event.preventDefault(); // Prevent form submission
  
    const nameInput = document.getElementById("product-name");
    const priceInput = document.getElementById("product-price");
    const stockInput = document.getElementById("stock");
  
    const name = nameInput.value;
    const price = parseFloat(priceInput.value);
    const inStock = stockInput.checked;
  
    if (name && price) {
      const newProduct = { name, price, inStock };
      products.push(newProduct);
  
      showProductList();
  
      nameInput.value = "";
      priceInput.value = "";
      stockInput.checked = false;
    }
  }
  
  // Add event listener to the form submission
  const createForm = document.getElementById("create-form");
  createForm.addEventListener("submit", addProduct);
  
  // Display the product list on page load
  showProductList();