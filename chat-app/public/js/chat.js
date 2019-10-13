const socket = io()

// elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $messages = document.querySelector('#messages')

// templates
const messageTemplate = document.querySelector('#message-template').innerHTML

socket.on('message', (message) => {
  console.log(message)
  const html = Mustache.render(messageTemplate)
  $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (e) => {
  e.preventDefault()
  $messageFormButton.setAttribute('disabled', 'disabled')
  const message = e.target.elements.message.value

  socket.emit('sendMessage', message, (error) => {
    $messageFormButton.removeAttribute('disabled', 'disabled')
    $messageFormInput.value = ''
    $messageFormInput.focus()
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