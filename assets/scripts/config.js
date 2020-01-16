'use strict'

let apiUrl
const apiUrls = {
  production: ' https://openweathermap.org/api',
  development: ' https://openweathermap.org/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
