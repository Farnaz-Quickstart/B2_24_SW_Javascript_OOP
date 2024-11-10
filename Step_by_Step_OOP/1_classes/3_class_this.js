// this:
//     Refers to the Instance: Inside a class, this refers to the specific instance being created or acted upon.
//     also this is used to set up properties on the specific object being created
//     Uniqueness: Each new instance of a class has its own separate properties (like this.brand, this.model, etc.), 
//     so changing this.brand on one instance does not affect another instance.

class Person {
  constructor(name, age, job) {
    // Assign values
    this.name = name
    this.age = age
    this.job = job
    console.log ("This is class constructor ")
  }
}

// Creating a new instance of the Mobile class, named mobile1.
// this intantiation, calls constructor
let person1 = new Person("farnaz", "49", "Instructor")
let person2 = new Person("Martin", "25", "developer")
let person3 = new Person("Kyra", "30", "frontend developer")


