"use strict";

import { courses } from "./courses.js";

const listSelector = document.querySelector("#courses-list");

window.addEventListener("load", start) 

function start () {
  sortByStartDate()
  showCourses()
}

function showCourses () {
  listSelector.textContent = ""
  courses.forEach(showcourse);
}

function showcourse (course) {
  const courseHTML = /*HTML*/ `
  <li> ${course.name}, ${course.startDate} - ${course.ectsPoints} pts </li>
  `
  listSelector.insertAdjacentHTML("beforeend", courseHTML)
}

function sortByStartDate() {
  courses.sort((a,b)=>  a.startDate.localeCompare(b.startDate))
}

