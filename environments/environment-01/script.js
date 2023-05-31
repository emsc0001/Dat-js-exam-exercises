"use strict";

window.addEventListener("load", start);

import users from "./users.json" 

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
