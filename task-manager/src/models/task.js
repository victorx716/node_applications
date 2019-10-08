const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
  task: {
    type: String,
    required: true,
    trim: true
  },
  complete: {
    type: Boolean,
    required: false,
    default: false
  }
})

module.exports = Task