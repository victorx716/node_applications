const path = require('path')

const express = require('express')
const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Vic Liu'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Kyle'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page'
  })
})
const port = process.env.port || 3000;

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny with a chance of meatballs',
    location: 'Brooklyn, New York'
  })
})



app.listen(port, () => console.log(`Server is listening on port ${port}`));