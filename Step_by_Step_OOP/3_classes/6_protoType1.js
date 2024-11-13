// Prototype: Is a mechanism by which objects can inherit features from one another. 
//            every JavaScript object has a hidden, internal property called [[Prototype]], which either points 
//            to another object (its prototype) or null. This forms what's known as the prototype chain and is 
//            fundamental to JavaScript’s inheritance system.
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}


function Car1 (brand, model, year) {
  this.brand = brand
  this.model = model
  this.year = year
}


