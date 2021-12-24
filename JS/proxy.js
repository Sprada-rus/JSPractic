const obj = {
  name: 'Ghost', 
  age: 100,
  job: 'Scaring people'
}

//object
const objProxy = new Proxy(obj, {
  //Прописывам, что будет происходить при получение значения
  get(target, prop){
    return target[prop]
  },
  //Прописываем, что будет происходить если будет завать значение
  set(target, prop, value){
    if (prop in target){
      target[prop] = value
    } else {
      throw console.error('Error!')
    }
  },
  //Прописываем, что будет происходить при проверки значения
  has(target, prop){
    return ['age', 'job'].includes(prop)
  },
  //Прописываеи, что будет происходить при удаление свойства объекта
  deleteProperty(target, prop){
    console.log(`Deleted ${prop}`)
    delete target[prop]  
  }
})

//function
const log = text => `Log ${text}`


const funProxy = new Proxy(log, {
  //Проверка вызова функции
  apply(target, thisArg, args){
    console.log(`Target: ${target}, Arg: ${thisArg}, Args: ${args}`)
    console.log('Calling funProxy...')

    return target.apply(thisArg, args)
  }
})


//Classes
class PersObj{
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

const ClassProxy = new Proxy (PersObj, {
  construct(target, args){
    console.log('Construct...')

    return new target(...args)
  }
})


//Оптимизация
const usersData = [
  {id: 1, name_obj: 'Alex', job: 'Hero'},
  {id: 2, name_obj: 'Mi', job: 'Rabbit'},
  {id: 3, name_obj: 'Arcadiy', job: 'Train driver'},
  {id: 4, name_obj: 'Chingis', job: 'Ohuel'},
]

const IndexedArray = new Proxy(Array, {
  construct(target, [args]){
    const index = {}
    args.forEach(element => {
      index[element.id] = element
    });

    return new Proxy(new target(...args), {
      get(arr, prop){
        switch(prop){
          case 'push':{
            return item => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          }
          case 'findById': {
            return id => index[id]
          }
          default:
            return arr[prop]
        }
      }
    })
  }
})

const users = new IndexedArray(usersData)