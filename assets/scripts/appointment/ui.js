'use strict'
const store = require('../store')
const showAppointmentTemplate = require('../templates/appointment-listing.handlebars')

// const api = require('./api')
// const gameLogic = require('../logic')
// let counter = 0

const onAppSuccess = (appointmentMessage) => {
  // $('#appointmentMessage').removeClass('failure')
  // $('#appointmentMessage').addClass('success')
  $('#appointmentMessage').text(appointmentMessage)
  $('form').trigger('reset')
}
const onAppFailure = appointmentMessage => {
  // $('#appointmentMessage').removeClass('success')
  // $('#appointmentMessage').addClass('failure')
  $('#appointmentMessage').text(appointmentMessage)
  $('form').trigger('reset')
}

const onAppCreateSuccess = (response) => {
  store.appointment = response.appointment
  onAppSuccess('You successfully created an appointment!')
  console.log(response)
  $('.container').show()
  // $('p').remove()
  $('.box').addClass('alt-color')
}
const onAppCreateFailure = (response) => {
  onAppFailure('Rut roh... somgthing went wrong! try again')
}

const onAppIndexSuccess = (response) => {
  store.appointments = response.appointments
  console.log(store.appointments)
  $('.content2').show()
  const showAppointmentHtml = showAppointmentTemplate({ appointments: response.appointments })
  $('.content2').html(showAppointmentHtml)
}
const onAppIndexFailure = (response) => {
  onAppFailure('Rut roh... somgthing went wrong! try again')
}
const onAppUpdateSuccess = (response) => {
  console.log(response)
  store.appointment = response.appointment
  onAppSuccess('Your updated an appointment!')
  $('.content').hide()
}
const onAppUpdateFailure = (response) => {
  onAppFailure('Rut roh... somgthing went wrong! try again')
}
const onAppDestroySuccess = (response) => {
  onAppSuccess('Your just deleted an appointment!')
  $('.content').hide()
}
const onAppDestroyFailure = (response) => {
  onAppFailure('Rut roh... somgthing went wrong! try again')
}

module.exports = {
  onAppCreateSuccess,
  onAppCreateFailure,
  onAppIndexSuccess,
  onAppIndexFailure,
  // onShowSuccess,
  // onShowFailure
  onAppUpdateSuccess,
  onAppUpdateFailure,
  onAppDestroySuccess,
  onAppDestroyFailure
}
