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



let car1 = new Car ("brand1", "model1", 2024)
console.log (car1)
console.log (Object.getPrototypeOf(car1)); 
