"use strict";

let users;


fetch('./users.json')
  .then(response => response.json())
  .then(data => {
    users = data;
    console.log(users); // Udskriv JSON-dataene til konsollen
  })
  .catch(error => {
    console.log('Fejl ved hentning af JSON-data:', error);
  });



  // Funktion til at vise brugerlisten på websiden
  function showUserList() {
    let userList = document.getElementById("userList");
    userList.innerHTML = ""; // Nulstil listen

    // Filtrer og vis aktive brugere ved hjælp af Array-metoder
    users
      .filter(user => user.isActive) // Filtrer aktive brugere
      .forEach(user => {
        let listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  }

  // Kald funktionen for at vise brugerlisten
  showUserList();