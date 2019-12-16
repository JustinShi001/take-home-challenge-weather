'use strict'

const store = require('../store')
const config = require('../config')

const createApp = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/appointments',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const indexApp = formData => {
  console.log(store.appointments)
  return $.ajax({
    url: config.apiUrl + '/appointments',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const updateApp = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/appointments' + '/' + formData.appointment.id,
    method: 'PATCH',
    headers: {Authorization: `Token token=${store.user.token}`},
    data: formData
  })
}
const destroyApp = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/appointments' + '/' + formData.appointment.id,
    method: 'DELETE',
    headers: {Authorization: `Token token=${store.user.token}`}
  })
}

module.exports = {
  createApp,
  indexApp,
  // show
  updateApp,
  destroyApp
  // updateGameStatus
}
