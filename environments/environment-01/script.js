"use strict"

window.addEventListener("load", start)

async function start () {
  console.log("running")
  const users = await getData()
  console.log(users) 
  users.forEach(showUsers)
  
}

async function getData() {
  const response = await fetch ("users.json")
  const data = await response.json()
  return data;
}

function showUsers(user) {
  if (user.role === "admin") {
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", /*HTML*/ `
  <li> ${user.name} - ${user.role} - ${user.active} - </li>`)
}}

