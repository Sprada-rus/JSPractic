const openCard = (event) => {
  const CLOSE = 'card-close'
  const OPEN = 'card-open'
  const idDivContent = event.target?.dataset?.content
  const divContent = document.querySelector(`#${idDivContent}`)
  
  if (divContent){
    const contentClass = divContent.classList
    
    if(divContent.classList.contains(CLOSE)){
      divContent.classList.remove(CLOSE)
      divContent.classList.add(OPEN)
      setTimeout(() => {
        divContent.classList.remove('none')
      }, 100)
    } else {
      divContent.classList.remove(OPEN)
      divContent.classList.add(CLOSE)
      setTimeout(() => {
        divContent.classList.add('none')
      }, 350)
    }
    // divContent.style.display =  ? 'block' : 'none'
  }
}

document.querySelectorAll('.card-title')
  .forEach(item => {
    item.children[0].addEventListener('click', openCard)
  })


