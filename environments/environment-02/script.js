"use strict";


const animals = [
  {
    name: "Leo",
    type: "Lion",
    age: 5,
  },
  {
    name: "Max",
    type: "Dog",
    age: 3,
  },
  {
    name: "Whiskers",
    type: "Cat",
    age: 2,
  },
];

function displayAnimals() {
  const animalTableBody = document.querySelector("#list-container tbody");
  animalTableBody.innerHTML = "";

  // Sort animals by age
  const sortedAnimals = animals.sort((a, b) => a.age - b.age);

  sortedAnimals.forEach((animal) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const ageCell = document.createElement("td");

    nameCell.textContent = animal.name;
    typeCell.textContent = animal.type;
    ageCell.textContent = animal.age;

    row.appendChild(nameCell);
    row.appendChild(typeCell);
    row.appendChild(ageCell);
    animalTableBody.appendChild(row);
  });
}

function createAnimal(event) {
  event.preventDefault();

  const nameInput = document.getElementById("animal-name");
  const typeInput = document.getElementById("animal-type");
  const ageInput = document.getElementById("animal-age");

  const name = nameInput.value;
  const type = typeInput.value;
  const age = parseInt(ageInput.value);

  if (name && type && !isNaN(age)) {
    const newAnimal = {
      name,
      type,
      age,
    };

    animals.push(newAnimal);
    displayAnimals();

    nameInput.value = "";
    typeInput.selectedIndex = 0;
    ageInput.value = "";
  }
}

const createForm = document.getElementById("create-form");
createForm.addEventListener("submit", createAnimal);

// Call the function to display the animals on page load
displayAnimals();

// window.addEventListener("load", start);

// function start () {
//     console.log("hi");    
//     document.querySelector("#create-form").addEventListener("submit, submitForm");
// }



// function submitForm (event) {
//     event.prevetdefault();    

//     const form = event.target;
//     const name = form.name.value;
//     const age = form.age.value;
//     const type = form.type.value;
//     showAnimals (name, age, type);
// }

// function showAnimals (animals) {
//     document.querySelector("students-table-body").innerHTML = "";    
//     students.sort ((a, b) => a.name.localeCompare (b.name));
//     students.filter((animals) => animals.age <= 18).forEach(showAnimal)


// }

// function showAnimal (animal) {
//     document.querySelector("students-table-body").insertAdjacentHTML    
//     ("beforeend",
//     `<tr>
//     <th>${Name}</th>
//     <th>${Type}</th>
//     <th>${Age}</th>
//     </tr>`);
// }


