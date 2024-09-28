const express = require('express');
const router = express.Router();

const JournalController = require('../../controllers/journals/journalsController.js');
const verifyToken = require('../../middleware/auth/verifyToken.js');

router.post('/createJournal', verifyToken, JournalController.createJournal);
router.delete('/deleteJournal/:id', JournalController.deleteJournal);
router.get('/journals', JournalController.getJournals);
router.get('/journals/:id', JournalController.getJournalById);
router.put('/updateJournal/:id', JournalController.updateJournal);

module.exports = router;

