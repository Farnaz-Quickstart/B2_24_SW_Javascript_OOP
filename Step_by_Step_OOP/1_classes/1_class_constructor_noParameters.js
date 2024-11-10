// this:
//     Refers to the Instance: Inside a class, this refers to the specific instance being created or acted upon.
//     also this is used to set up properties on the specific object being created
//     Uniqueness: Each new instance of a class has its own separate properties (like this.brand, this.model, etc.), 
//     so changing this.brand on one instance does not affect another instance.

class Mobile {
  constructor() {
    this.brand = "iphone"
    this.model = "iphone"
    this.color = "black"
    console.log ("Class constructor is run")
  }
}

// Creating a new instance of the Mobile class, named mobile1.
// this intantiation, calls constructor
let mobile1 = new Mobile()

