const Note = require('../../models/Note');

const createNote = (req, res) => {
    const { userId, title, content, tags } = req.body;
    console.log(req.body);
    const newNote = new Note({
        userId,
        title,
        content,
        tags,
    });
    newNote.save()
        .then((note) => {
            res.status(201).json(note);
            console.log(note);
        })
        .catch((error) => {
            console.log("error saving note: ",error);
            res.status(500).json({ error: 'Internal server error' });
        });
};

const deleteNote = (req, res) => {
    const { id } = req.params;
    Note.findByIdAndDelete(id)
        .then((note) => {
            res.status(200).json(note);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
            console.log(error);
        });
};

const getNotes = (req, res) => {
    Note.find()
        .then((notes) => {
            res.status(200).json(notes);
            console.log(notes);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
            console.log(error);
        });
};

const getNoteById = (req, res) => {
    const { id } = req.params;
    Note.findById(id)
        .then((note) => {
            if (!note) {
                return res.status(404).json({ error: 'Note not found' });
            }
            res.status(200).json(note);
            console.log(note);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
            console.log(error);
        });
};


const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;

  // Find the note to update
  Note.findById(id)
    .then((note) => {
      // If the note is not found, return a 404 error
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }

      // Update the note fields
      note.title = title;
      note.content = content;
      note.tags = tags;

      // Save the updated note
      note.save()
        .then(() => {
          // Return the updated note to the client
          res.status(200).json(note);
        })
        .catch((error) => {
          // Return a 500 error if something went wrong
          res.status(500).json({ error: 'Internal server error' });
        });
    })
    .catch((error) => {
      // Return a 500 error if something went wrong
      res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
    createNote,
    deleteNote,
    getNotes,
    getNoteById,
    updateNote,
};

