
class Car {
  constructor() {
    this.model = "model1",
    this._color = "color1"
    this._year = 2003
    console.log ("This is a constructor")
  }

  get model() {
    return this._model
  }

  set model(value) {
    this._model = value
  }

  get color() {
    return this._color
  }

  set color(value) {
    this._color = value
  }

  get year() {
    return this._year
  }

  set year(value) {
    this._year = value
  }
}

let car1 = new Car ()
console.log (car1.model)
console.log (car1.color)

car1._model = "new model"
car1._color = "black"

console.log (car1.model)
console.log (car1.color)