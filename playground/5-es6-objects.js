//object property shorthand

const name = 'Vic'
const userAge = 24;

const user = {
  name,
  userAge,
  location: 'NYC'
}

console.log(user)

// obj destructuring

const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

// const { var1, var2, var3 } = objToBeDestructured

// const { label, price, stock, salePrice} = product

// console.log(label)
// console.log(stock)
const transaction = (type, { label, stock }) => {
  console.log( type, label, stock)
}

transaction('order', product)