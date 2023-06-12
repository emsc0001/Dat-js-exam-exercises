"use strict";

const products = [
  {
    name: "Computer",
    price: 100,
    inStock: true,
  },
  {
    name: "Glas",
    price: 10,
    inStock: false,
  },
  {
    name: "Ske",
    price: 2,
    inStock: true,
  },
]

window.addEventListener("load", start)

function start () {
  console.log(products)
  document.querySelector("#create-form").addEventListener("click", addProduct)
  products.forEach(showProducts)
}


function addProduct (event) {
  event.preventDefault()
  
  const name = document.querySelector("#product-name").value
  const price = document.querySelector("#product-price").value
  const inStock = document.querySelector("#product-inStock").value
  
  const newProduct = {
    name: name,
    price: price,
    inStock: inStock,
  }
  products.push(newProduct)
  showProducts(newProduct)
};




function showProducts (product) {
  document.querySelector("#form-container").insertAdjacentHTML("beforeend", /*HTML*/ `
  <li> ${product.name}, ${product.price}, ${product.inStock}</li>`)
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