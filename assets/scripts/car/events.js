'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')
// let player = 'x'

const onIndex = event => {
  event.preventDefault()
  // console.log('onIndex')
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

// list event listeners and event handlers below:
const addHandlers = event => {
  // $('#create').on('submit', onCreate)
  $('#index').on('submit', onIndex)
  // $('#show').on('submit', onShow)
  // $('#change-car').on('submit', onUpdate)
  // $('#delete-car').on('submit', onDelete)
}
module.exports = {
  addHandlers
}
