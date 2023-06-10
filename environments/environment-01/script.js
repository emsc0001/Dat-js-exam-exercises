"use strict";


// ØVELSE 1

// window.addEventListener("load", start)

// async function start () {
//   const users = await getUser()
//   console.log(users)
//   users.forEach(showUsers)
// }

// async function getUser() {
//   const response = await fetch ("users.json")
//   const data = response.json()
//   return data;
// }


// function showUsers(user) {
//   if (user.role === "admin") {

//   document.querySelector("#userlist").insertAdjacentHTML(
//     "beforeend", /*HTML*/ `
//     <li>${user.name} - ${user.active}</li>`)
//  }
// }


// ØVELSE 2 TILFØJ

// og husk at kalde den i start funktionen


async function countRoles() {
  const users = await getUsers();

  let adminCount = 0;
  let userCount = 0;
  let guestCount = 0;

  users.forEach((users) => {
    if (users.role === "admin"){
    adminCount++ 
    } else if (user.role ==="user"){
      userCount++;
    } else if (user.role === "guest")
      guestCount++;
  })

  document.querySelector("#admin-count").textContent = adminCount;
  document.querySelector("#user-count").textContent = adminCount;
  document.querySelector("#guest-count").textContent = adminCount;
}


