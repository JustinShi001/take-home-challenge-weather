'use strict'

const store = require('../store')
const config = require('../config')

const create = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/favcars',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const index = formData => {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/favcars',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
// const show = formData => {
//   return $.ajax({
//     url: config.apiUrl + '/favcars' + '/' + store.favcar.id,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//       id: `ID=${store.favcars.id}`
//     },
//     data: formData
//   })
// }
const update = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/favcars' + '/' + formData.favcar.id,
    method: 'PATCH',
    headers: {Authorization: `Token token=${store.user.token}`},
    data: formData
    // {'favcars': {'id': store.favcars.id, 'name': store.favcars[id].name, 'year': store.favcars[id].year}}
  })
}
const destroy = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/favcars' + '/' + formData.favcar.id,
    method: 'DELETE',
    headers: {Authorization: `Token token=${store.user.token}`}
  })
}
// const updateGameStatus = () => {
//   return $.ajax({
//     url: config.apiUrl + '/games' + '/' + store.game.id,
//     method: 'PATCH',
//     headers: {Authorization: `Token token=${store.user.token}`},
//     data: {'game': {'over': true}}
//   })
// }
module.exports = {
  create,
  index,
  // show
  update,
  destroy
  // updateGameStatus
}
