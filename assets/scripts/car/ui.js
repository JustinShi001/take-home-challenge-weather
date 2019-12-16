'use strict'
const store = require('../store')
const showFavcarTemplate = require('../templates/favcar-listing.handlebars')

// const api = require('./api')
// const gameLogic = require('../logic')
// let counter = 0

const onSuccess = (carMessage) => {
  $('#carMessage').removeClass('failure')
  $('#carMessage').addClass('success')
  $('#carMessage').text(carMessage)
  $('form').trigger('reset')
}

// const onEnding = carMessage => {
//   $('#carMessage').removeClass('failure')
//   $('#carMessage').addClass('success')
//   $('#carMessage').text(carMessage)
//   store.game.over = true
//   store.gameover = true
//   counter = 0
//   api.updateGameStatus()
// }
// const onInvalid = carMessage => {
//   $('#carMessage').text(carMessage)
// }
// const onInvalidSpace = () => {
//   onInvalid('Invalid Cell. Please click an empty cell.')
// }

const onFailure = carMessage => {
  $('#carMessage').removeClass('success')
  $('#carMessage').addClass('failure')
  $('#carMessage').text(carMessage)
  $('form').trigger('reset')
}

const onCreateSuccess = (response) => {
  store.favcar = response.favcar
  // store.gameover = false
  // store.step = 0
  // counter = 0
  onSuccess('You successfully created a favorite car!')
  // console.log(response)
  $('.container').show()
  $('p').remove()
  $('.box').addClass('alt-color')
}

const onCreateFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onIndexSuccess = (response) => {
  store.favcars = response.favcars
  // console.log(response)
  $('.content').show()
  const showFavcarHtml = showFavcarTemplate({ favcars: response.favcars })
  $('.content').html(showFavcarHtml)
}
const onIndexFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}
// const onShowSuccess = (response) => {
//   store.favcars = response.favcars
//   onSuccess(store.favcars[0].name)
// }
// const onShowFailure = (response) => {
//   onFailure('Rut roh... somgthing went wrong! try again')
// }
const onUpdateSuccess = (response) => {
  // console.log(response)
  store.favcar = response.favcar
  onSuccess('Your updated one of your favorite car!')
  $('.content').hide()
}
const onUpdateFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onDestroySuccess = (response) => {
  onSuccess('Your just destroyed one of your favorite car!')
  $('.content').hide()
}
const onDestroyFailure = (response) => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  // onShowSuccess,
  // onShowFailure
  onUpdateSuccess,
  onUpdateFailure,
  onDestroySuccess,
  onDestroyFailure
  // onInvalidSpace
}
