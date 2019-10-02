let request = require('request')
const url = 'https://api.darksky.net/forecast/2767004c39941983ab728943b9720534/37.8267,-122.4233'
request(url, (error, response, body) => {
  console.log('error: ', error)
  console.log('statuscode: ', response && response.statusCode)
  console.log('body', body)
})