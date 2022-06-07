const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal, button.id)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal, content_id) {
  if (modal == null) return
  if (content_id == "modal1") {
    modal.innerHTML = `
      <div class="modal-header">
        <div class="title">Эублефары</div>
      </div>
      <div class="modal-body">
        Эублефары очень любят копать и рыть, поэтому в качестве субстрата используют натуральные пустынные грунты, такие как Песок Пустыни или Каменная Пустыня . В террариуме должны быть установлены укрытия. Они могут быть выполнены в виде камня. Можно соорудить пещеры и норы из специальных субстратов.
      </div>
    `
  } else if (content_id == "modal2") {
    modal.innerHTML = `
      <div class="modal-header">
        <div class="title">Бананоед</div>
      </div>
      <div class="modal-body">
      Минимальный размер террариума для одного геккона 30×30×45 см, для нескольких особей понадобиться террариум большего размера 45×45×60 см или 45×45×90 см. Температура днём должны быть 24-28 °C. Ночью температура не должна снижаться ниже 22 °C. Установка обогрева обычно не требуется.
      </div>
    `
  } else if (content_id == "modal3") {
    modal.innerHTML = `
      <div class="modal-header">
        <div class="title">Агама</div>
      </div>
      <div class="modal-body">
      Террариум обязательно должен закрываться крышкой, чтобы ящерица не сбежала. Так как бородатые агамы пустынники, уровень влажности для них нужен 30-40%. Температура в террариуме должна быть на уровне 26-29гр. С, температура под лампой обогрева 36-38гр.
      </div>
    `
  }
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}