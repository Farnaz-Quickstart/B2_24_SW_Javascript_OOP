// Step1: Define a base or parent class
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
    console.log ("this is a constructor")
  }

  personReport() {
    console.log ('This is a person Report')
  }
}

// Step2: Define subclass using extends
//        extends, create a new class based on an existing class, allowing the new class 
//        to inherit all the properties and methods of the original class.
//        Super: Is required in a subclass constructor to call the parent’s constructor.
class Student extends Person {
  constructor(name, age, grade) {
    // Is required in a subclass constructor to call the parent’s constructor.
    super (name, age)
    this.grade = grade
  }

  studentReport() {
    console.log ("This is a student report")
  }

}

let farnaz = new Student ("farnaz", 12, "Grade 1")
farnaz.personReport()
farnaz.studentReport()