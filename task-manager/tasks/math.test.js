const {calculateTip, celsiusToFahrenheit, fahrenheitToCelsius} = require('../src/math')

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