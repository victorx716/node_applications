require('../src/db/mongoose')

const User = require('../src/models/user')
const Task = require('../src/models/task')
// 5d9bc45870c8742e688f5ee3

// User.findByIdAndUpdate('5d9bd5b201236a0dc8aa14bc', {age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age})
//   const count = await User.countDocuments({ age})
//   return count
// }

// updateAgeAndCount('5d9bd5b201236a0dc8aa14bc', 2).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })


const deleteTaskAndCount = async (id, complete) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ complete})
  return count
}

deleteTaskAndCount("5d9be4447ad9751870a7b692", false).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})