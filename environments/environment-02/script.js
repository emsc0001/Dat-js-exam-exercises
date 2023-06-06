"use strict";

window.addEventListener("load", start);

function start() {
  console.log("hi");
  document.getElementById("create-form").addEventListener("submit", createAnimal);
}

const animals = [];

function createAnimal(event) {
  event.preventDefault();

  const nameInput = document.getElementById("animal-name").value;
  const typeInput = document.getElementById("animal-type").value;
  const ageInput = document.getElementById("animal-age").value;

  const animal = {
    name: nameInput,
    type: typeInput,
    age: ageInput
  };

  animals.push(animal);
  console.log(animals);
  displayAnimals();
  event.target.reset();
}


function displayAnimals() {
  const animalTableBody = document.querySelector("#list-container tbody");
  animalTableBody.innerHTML = "";

  const sortedAnimals = animals.sort((a, b) => a.name.localeCompare(b.name));

  sortedAnimals.forEach((animal) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.type}</td>
      <td>${animal.age}</td>
    `;
    animalTableBody.appendChild(row);
  });
}
