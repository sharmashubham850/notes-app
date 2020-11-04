const fs = require('fs');


function getNotes() {
    console.log('Getting Notes...')
}

function addNote(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    if (duplicateNote) {
        console.log("Sorry...Note title taken!")
        return
    }

    notes.push({
        title,
        body
    });

    saveNotes(notes)
    console.log("Note added :)")
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
    addNote
}