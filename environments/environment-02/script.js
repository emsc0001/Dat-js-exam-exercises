"use strict";

window.addEventListener("load", start);

function start () {
    console.log("hi");
    document.querySelector("#create-form").addEventListener("submit, submitForm");
}

const animals = []

function submitForm (event) {
    event.prevetdefault();

    const form = event.target;
    const name = form.name.value;
    const age = form.age.value;
    const type = form.type.value;
    showAnimals (name, age, type);
}

function showAnimals (animals) {
    document.querySelector("students-table-body").innerHTML = "";
    students.sort ((a, b) => a.name.localeCompare (b.name));
    students.filter((animals) => animals.age <= 18).forEach(showAnimal)


}

function showAnimal (animal) {
    document.querySelector("students-table-body").insertAdjacentHTML
    ("beforeend",
    `<tr>
    <th>${Name}</th>
    <th>${Type}</th>
    <th>${Age}</th>
    </tr>`);
}
