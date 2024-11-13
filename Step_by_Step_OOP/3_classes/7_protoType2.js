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

  getCarInfo () {
    return (`${this.brand}, ${this.model}, ${this.year}`)
  }
}

// Subclass: ElectricCar
class ElectricCar extends Car {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year)
  }
}

let car1 = new Car (("brand1", "model1", 2024))
let ElectricCar1 = new ElectricCar("ECarBrand1", "eCarModel1", 2000)

console.log (car1)
console.log (Object.getPrototypeOf(car1))

console.log (ElectricCar1)
console.log (Object.getPrototypeOf(ElectricCar1))