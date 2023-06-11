"use strict"

window.addEventListener("load", start)

async function start () {
  console.log("running")
  const users = await getUsers()
  console.log(users)
  users.forEach(showUser)
}

async function getUsers () {
  const response = await fetch ("users.json")
  const data = await response.json()
  return data;
}

function showUsers() {
  document.querySelector("#userlist").innerHTML = ""
}

function showUser (user) {
  user === "admin"
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", /*HTML*/ `
  <li> ${user.name} - ${user.role} - ${user.active} - </li>`)
}