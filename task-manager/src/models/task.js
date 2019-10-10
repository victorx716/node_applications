const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true
  },
  complete: {
    type: Boolean,
    required: false,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task