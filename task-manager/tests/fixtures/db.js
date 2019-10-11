const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userOneId = new mongoose.Types.ObjectId()

const userOne = {
  _id: userOneId,
  name: 'Joe',
  email: 'Joe@joeschmoe.com',
  password: 'mynameisnotjoe',
  tokens: [{
    token: jwt.sign({ _id: userOneId}, process.env.JWT_SECRET)
  }]
}

