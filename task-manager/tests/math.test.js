const {calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add} = require('../src/math')

test('should calculate the right amount of tip', () => {
  const total = calculateTip(10, .3)
  
  expect(total).toBe(13)
  // if (total !== 13) {
  //   throw new Error('total tip should be dirteen. got ' + total)
  // }
})

test('should convert 32f to 0 c', () => {
  expect(fahrenheitToCelsius(32)).toBe(0)
})

test('should convert 0 c to 32 f', () => {
  expect(celsiusToFahrenheit(0)).toBe(32)
})


// test('async test demo', (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2)
//     done()
//   }, 2000)
// })

test('should add 2 numbers', (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5)
    done()
  })
})

test('should add 2 numbers async await', async () => {
  const sum = await add(10, 22)
  expect(sum).toBe(32)
})