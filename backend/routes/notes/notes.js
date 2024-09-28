const express = require('express');
const router = express.Router();
const NoteController = require('../../controllers/notes/notesController.js');
const verifyToken = require('../../middleware/auth/verifyToken.js');

router.post('/createNote',verifyToken ,NoteController.createNote);
router.delete('/deleteNote/:id', NoteController.deleteNote);
router.get('/notes', NoteController.getNotes);
router.get('/notes/:id', NoteController.getNoteById);
router.put('/updateNote/:id', NoteController.updateNote);

module.exports = router;





