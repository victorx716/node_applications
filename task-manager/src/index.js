require('./db/mongoose')
const express = require('express')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})

// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const myFunction = async () => { 
  const token = jwt.sign({ _id: 'abc123'}, 'thisismyVICNYC', { expiresIn: '7 days'})
  console.log(token)

  const data = jwt.verify(token, 'thisismyVICNYC')
  console.log(data)
}

myFunction()

