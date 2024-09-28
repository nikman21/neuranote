const Journal = require('../../models/Journal');

const createJournal = (req, res) => {
    const { userId, title, content, tags } = req.body;

    const newJournal = new Journal({
        userId,
        title,
        content,
        tags,
    });

    newJournal.save()
        .then((journal) => {
            res.status(201).json(journal);
            console.log(journal);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
            console.log(error);
        });
};

const deleteJournal = (req, res) => {
    const { id } = req.params;
    Journal.findByIdAndDelete(id)
        .then((journal) => {
            res.status(200).json(journal);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
        });
};

const getJournals = (req, res) => {
    Journal.find()
        .then((journals) => {
            res.status(200).json(journals);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
        });
};

const getJournalById = (req, res) => {
    const { id } = req.params;
    Journal.findById(id)
        .then((journal) => {
            if (!journal) {
                return res.status(404).json({ error: 'Journal not found' });
            }
            res.status(200).json(journal);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
        });
};

const updateJournal = (req, res) => {
    const { id } = req.params;
    const { title, content, tags } = req.body;

    Journal.findById(id)
        .then((journal) => {
            if (!journal) {
                return res.status(404).json({ error: 'Journal not found' });
            }

            journal.title = title;
            journal.content = content;
            journal.tags = tags;

            journal.save()
                .then(() => {
                    res.status(200).json(journal);
                })
                .catch((error) => {
                    res.status(500).json({ error: 'Internal server error' });
                });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
        });
};

module.exports = {
    createJournal,
    deleteJournal,
    getJournals,
    getJournalById,
    updateJournal,
};
