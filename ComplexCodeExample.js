/*
Filename: ComplexCodeExample.js
Content: A complex example demonstrating the usage of various design patterns and advanced JavaScript techniques.

Note: This code is provided as an example and may not serve any practical purpose.
*/

// --- Observer Pattern ---
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Received data: ${data}`);
  }
}

// --- Singleton Pattern ---
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

// --- Factory Pattern ---
class ShapeFactory {
  createShape(type) {
    switch (type) {
      case 'circle':
        return new Circle();
      case 'rectangle':
        return new Rectangle();
      default:
        throw new Error('Invalid shape type.');
    }
  }
}

class Circle {
  draw() {
    console.log('Drawing a circle...');
  }
}

class Rectangle {
  draw() {
    console.log('Drawing a rectangle...');
  }
}

// --- Prototype Pattern ---
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  clone() {
    const clone = Object.create(this);
    clone.constructor = this.constructor;
    return clone;
  }
}

// --- Decorator Pattern ---
class Coffee {
  getCost() {
    return 2;
  }

  getDescription() {
    return 'Simple coffee';
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 1;
  }

  getDescription() {
    return `${this.coffee.getDescription()} with milk`;
  }
}

// --- Example Usage ---
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Data 1'); // Output: Received data: Data 1

subject.removeObserver(observer1);

subject.notifyObservers('Data 2'); // Output: Received data: Data 2

const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log(singleton1 === singleton2); // Output: true

const shapeFactory = new ShapeFactory();
const circle = shapeFactory.createShape('circle');
circle.draw(); // Output: Drawing a circle...

const car = new Car('Tesla', 'Model S', 2022);
const clonedCar = car.clone();
console.log(clonedCar); // Output: Car { make: 'Tesla', model: 'Model S', year: 2022 }

const coffee = new Coffee();
const coffeeWithMilk = new MilkDecorator(coffee);
console.log(coffeeWithMilk.getCost()); // Output: 3
console.log(coffeeWithMilk.getDescription()); // Output: Simple coffee with milk