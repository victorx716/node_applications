const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// add, remove, read, list (the notes)
console.log(process.argv)
console.log(yargs.argv)