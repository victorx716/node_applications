const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')))

let count = 0

io.on('connection', (socket) => {

  socket.emit('message', 'welcome!')

  socket.on('message', () => {
    io.emit('countUpdated', 'Welcome!')
  })
})

server.listen(port, () => console.log('Chat app listening on port ' + port))
