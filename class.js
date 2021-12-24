class Vehicle {
  #year = 0
  //С помощью конструктора мы передам переменные, которые должны быть в классе
  constructor(options){
    //Задаем переменные класса
    this.#year = options.year
    this.isBroken = options.isBroken
  }

  run = () => console.log('Vehicle running')
  stop = () => console.log('Vehicle stopped')
  //Добавлям get() и set()
  get age(){
    return new Date().getFullYear() - this.#year
  }

  set age(val){
    this.#year = new Date().getFullYear() - val
    console.log('Year is changed')
  }

  get year(){
    return this.#year
  }
}

//Класс Auto наследует переменные и методы класса Vehicle 
class Car extends Vehicle {
  constructor(options){
    //С помощью метода super() мы передаем значение в класс наследования
    super(options)
    this.mark = options.mark
    this.model = options.model
  }
}

const carOne = new Car({
  year: 2005,
  isBroken: false,
  mark: 'Audi',
  model: 'A6'
})

