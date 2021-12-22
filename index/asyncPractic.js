const delay = ms =>{
  return new Promise(r => setTimeout(() => {
    r()
  }, ms))
}

delay(2000).then(() => console.log('2 sec'))

const urlJPH = 'https://jsonplaceholder.typicode.com/todos/1'

function fetchTodos(){
  return delay(2000)
  .then(() => fetch(urlJPH))
  .then(res => res.json())
}


// fetchTodos().then(data => console.log('Data:', data))
// .catch(e => console.error(e))


async function fetchAsyncTodos(){
  console.log('Start fetch async...')
  try{
    await delay(3000)
    const res = await fetch(urlJPH)
    const data = await res.json()
    console.log('Data 2:', data)
    console.log('End fetch async...')
  }catch (e){
    console.log(e)
  } finally{
    
  }
}

fetchAsyncTodos()

