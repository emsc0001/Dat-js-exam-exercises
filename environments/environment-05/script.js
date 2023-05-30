"use strict";


let students = []

function start () {
    console.log();
    document.querySelector("#create-student-form").addEventListener("submit", submitform);

}

function sumbitForm(event) {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);


const newStudent = addStudent (name, email, age);
console.log(newStudent);
students.push(newStudent);
;
}

function showStudent(students) {
    document.querySelector("tbody").innerHTML = "";
    for (const student of students) {
        displayStudent(student);
    }
}

function sortBy(array) {
    array.sort((a, b) => a.age - b.age);

}

function displayStudent(student) {
    const html = /*html*/

   <tr>
            <td>$name</td>
            <th>email</th>
            <th>age</th>
          </tr>
}
