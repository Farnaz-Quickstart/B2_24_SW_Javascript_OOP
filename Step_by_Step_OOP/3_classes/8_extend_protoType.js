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
  constructor(brand, model, year, engineModel) {
    super(brand, model, year)
    this.engineModel = engineModel
  }
  
  getElectricCarInfo() {
    return (`${this.model}, ${this.engineModel}`)
  }
}
