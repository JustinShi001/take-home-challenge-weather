'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')
// let player = 'x'

const onCreateApp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createApp(formData)
    .then(ui.onAppCreateSuccess)
    .catch(ui.onAppCreateFailure)
}

const onIndexApp = event => {
  event.preventDefault()
  console.log('onIndexApp')
  api.indexApp()
    .then(ui.onAppIndexSuccess)
    .catch(ui.onAppIndexFailure)
}
// const onShow = event => {
//   event.preventDefault()
//   api.show()
//     .then(ui.onShowSuccess)
//     .catch(ui.onShowFailure)
// }
const onUpdateApp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.updateApp(formData)
    .then(ui.onAppUpdateSuccess)
    .catch(ui.onAppUpdateFailure)
}

const onDeleteApp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.destroyApp(formData)
    .then(ui.onAppDestroySuccess)
    .catch(ui.onAppDestroyFailure)
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
  $('#create_appointment').on('submit', onCreateApp)
  $('#index_appointment').on('submit', onIndexApp)
  // $('#show').on('submit', onShow)
  $('#change_appointment').on('submit', onUpdateApp)
  $('#delete_appointment').on('submit', onDeleteApp)
}
module.exports = {
  addHandlers
}
