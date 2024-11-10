// A prototype is an object from which other objects can inherit properties and methods.
// In JavaScript, every object has an internal property called [[Prototype]]
// If you try to access a property on an object and it doesn’t exist, JavaScript looks up the prototype chain until it finds that property or reaches the end of the chain.

const animal = {
  speak: function () {
    console.log ("animal Speak")
  }
}

let dog = Object.create (animal)
dog.bark = function() {
  console.log ("Bark")
}

dog.speak();
dog.bark();

console.log (dog.toString())