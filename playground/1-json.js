const fs = require('fs')

// const book = {
//   title: 'vic',
//   author: 'grace'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()

// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
let dataObject = JSON.parse(dataJSON)
dataObject.name = "Victor"
dataObject.age = 24
let Object = JSON.stringify(dataObject)
fs.writeFileSync('1-json.json', Object)
// 1. read the string from other File
// 2. convert buffer to a string
// 3. parse the string into object
// 4. switch object info
// 5. stringify the object
// 6. write the new object