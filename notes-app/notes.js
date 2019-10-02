const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'your notes'
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
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

const readNote = (title) => {
  let notes = loadNotes();
  let note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('No note found'))
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

const listNotes = () => {
  let notes = loadNotes()
  notes.forEach((note) => {
    console.log(chalk.green(note.title))
  })  
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}



module.exports = { 
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};