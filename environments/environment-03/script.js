"use strict";

const products = [
  {
    name: "ler",
    price: 1000,
    inStock: true
  },
  {
    name: "sølv",
    price: 2000,
    inStock: true
  },
  {
    name: "guld",
    price: 100,
    inStock: true
  },
]

window.addEventListener("load", start);

function start () {
  showProducts(products)
  document.querySelector("#select-sort-by").addEventListener("change", sortBy)

}

function showProducts(products) {
  document.querySelector("#list-container").innerHTML = "";
  for (const product of products) {
  const html = /*html*/ `
  <p>${product.name}, ${product.price}, ${product.inStock}</p>`;

  document.querySelector("#list-container").insertAdjacentHTML("beforeend", html)
}
}

function sortBy (event) {
  const selectedValue = event.target.value;

  if (selectedValue === "name") {
    products.sort((product1, product2) => product1.name.localeCompare(product2.name))
  } else if (selectedValue === "price") {
    products.sort((product1, product2) => product2.price - product1.price);
    
  } else if (selectedValue === "inStock") {
    products.sort((product1, product2) => product2.inStock - product1.inStock);
  }

    showProducts(products)
  }



  



























// let products = [
//     { name: "Product 1", price: 10, inStock: true },
//     { name: "Product 2", price: 20, inStock: false },
//     { name: "Product 3", price: 5, inStock: true }
//   ];
  
//   // Function to display the product list
//   function showProductList() {
//     const listContainer = document.getElementById("list-container");
//     listContainer.innerHTML = ""; // Clear the container
  
//     products
//       .filter(product => product.inStock) // Filter products that are in stock
//       .forEach(product => {
//         const listItem = document.createElement("div");
//         listItem.classList.add("product-item");
//         listItem.innerHTML = `
//           <h3>${product.name}</h3>
//           <p>Price: ${product.price} DKK</p>
//         `;
//         listContainer.appendChild(listItem);
//       });
//   }
  
//   // Function to add a new product
//   function addProduct(event) {
//     event.preventDefault(); // Prevent form submission
  
//     const nameInput = document.getElementById("product-name");
//     const priceInput = document.getElementById("product-price");
//     const stockInput = document.getElementById("stock");
  
//     const name = nameInput.value;
//     const price = parseFloat(priceInput.value);
//     const inStock = stockInput.checked;
  
//     if (name && price) {
//       const newProduct = { name, price, inStock };
//       products.push(newProduct);
  
//       showProductList();
  
//       nameInput.value = "";
//       priceInput.value = "";
//       stockInput.checked = false;
//     }
//   }
  
//   // Add event listener to the form submission
//   const createForm = document.getElementById("create-form");
//   createForm.addEventListener("submit", addProduct);
  
//   // Display the product list on page load
//   showProductList();