// Step1: Define a base or parent class
class Person {
  constructor (name, age, job) {
    console.log ("this is a constructor")
  }

  introduce() {
    return 'output of introduce function'
  }
}

// Step2: Define subclass using extends
//        extends, create a new class based on an existing class, allowing the new class 
//        to inherit all the properties and methods of the original class.
class student extends Person {
  constructor (name, age, grade) {
    super(name, age)
  }
}