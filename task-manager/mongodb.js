const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to database')
  }
  const db = client.db(dbName)

  // db.collection('users').findOne({_id: new ObjectID("5d9b8b558576064de46d25b9")}, (err, user) => {
  //   if (err) {
  //     return console.log('could not find user')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 22 }).toArray( (err, users) => {
  //   if (err) {
  //     return console.log('no users')
  //   }
  //   console.log(users)
  // })
  // db.collection('tasks').findOne({ _id: new ObjectID("5d9b90c8a5f7245488def3e9")}, (err, task) => {
  //   if (err) {
  //     return console.log('could not find task')
  //   }
  //   console.log(task)
  // })
  
  db.collection('tasks').find({ "completed": false}).toArray((err, tasks) => {
    if (err) {
      return console.log('no tasks')
    }
    console.log(tasks)
  });
})