"use strict";

// _________________________________________ Øvelse 3 _____________________________________ //

window.addEventListener("load", start)

const animals = []

function start () {
  console.log("running");
  document.querySelector("#create-form").addEventListener("submit", addAnimal);
}

function addAnimal (event) {
  event.preventDefault();

  const name = document.querySelector("#animal-name").value
  const type = document.querySelector("#animal-type").value
  const age = document.querySelector("#animal-age").value

  document.querySelector("#animal-list").innerHTML = ""

  const newAnimal = {
    name: name,
    type: type,
    age: age,
  }

  animals.push(newAnimal)
  console.log(newAnimal)
  animals.forEach(showAnimals)
}

function showAnimals (animal) {
  console.log("hi")
  document.querySelector("#animal-list").insertAdjacentHTML("beforeend", /*html*/ `
  <li>${animal.name}${animal.type}, ${animal.age} </li>`)
  animals.sort((a, b) => a.name.localeCompare(b.name))
}









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
