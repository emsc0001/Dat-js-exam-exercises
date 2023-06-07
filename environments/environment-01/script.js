"use strict";

window.addEventListener("load", start);

async function start () {
  console.log("hi");
  const userData = await getUsers()

}

async function getUsers (){
  const reponse = await fetch("users.json")
  const data = await response.json()
  return data;
}

function showUsers(userData){
  document.querySelector("#userlist").innerHTML=""
  for(const user of userData){
    const html = `<li>${user.name}, ${user.role} </li>`
    document.querySelector("userlist").insertAdjacentHTML("beforeend", HTML);
  }
  countUsers(userData);
}

function countUsers(userData){
  let adminCount = 0
  let userCount = 0
  let guestCount = 0

  for(const user of userData){
    if (user.role === "admin"){
      adminCount+++
    } else if (user.role === "user") {
      userCount++;
    } else if (user.role === "guest") {
      guestCount++;
    }
  }
    document.querySelector("#admin-count").textContent = adminCount 
    document.querySelector("#user-count").textContent = userCount 
    document.querySelector("#guest-count").textContent = guestCount 
  }
