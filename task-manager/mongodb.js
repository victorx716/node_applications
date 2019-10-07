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

  // db.collection('users').deleteMany({
  //   age: 21
  // }).then((result) => {
  //   console.log(result)
  // }).catch((err) => {
  //   console.log(err)
  // })

  db.collection('tasks').deleteOne({
    task: "finish react course"
  }).then((result) => {
    console.log(result)
  }).catch((err) => {
    console.log(err)
  })
})