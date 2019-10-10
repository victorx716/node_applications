const express = require('express')
const Task = require('../models/task')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })
  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

// GET /tasks?completed=false
router.get('/tasks', auth, async (req, res) => {
  const match = {}
  if (req.query.complete) {
    match.complete = req.query.completed === 'true'
  }
  try {
    await req.user.populate({
      path: 'tasks',
      match,
      options: {
        limit: parseInt(req.query.limit)
      }
    })
    res.status(200).send(tasks)
  } catch (e) {
    res.status(404).send()
  }
})

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id
  try {
    // const task = await Task.findById(_id)
    const task = await Task.findOne({ _id, owner: req.user._id })

    res.status(200).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.patch('/tasks/:id', auth, async (req, res) => {

  const updates = Object.keys(req.body)
  const allowedUpdates = ['task', 'complete']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
  if (!isValidOperation) {
    return res.status(400).send({error: 'invalid updates'})
  }

  try {
    const task = await Task.findOne({_id: req.params.id, owner: req.user._id})

    if (!task) { res.status(404).send()}

    updates.forEach((update) => task[update] = req.body[update])
    await task.save()

    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

    if (!task) {
      res.status(404).send()
    }
    res.status(200).send(task)
  } catch(e) {
    res.status(500).send()
  }
})

module.exports = router;