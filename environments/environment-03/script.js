"use strict";

const products = [
  {
    name: "Ske",
    price: 50,
    inStock: false,
  },
  {
    name: "Gaffel",
    price: 35,
    inStock: true,
  },
  {
    name: "Kniv",
    price: 50,
    inStock: true,
  },
]

window.addEventListener("load", start)


function start () {
  console.log("running")
  document.querySelector("#select-sort-by").addEventListener("change", sortProducts);
  showProducts()
}

function showProducts () {
  document.querySelector("#form-container").innerHTML = ""
  products.forEach(showProduct)
}

function showProduct (product) {
  document.querySelector("#form-container").insertAdjacentHTML("beforeend", /*HTML*/ `
  <li> ${product.name}, ${product.price}, ${product.inStock}</li>`)
}

function sortProducts () {
  // Get selected option
  let selectedOption = document.querySelector("#select-sort-by").value;

  if (selectedOption === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedOption === "price") {
    products.sort((a, b) => a.price - b.price);
  } else if (selectedOption === "inStock") {
    products.sort((a, b) => b.inStock - a.inStock);
  }
  showProducts();
}








































// const products = [
//   {
//     name: "Peber",
//     price: 99,
//     inStock: false,
//   },
//   {
//     name: "Guld",
//     price: 12,
//     inStock: true,
//   },
// {
//   name: "Salt",
//   price: 55,
//   inStock: false,
// }
// ]

// window.addEventListener("load", start)

// function start () {
//   products.sort((a, b) => (b.inStock - a.inStock));
//   products.forEach(showProducts)
//   console.log("running")

//   document.querySelector("#form-container").addEventListener("submit", addProduct);

  
// }

// function showProducts (product) {
//   document.querySelector("#form-container").insertAdjacentHTML("beforeend", /*HTML*/ `
//   <li> ${product.name}, ${product.price}, ${product.inStock}</li>`)
//    event.target.reset();
// }

// function addProduct (event) {
//   event.preventDefault();
//   event.target.reset();

//   let name = document.querySelector("#product-name").value;
//   let price = document.querySelector("#product-price").value;
//   let inStock = document.querySelector("#product-inStock").checked;

//   products.push({
//     name: name,
//     price: parseInt(price), // convert price to number
//     inStock: inStock

    
//   });
//   };
  

//   function updateProductList() {
//     // Clear existing list
//     document.querySelector("#form-container").innerHTML = "";
    
//     // Show all products
//     products.forEach(showProducts);
//   }