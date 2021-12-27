const citiesRussia = ['Москва', 'Санкт-Петербург', 'Ярославль', 'Нижний Новгород']
const citiesErope = ['Berlin', 'London', 'Kracow', 'Helsinki']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  StPetersburg: 10,
  Yaroslavl: 5,
  NushniyNovgorod: 4
}

const citiesEuropeWithPopulation = {
  Berlin: 20,
  London: 10,
  Kracow: 5,
  Helsinki: 4
}

// console.log(...citiesRussia) 

const allCities = [...citiesRussia, ...citiesErope]
// const allCities = citiesErope.concat(citiesRussia)
// console.log(allCities)


// console.log({...citiesRussiaWithPopulation})

// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})


