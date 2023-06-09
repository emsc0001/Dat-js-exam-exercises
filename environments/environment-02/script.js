"use strict";

window.addEventListener("load", start);

function start() {
  console.log("Page loaded");
  document.getElementById("create-form").addEventListener("submit", createAnimal);
}

const animals = [];

function createAnimal(event) {
  event.preventDefault();

  const name = document.getElementById("animal-name").value;
  const type = document.getElementById("animal-type").value;
  const age = document.getElementById("animal-age").value;

  const animal = {
    name: name,
    type: type,
    age: age
  };

  animals.push(animal);
  resetForm();
  displayAnimals();
}

function resetForm() {
  document.getElementById("create-form").reset();
}

function displayAnimals() {
  const sortedAnimals = animals.sort((a, b) => a.name.localeCompare(b.name));

  const tableBody = document.querySelector("#list-container tbody");
  tableBody.innerHTML = "";

  for (const animal of sortedAnimals) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.type}</td>
      <td>${animal.age}</td>
    `;
    tableBody.appendChild(row);
  }
}
