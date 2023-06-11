"use strict";

import { teachers } from "./teachers.js"



window.addEventListener("load", start)

function start () {
  sortByName()
  sortByEmail()
  showTeachers()
  console.log("running")
}

function showTeachers () {
  document.querySelector("#teachers-list").innerHTML = ""
  teachers.forEach(showTeacher)
}

function showTeacher (teacher) {
  document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", /*HTML*/ `
  <li>${teacher.name} - ${teacher.email}</li>`)
}

function sortByName () {
teachers.sort ((a, b) => a.name.localeCompare(b.name))
}

function sortByEmail () {
  teachers.sort ((a, b) => a.email.localeCompare(b.email))
}














































// import { teachers } from "./teachers.js";

// window.addEventListener("load", start);

// const listSelector = document.querySelector("#teachers-list");

// function start() {
//   showTeachers(listSelector)
//   sortByName()
//   sortByEmail()
// }

// function showTeachers(listSelector) {
//   listSelector.textContent = "";
//   teachers.forEach((teacher) => showTeacher(listSelector, teacher));
// }

// function showTeacher(listSelector, teacher) {
//   const teacherHTML = /*HTML*/ `<li>${teacher.name}, ${teacher.email}</li>`;
//   listSelector.insertAdjacentHTML("beforeend", teacherHTML);
// }


// function sortByName() {
//   teachers.sort((a, b) => a.name.localeCompare(b.name));
//   showTeachers(listSelector);
// }

// function sortByEmail() {
//   teachers.sort((a, b) => a.email.localeCompare(b.email));
//   showTeachers(listSelector);
// }


// ________________Øvelse 10________________________


// import { teachers } from "./teachers.js";

// function displayTeachers() {
//   const teacherList = document.getElementById("teachers-list");
//   teacherList.innerHTML = "";

//   teachers.forEach((teacher) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `Name: ${teacher.name}, Email: ${teacher.email}`;
//     teacherList.appendChild(listItem);
//   });
// }

// function addTeacher(name, email) {
//   const newTeacher = { name, email };
//   teachers.push(newTeacher);
//   displayTeachers();
// }

// displayTeachers();
