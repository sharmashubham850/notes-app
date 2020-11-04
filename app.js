const yargs = require('yargs');
const notes = require('./notes');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true,
            alias: 't'
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandOption: true,
            alias: 'b'
        }
    },
    handler({ title, body }) {
        notes.addNote(title, body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true,
            alias: 't'
        }
    },
    handler({ title }) {
        notes.removeNote(title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true,
            alias: 't'
        }
    },
    handler({ title }) {
        notes.readNote(title)
    }
})

yargs.parse();