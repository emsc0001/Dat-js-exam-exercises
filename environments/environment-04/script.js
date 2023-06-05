"use strict";

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

// function sortByName() {
//   teachers.sort((a, b) => a.name.localeCompare(b.name));
//   displayTeachers();
// }

// function sortByEmail() {
//   teachers.sort((a, b) => a.email.localeCompare(b.email));
//   displayTeachers();
// }

// displayTeachers();



// ________________Øvelse 10________________________


import { teachers } from "./teachers.js";

function displayTeachers() {
  const teacherList = document.getElementById("teachers-list");
  teacherList.innerHTML = "";

  teachers.forEach((teacher) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${teacher.name}, Email: ${teacher.email}`;
    teacherList.appendChild(listItem);
  });
}

function addTeacher(name, email) {
  const newTeacher = { name, email };
  teachers.push(newTeacher);
  displayTeachers();
}

displayTeachers();
