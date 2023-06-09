"use strict";

window.addEventListener("load", start)

let users

const listSelector = document.querySelector("#userlist");

async function start () {
  users = await getData()
  console.log(users);
  showUsers()
}

async function getData () {
  const data = await fetch ("users.json")
  return data.json()
}

function showUsers () {
  listSelector.textContent = ""
  users.forEach(showUser)
}

function showUser (user) {
  const userHTML = /*HTML*/ `
  <li>Name: ${user.name} - ${user.role}</li>`
  listSelector.insertAdjacentHTML("beforeend", userHTML)
  countUsers(users);
}

function countUsers(list) {
  let admins = 0
  let users = 0
  let guests = 0

  for(const user of list){
    if (user.role === "admin"){
      admins++
    } else if (user.role === "user") {
      users++;
    } else if (user.role === "guest") {
      guests++;
    }
  }
    document.querySelector("#admin-count").textContent = admins
    document.querySelector("#user-count").textContent = users
    document.querySelector("#guest-count").textContent = guests
}
