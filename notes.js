const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    console.log('Getting Notes...')
}

function addNote(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    if (duplicateNote) {
        console.log(chalk.red.bold.inverse('Note title taken!'))
        return
    }

    notes.push({
        title,
        body
    });

    saveNotes(notes)
    console.log(chalk.green.bold.inverse('Note added!'))
}

function removeNote(title) {
    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.title === title)

    if (noteIndex === -1) {
        console.log(chalk.red.bold.inverse('No note found!'))
        return
    }
    notes.splice(noteIndex, 1);

    saveNotes(notes);
    console.log(chalk.green.bold.inverse('Note removed!'))
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes, null, 4)
    fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (err) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}