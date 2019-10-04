const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

// Define the paths for Express.js config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up Handlebars.js engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Vic Liu',
    footer: 'created by vicNYC'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Kyle',
    footer: 'about by vicNYC'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    name: 'Vic',
    footer: 'help by vicNYC'
  })
})
const port = process.env.port || 3000;

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Sunny with a chance of meatballs',
    location: 'Brooklyn, New York',
    footer: 'weather by vicNYC'
  })
})

app.get('/help/*', (req, res) => {
  res.render('error', {
    error: "we couldn't find the help article :(",
    title: '404'
  })
})

app.get('*', (req, res) => {
  res.render('error', {
    error: "Sorry about that- we couldn't find the page you were looking for",
    title: '404'
  })
})


app.listen(port, () => console.log(`Server is listening on port ${port}`));