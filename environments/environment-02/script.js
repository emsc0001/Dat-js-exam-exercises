"use strict";

// window.addEventListener("load", start)

// let animals = [];

// function start () {
//   console.log("running")
//   document.querySelector("button").addEventListener("click", addAnimal)
// }

// function addAnimal (event) {
//   event.preventDefault()

//   const name = document.querySelector("#animal-name").value
//   const type = document.querySelector("#animal-type").value
//   const age = document.querySelector("#animal-age").value

//   const newAnimal = {
//     name: name,
//     type: type,
//     age: age,
  
//   }
//   document.querySelector("#list-container").innerHTML = ""

//   animals.push(newAnimal)
//   animals.forEach(showAnimals)
// }

// function showAnimals (animal) {
//   animals.sort((a, b) => a.age - b.age)
//   document.querySelector("#list-container").insertAdjacentHTML("beforeend", /*HTML*/ `
//   <li>${animal.name} - ${animal.type} - ${animal.age}</li>`)
// }







// const animals = [
//   { 
//     name: "gris",
//     type: "pattedyr",
//     age: "99"
//   },
//   {
//     name: "augl",
//     type: "pattedyr",
//     age: "5"
//   },
//   {
//     name: "myre",
//     type: "insekt",
//     age: "42"
//   }
// ];

// window.addEventListener("load", start)

// function start () {
//   console.log("siden virker")
//   sortByAge();
//   showAnimals();
// }

// function showAnimals () {
//   document.querySelector("#list-container").innerHTML = ""
//   for (const animal of animals ) {
//     const html = `<li>${animal.name}, ${animal.type}, ${animal.age}</li>`;
//     document.querySelector("#list-container"). insertAdjacentHTML("beforeend", html)
//   }
// }

// // __________________________ 2___________________________________//

// function sortByAge() {
//   animals.sort((a, b) => parseInt(a.age) - parseInt(b.age));
// }


// window.addEventListener("load", start);

// function start() {
//   console.log("Page loaded");
//   document.getElementById("create-form").addEventListener("submit", createAnimal);
// }

// const animals = [];

// function createAnimal(event) {
//   event.preventDefault();

//   const name = document.getElementById("animal-name").value;
//   const type = document.getElementById("animal-type").value;
//   const age = document.getElementById("animal-age").value;

//   const animal = {
//     name: name,
//     type: type,
//     age: age
//   };

//   animals.push(animal);
//   resetForm();
//   displayAnimals();
// }

// function resetForm() {
//   document.getElementById("create-form").reset();
// }

// function displayAnimals() {
//   const sortedAnimals = animals.sort((a, b) => a.name.localeCompare(b.name));

//   const tableBody = document.querySelector("#list-container tbody");
//   tableBody.innerHTML = "";

//   for (const animal of sortedAnimals) {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${animal.name}</td>
//       <td>${animal.type}</td>
//       <td>${animal.age}</td>
//     `;
//     tableBody.appendChild(row);
//   }
// }
