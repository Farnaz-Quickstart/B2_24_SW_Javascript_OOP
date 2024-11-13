// Objects are containers for Properties and Methods
// Properties are named Values
// Methods are functions stored as properties


// Defining Object 
const car = {
  type: "fiat",
  model: "500",
  summeryCar: function() {
    console.log (this.type)
    console.log (this.model)
    console.log( this.type + " " + this.model)
  }
}


// 1- Using for...in Loop
for (let key in car) {
  console.log (key)
}


// 2- Using Object.keys() with for...of
// for (let key in Object.keys(car)) {
//   console.log (`${key} : ${car[key]}`)
// }

console.log (JSON.stringify(car))



// 3- Using Object.values() with for...of
// Accessing object Properties
// Adding properties to object
// Deleting properties from object
// Accessing object methods
// Adding a Method to an Object

