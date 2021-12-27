const requestUrl = 'https://jsonplaceholder.typicode.com/users'

//Первый способ
// const xhr = new XMLHttpRequest()
// xhr.open('GET', requestUrl)

// xhr.responseType = 'json'

// xhr.onload = () => {

//   if (xhr.status >= 400){
//     console.error(xhr.response)
//   } else {
//     console.log(xhr.response)
//   }
//   //Или JSON.parse(xhr.response)
// }

// xhr.onerror = () => {
//   console.log(xhr.response)
// }

// xhr.send()

//Promise
function sendRequest(method, url, body = null){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {

      if (xhr.status >= 400){
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
  }) 
}

// sendRequest('GET', requestUrl)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const postObject = {
  name: 'Ilya',
  age: 23
}

sendRequest('POST', requestUrl, postObject)
  .then(data => console.log(data))
  .catch(err => console.log(err))