const path = require('path')

const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.port || 3000;

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny with a chance of meatballs',
    location: 'Brooklyn, New York'
  })
})



app.listen(port, () => console.log(`Server is listening on port ${port}`));