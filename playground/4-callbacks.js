const doWorkCallback = (cb) => {
  setTimeout(() => {
    // cb('this is the error', undefined)
    cb(undefined, [88])
  }, 2000)
}

doWorkCallback((err, result) => {
  if (err) {
    return console.log(err)
  }

  console.log(result)
})