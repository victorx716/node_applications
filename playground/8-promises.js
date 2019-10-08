const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([88, 88])
    resolve([1, 2, 3])
  }, 2000)
})

doWorkPromise.then((data) => {
  console.log('success', data)
}).catch((error) => {
  console.log(error)
})