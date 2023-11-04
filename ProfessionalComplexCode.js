/*
   Filename: ProfessionalComplexCode.js
   
   Description: This code is a complex simulation of a virtual ecosystem where animals, plants, and weather patterns interact in a realistic manner. It utilizes object-oriented programming principles and includes multiple classes to represent different entities and their behaviors.

   Note: This is just a fictional example to demonstrate a complex code structure; it does not provide a complete simulation.
*/

// Constants
const MAX_ANIMALS = 50;
const MAX_PLANTS = 100;
const MAX_ITERATIONS = 500;
const WEATHER_INTERVAL = 5000;

// Helper functions
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Base class for all organisms
class Organism {
   constructor(name, type, x, y) {
      this.name = name;
      this.type = type;
      this.x = x;
      this.y = y;
   }
   
   move() {
      let newX = this.x + getRandomInt(-1, 1);
      let newY = this.y + getRandomInt(-1, 1);
      
      if (newX >= 0 && newX < worldWidth) {
         this.x = newX;
      }
      
      if (newY >= 0 && newY < worldHeight) {
         this.y = newY;
      }
   }
}

// Animal class
class Animal extends Organism {
   constructor(name, type, x, y, size, speed) {
      super(name, type, x, y);
      this.size = size;
      this.speed = speed;
   }
   
   eat(organism) {
      console.log(`${this.name} is eating ${organism.name}`);
   }

   reproduce() {
      console.log(`${this.name} is reproducing`);
   }
}

// Plant class
class Plant extends Organism {
   constructor(name, type, x, y, size) {
      super(name, type, x, y);
      this.size = size;
   }
   
   absorbSunlight() {
      console.log(`${this.name} is absorbing sunlight`);
   }
   
   spreadSeeds() {
      console.log(`${this.name} is spreading seeds`);
   }
}

// Weather class
class Weather {
   constructor(type) {
      this.type = type;
   }
   
   changeWeather() {
      console.log(`Weather is changing to ${this.type}`);
   }
}

// Simulation initialization
const worldWidth = 100;
const worldHeight = 100;
const animals = [];
const plants = [];

// Populate the world with animals
for (let i = 0; i < MAX_ANIMALS; i++) {
   animals.push(new Animal(`Animal-${i+1}`, 'Mammal', getRandomInt(0, worldWidth), getRandomInt(0, worldHeight), getRandomInt(1, 5), getRandomInt(1, 5)));
}

// Populate the world with plants
for (let i = 0; i < MAX_PLANTS; i++) {
   plants.push(new Plant(`Plant-${i+1}`, 'Flower', getRandomInt(0, worldWidth), getRandomInt(0, worldHeight), getRandomInt(1, 5)));
}

// Simulate the ecosystem
for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
   console.log(`Iteration ${iteration + 1}`);
   
   // Move animals
   for (const animal of animals) {
      animal.move();
   }
   
   // Interactions between organisms
   for (const animal of animals) {
      const nearbyPlants = plants.filter(plant => Math.abs(animal.x - plant.x) <= 1 && Math.abs(animal.y - plant.y) <= 1);
      
      if (nearbyPlants.length > 0) {
         const randomPlant = nearbyPlants[getRandomInt(0, nearbyPlants.length - 1)];
         animal.eat(randomPlant);
      }
   }
   
   // Weather change
   if (iteration % WEATHER_INTERVAL === 0) {
      const weatherTypes = ['Sunny', 'Rainy', 'Cloudy'];
      const randomType = weatherTypes[getRandomInt(0, weatherTypes.length - 1)];
      const weather = new Weather(randomType);
      
      weather.changeWeather();
   }
}

console.log('Simulation finished.');