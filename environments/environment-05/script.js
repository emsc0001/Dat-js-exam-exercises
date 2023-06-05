"use strict";

import courses from "./courses";
console.log(courses);



// script.js


function displayCourses() {
  const coursesList = document.getElementById("courses-list");
  const selectFilterEcts = document.getElementById("select-filter-ects");
  const selectedEcts = parseInt(selectFilterEcts.value);

  coursesList.innerHTML = "";

  courses.forEach(function(course) {
    if (course.ectsPoints === selectedEcts || selectedEcts === 0) {
      const courseElement = document.createElement("li");
      courseElement.innerHTML = "<strong>Name:</strong> " + course.name + "<br>" +
                                "<strong>ECTS Points:</strong> " + course.ectsPoints + "<br>" +
                                "<strong>Teacher:</strong> " + course.teacher + "<br>";

      coursesList.appendChild(courseElement);
    }
  });
}

function addCourse() {
  const name = prompt("Enter the course name:");
  const ectsPoints = parseInt(prompt("Enter the ECTS points:"));
  const teacher = prompt("Enter the teacher's name:");

  const newCourse = {
    name,
    ectsPoints,
    teacher
  };

  courses.push(newCourse);

  displayCourses();
}

// Vis eksisterende kurser
displayCourses();



// let students = []

// function start () {
//     console.log();
//     document.querySelector("#create-student-form").addEventListener("submit", submitform);

// }

// function sumbitForm(event) {
//     event.preventDefault();
//     const form = event.target;

//     const name = form.name.value;
//     const email = form.email.value;
//     const age = Number(form.age.value);


// const newStudent = addStudent (name, email, age);
// console.log(newStudent);
// students.push(newStudent);
// ;
// }

// function showStudent(students) {
//     document.querySelector("tbody").innerHTML = "";
//     for (const student of students) {
//         displayStudent(student);
//     }
// }

// function sortBy(array) {
//     array.sort((a, b) => a.age - b.age);

// }

// function displayStudent(student) {
//     const html = /*html*/

//    <tr>
//             <td>$name</td>
//             <th>email</th>
//             <th>age</th>
//           </tr>
// }


