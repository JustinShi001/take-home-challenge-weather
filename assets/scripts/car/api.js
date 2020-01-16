'use strict'

const store = require('../store')
const config = require('../config')

const index = formData => {
  // console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/store.location',
    method: 'GET',
    headers: {
    },
    // console.log
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

module.exports = {
  index
  // show
}
