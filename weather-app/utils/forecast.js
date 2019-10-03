const request = require('request')

const forecast = (latitude, longitude, cb) => {
  const url = 'https://api.darksky.net/forecast/2767004c39941983ab728943b9720534/' + latitude + ',' + longitude
  request({url, json: true}, (err, { body }) => {
    if (err) {
      cb('Unable to connect to weather service', undefined)
    } else if (body.err) {
      cb('No location found', undefined)
    } else {
      cb(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }

  })

}

module.exports = forecast;