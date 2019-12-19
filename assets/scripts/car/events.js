'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')
// let player = 'x'

const onCreate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndex = event => {
  event.preventDefault()
  // console.log('onIndex')
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}
// const onShow = event => {
//   event.preventDefault()
//   api.show()
//     .then(ui.onShowSuccess)
//     .catch(ui.onShowFailure)
// }
const onUpdate = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.update(formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onDelete = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.destroy(formData)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}
// //   if ($(event.target).html() === '<p>x</p>' || $(event.target).html() === '<p>o</p>' ||
// //       $(event.target).html() === 'x' || $(event.target).html() === 'o') {
// //     ui.onInvalidSpace()
// //   } else if (store.gameover === false) {
// //     if (store.step % 2 === 0) {
// //       $(event.target).append('<p>x</p>')
// //       store.step++
// //       player = 'x'
// //       const index = $(event.target).data('square')
// //       api.update(index, player)
// //         .then(response => ui.onUpdateSuccess(response, $(event.target)))
// //         .catch(ui.onUpdateFailure)
// //     } else {
// //       $(event.target).append('<p>o</p>')
// //       store.step++
// //       player = 'o'
// //       const index = $(event.target).data('square')
// //       api.update(index, player)
// //         .then(response => ui.onUpdateSuccess(response, $(event.target)))
// //         .catch(ui.onUpdateFailure)
// //     }
// //   }
// }

// list event listeners and event handlers below:
const addHandlers = event => {
  $('#create').on('submit', onCreate)
  $('#index').on('submit', onIndex)
  // $('#show').on('submit', onShow)
  $('#change-car').on('submit', onUpdate)
  $('#delete-car').on('submit', onDelete)
}
module.exports = {
  addHandlers
}
