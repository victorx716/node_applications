const https = require('https')

const url = 'https://api.darksky.net/forecast/2767004c39941983ab728943b9720534/40,-88'

const request = https.request(url, (res) => {
  let data = ''

  res.on('data', (chunk) => {
    data = data + chunk.toString()
  
  })

  res.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

  res.on('error', (err) => {
    console.log('the error', err)
  })
})

request.end()