const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'your notes'
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen('New note added'))
  } else {
    console.log(chalk.bgRed('note title already taken'))
  }
}

const removeNote = (title) => {
  console.log(title)
  let notes = loadNotes();
  let filteredNotes = notes.filter((note) =>  note.title !== title )
  if (notes.length === filteredNotes.length) {
    console.log(chalk.bgRed('No note found!'))
  } else {
    saveNotes(filteredNotes)
    console.log(chalk.bgGreen('Note removed!'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = { getNotes, addNote, removeNote };