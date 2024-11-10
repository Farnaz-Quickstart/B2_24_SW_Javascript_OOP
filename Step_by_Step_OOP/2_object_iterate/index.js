// Objects are containers for Properties and Methods
// Properties are named Values
// Methods are Functions stored as Properties


// Defining Object 
const car = {
  type: "fiat",
  model: "500",
  summery: function() {
    return (this.type + ' ' + this.model)
  }
}

// Accessing object Properties
console.log (car.type)
console.log (car.model)

// Adding properties to object
car.newproperity = 'hello'
console.log (JSON.stringify(car))

// Deleting properties from object
delete (car.newproperity)
console.log (JSON.stringify(car))


// Accessing object methods
console.log (car.summery())

// Adding a Method to an Object
car.newMethod = function () {
  return ("This is output of a method")
}
console.log (car.newMethod())