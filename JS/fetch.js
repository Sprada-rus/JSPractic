const fetchUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null){
  const headers = {
    'Content-type': 'application/json'
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  })
  .then(response => {
    // if(response.ok){
    //   return response.json()
    // } else {
    //   re
    // }
    return response.ok ? response.json() : response.json().then(err => {
      const e = new Error('This is a not ok!')
      e.data = err
      throw e
    })
  })
}

// sendRequest('GET', fetchUrl)
//   .then(data => console.log(data))
//   .catch(err => console.error(err))


sendRequest('POST', fetchUrl, postObject)
  .then(data => console.log(data))
  .catch(err => console.error(err))  