const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: false,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})
// create a remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function () {
    console.log('removing the note')
  }
})

yargs.command({
  command: 'list',
  describe: 'listing all notes',
  handler: function () {
    console.log('..listing all notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'reading all notes',
  handler: function () {
    console.log('..reading all notes')
  }
})

yargs.parse()