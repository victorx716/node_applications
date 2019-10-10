require('./db/mongoose')
const express = require('express')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {

    if (file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Upload only PDFs'))
    }
    cb(undefined, true)

    // cb(new Error('File must be a PDF'))
    // cb(undefined, true)
    // cb(undefined, false)
  }
})

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
})

// app.post('/users/me/avatar', upload.single('upload'), (req, res) => {
//   res.send()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})
