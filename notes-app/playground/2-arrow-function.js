// const square = (x) => x * x;

// console.log(square(2))
// arrow functions don't bind this
// not well suited for method function properties

// alternative syntax is function() { {...} }

const event = {
  nam: 'birthday party',
  guestList: ['vic', 'jeff', 'grace', 'mary'],
  printGuestList() {
    console.log('guest list for ' + this.nam)
    this.guestList.forEach((guest) => {
      console.log(guest + ' is going to the birthday party')
    })
  }
}

// event.printGuestList()