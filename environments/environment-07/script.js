"use strict";


window.addEventListener("load", start)




















































// window.addEventListener("load", start);

// let students = [];

// function start () {
//   console.log("running")
//   document.querySelector("button").addEventListener("click", addStudent)
// }

// function addStudent (event) {
//   event.preventDefault()

//   const name = document.querySelector("#name").value
//   const email = document.querySelector("#email").value
//   const age = document.querySelector("#age").value

//   document.querySelector("#students-table-body").innerHTML = ""


//   const newStudent = {
//     name: name,
//     email: email,
//     age: age,
//   }

//   students.push(newStudent);
//   console.log(students)
//   students.forEach(showStudent)
// }

// function showStudent (student) {
//   document.querySelector("#students-table-body").insertAdjacentHTML
//   ("beforeend", /*html*/ 
//   `<li>${student.name}, ${student.email}, ${student.age}</li>`);
// }

// function sortByAge () {
//   students.sort((a, b) => a.age - b.age)
//   showStudent(students)
// }
















// function start() {
//   console.log("hi");
//   document.querySelector("#create-student-form").addEventListener("submit", submitForm);
// }

// const students = [];

// function submitForm(event) {
//   event.preventDefault();

//   const form = event.target;
//   const name = form.name.value;
//   const email = form.email.value;
//   const age = form.age.value;
//   showStudent(name, email, age);
// }

// function showStudents(students) {
//   document.querySelector("#students-table-body").innerHTML = "";
//   students.sort((a, b) => a.name.localeCompare(b.name));
//   students.filter((student) => student.age >= 18).forEach(showStudent);
// }

// function showStudent(student) {
//   document.querySelector("students-table-body").insertAdjacentHTML(
//     "beforeend",
//     `<tr>
//             <td>${student.name}</td>
//             <td>${student.email}</td>
//             <td>${student.age}</td>
//         </tr>`
//   );
// }
