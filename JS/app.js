// class Add {
//     constructor(...words) {
//         this.words = words
//     }
//
//     print = () => {
//         return '$' + this.words.join('$') + '$'
//     }
// }
//
//
// const x = new Add('i', 'say', 'hey', 'hey', 'hey', 'hey', 'hey')
// console.log(x.print());

// person = {
//     name: 'Sirofim',
//     familyName: 'Ganzales',
//     age: 359,
//     isVampire: true
// }


// const logger = {
//     keys(){
//         console.log('Object keys:',Object.keys(this));
//     },

//     keysAndValues(){
//         Object.keys(this).forEach(key => console.log(key + ': ' + this[key]))
//     }
// }
// logger.keys.call(person)
// logger.keysAndValues.call(person)


// const person = Object.create({
//     whoAreYou(){
//         console.log(`I'm ${this.name} and i'm ${this.age} years old`)
//     }
//     }, {
//     name: {
//         value: 'Sprada',
//         //Добавляем параметр
//         enumerable: true, //Свойство можно увидеть через перечесление свойств (пример for (let el in person))
//         writable: true, //Задает возможность изменения значения в объекте
//         configurable: true, //Позваляет удалять ключ с значением
//     },
//     birthYear: {
//         value: 1998,
//          writable: true,
//     },
//     //Добавим get и set
//     age: {
//         //Получаем значение вычисления
//         get(){
//             return new Date().getFullYear() - this.birthYear
//         },
//         //Задаем указааное значение 
//         set(val){
//             const docBodyStyle = document.body.style 
//             const thisYear = new Date().getFullYear()
//             docBodyStyle.background = 'red'
//             this.birthYear = thisYear - val   
//             setTimeout(() => {
//                 docBodyStyle.background = 'white'
//             }, 5000)
//         }
//     }
// })


