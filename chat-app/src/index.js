const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)
const Filter = require('bad-words')

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')))

io.on('connection', (socket) => {

  socket.emit('message', 'welcome!')

  socket.broadcast.emit('message', 'a new user joined')

  socket.on('sendMessage', (message, cb) => {
    const filter = new Filter()

    if (filter.isProfane(message)) {
      return cb('profanity detected')
    }
    io.emit('message', message)
    cb()
  })

  socket.on('disconnect', () => {
    io.emit('message', 'user has left the chat')
  })

  socket.on('sendLocation', (location, cb) => {
    io.emit('message', `https://google.com/maps?q=${location.latitude},${location.longitude}` )
    cb()
  })
})

server.listen(port, () => console.log('Chat app listening on port ' + port))
