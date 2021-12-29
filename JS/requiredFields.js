const form = document.querySelector('#form-callback')
let formChildren = form.children
const requiredFields = new Set([])
// console.log(form)


const editLabelRequiredFields = () => {
  for(let i = 0; i < formChildren.length; i++){
    let checkNode = formChildren[i].lastElementChild
    // let labelNode = formChildren[i].firstElementChildd
    if(checkNode?.required){
      requiredFields.add(checkNode)
      checkNode.labels[0].outerHTML += " <span style='color:red;'>*</span>"
    }    
  }

  if(requiredFields.size){
    const reqList = form.appendChild(document.createElement('div'))
    reqList.textContent = "Необходимо заполнить поля: "
    reqList.classList.add('required-list')

    let labels = Array.from(requiredFields).map(i => {
      return i.labels[0].innerText.slice(0, i.labels[0].innerText.indexOf(':'))
    })
    
    reqList.textContent += labels.join(', ') 
  }
  
}

form.onloadeddata = editLabelRequiredFields()
form.onchange = (event) => {
  const changedNode = event.target
  const countSymbols = changedNode.value.length
  const reqList = document.querySelector('.required-list')

  if(countSymbols && requiredFields.has(changedNode)){
    requiredFields.delete(changedNode)
  } else if(!countSymbols && changedNode?.required){
    requiredFields.add(changedNode)
  }

  if(requiredFields.size){
    reqList.textContent = "Необходимо заполнить поля: " + Array.from(requiredFields).map(i => {
      return i.labels[0].innerText.slice(0, i.labels[0].innerText.indexOf(':'))
    }).join(', ')

  }

  reqList.style.display = requiredFields.size === 0 ? 'none' : 'block'
}