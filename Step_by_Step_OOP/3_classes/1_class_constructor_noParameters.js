// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.

class Mobile {
  constructor(brand, model) {
    this.brand = brand
    this.model = model
    console.log ("This is constructor of Mobile Class")
  }

  displayMobile() {
    console.log (`${this.brand}, ${this.model}`)
  }
}

// Creating a new instance of the Mobile class, named mobile1.
// this intantiation, calls constructor
let obj1 = new Mobile("iphone", "15")
let obj2 = new Mobile("iphone2", "16")
obj1.displayMobile()
obj2.displayMobile()


