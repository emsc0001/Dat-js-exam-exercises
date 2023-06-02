"use strict";

var animals = [];

function createAnimal(name, animalType, age) {
    var animal = {
        "name": name,
        "type": animalType,
        "age": age
    };
    animals.push(animal);
    updateAnimalList();
}