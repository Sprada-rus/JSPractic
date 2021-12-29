const form = document.querySelector('#form-callback')
let formChildren = form.children
const requiredFields = []
console.log(form)


const editLabelRequiredFields = () => {
  for(let i = 0; i < formChildren.length; i++){
    let checkNode = formChildren[i].lastElementChild
    // let labelNode = formChildren[i].firstElementChildd
    if(checkNode?.required){
      requiredFields.push(checkNode)
      checkNode.labels[0].outerHTML += " <span style='color:red;'>*</span>"
    }    
  }

  if(requiredFields.length > 0){
    const reqList = form.appendChild(document.createElement('div'))
    reqList.textContent = "Необходимо заполнить поля: "
    reqList.classList.add('required-list')

    let labels = requiredFields.map(i => {
      return i.labels[0].innerText.slice(0, i.labels[0].innerText.indexOf(':'))
    })
    
    reqList.textContent += labels.join(', ') 
  }
  
}


form.onloadeddata = editLabelRequiredFields()



