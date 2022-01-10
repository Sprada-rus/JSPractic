const openCard = (event) => {
  const CLOSE = 'card-close'
  const OPEN = 'card-open'
  const idDivContent = event.target?.dataset?.content
  const divContent = document.querySelector(`#${idDivContent}`)

  console.log(divContent)

  if (divContent){
    let countAnim = 0 

    if(divContent.classList.toggle(OPEN)){
      divContent.style.height = 0
      divContent.style.opacity = 0
      
      let anim = setInterval(() => {
        if(divContent.style.height == '100%'){
          divContent.style.removeProperty('height');
          divContent.style.removeProperty('opacity');
          clearInterval(anim)
          return;
        }
        
        countAnim += 10
        divContent.style.height = countAnim+'%'
        divContent.style.opacity = countAnim+'%'
        console.log(divContent.style.height)
      }, 20);

      delete divContent.style
    } else {
      countAnim = 100
      divContent.style.display = 'block'
      let anim = setInterval(() => {
        if(divContent.style.height == '0%'){
          divContent.style.removeProperty('height');
          divContent.style.removeProperty('opacity');
          divContent.style.removeProperty('display');
          clearInterval(anim)
          return;
        }
        
        countAnim -= 10
        divContent.style.height = countAnim+'%'
        divContent.style.opacity = countAnim+'%'
        console.log(divContent.style.height)
      }, 20);
    } 
  }
}

document.querySelectorAll('.card-title')
  .forEach(item => {
    item.children[0].addEventListener('click', openCard)
  })


