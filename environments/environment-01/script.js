"use strict";

window.addEventListener("load", start)

let users

async function start () {
  users = await getData()
  console.log(users)
  showUsers()
}

async function getData() {
  const data = await fetch ("users.json")
  return data.json();
}

function showUser () {
  listSelector.textContent = ""
  users.forEach(showUser)
}

function showUsers(user)
  const userHTML = /*HTML*/ `
  <li>${user.name} - ${user.active} </li>`
  listSelector.insertAdjacentHTML("beforeend", userHTML)
  

