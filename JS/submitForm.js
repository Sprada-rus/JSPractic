const createModalWindow = (modalObject, type = 'info') => {
  let modal = `<div class="modal-backside">
                  <div class="modal">`
  if(type != 'info'){
    modal += '<div class="modal-header">'
    modal += `<h2>${modalObject.title}</h2>`
    modal += '</div>'
  }

  modal += '<div class="modal-body">'
  modal += modalObject.content
  modal += '</div>'

  modal += '<div class="modal-footer">'
  if(type != 'info'){
    modal += '<button id="modal_submit" class="btn btn-submit">Согласен</button>'
    modal += '<button id="modal_cancel" class="btn btn-submit">Отмена</button>'
  } else {
    modal += '<button id="modal_submit" class="btn btn-submit">Ок</button>'
  }
  modal += '</div>'

  const modalNode = document.createElement('div')
  modalNode.classList.add(`vmodal`)
  modalNode.classList.add(type)
  modalNode.insertAdjacentHTML('afterbegin', modal)

  document.body.appendChild(modalNode)

  return modalNode
}

const modalWindow = (...options) => {
  const $modal = createModalWindow(options[0], options[1])

  console.log($modal)

  return{
    open(){
      $modal.classList.add('open')
    },
    close(){
      $modal.classList.remove('open')
      // $modal.classList.add('close')
    },
    destroy(){
      document.body.removeChild(document.querySelector('.vmodal.message'))
    }
  }
}

const submitForm = (event) => {
  console.log(event.target)

  const inputs = event.target

  let contentText = `<p><b>Многоуважаемый(-ая) ${inputs[0].value}</b></p>`
  contentText +=  `<p>Вы зря смотрели и писали значения в форму. На ваш email ${inputs[1].value} никогда не придет ответ</p>`
  contentText += '<p>' + (inputs[2].value != '' ? `Ваше сообщение '${inputs[2].value}' никогда не будет доставлено.` : '') + '</p>'
  contentText += '<p>C наилучшими пожеланиями,<br>Создатель резюме!</p>'

  const modalObject = {
    title: 'Заявка не создана, эта форма не работает',
    content: contentText
  }
  const modal = modalWindow(modalObject, 'message')

  document.querySelector('#modal_submit').onclick = () => {
    modal.close()
    setTimeout(() => modal.destroy(), 800)
  }

  document.querySelector('#modal_cancel').onclick = () => {
    modal.close()
    setTimeout(() => modal.destroy(), 800)
  }

  setTimeout(() => modal.open(), 0)

  return false
}


form.onsubmit = submitForm