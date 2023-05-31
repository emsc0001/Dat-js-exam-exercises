"use strict";



// Definer funktionen
function clicked() {
    console.log("Det virker");
  }
  
  // Tilføj en eventlytter til knappen
  var button = document.getElementById("btn-knap");
  button.addEventListener("click", clicked);

  