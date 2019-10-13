const socket = io()

socket.on('message', (message) => {
  console.log(message)
})

// document.querySelector('#increment').addEventListener('click', () => {
//   console.log('Clicked')
//   socket.emit('increment')
// })
document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const message = e.target.elements.message.value

  socket.emit('sendMessage', message, (error) => {
    if (error) {
      return console.log(error)
    }
    console.log('msg delivered')
  })
})

document.querySelector('#send-location').addEventListener('click', () => {
   if (!navigator.geolocation) {
     return alert('geolocation not supported')
   }

   navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('sendLocation', {latitude: position.coords.latitude, longitude: position.coords.longitude}, (err) => {
      if (err) {
        return console.log(err)
      }
      console.log('loc delivered')
    })
   })
})