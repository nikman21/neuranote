const express = require('express');
const cors = require('cors');
const verifyToken = require('./middleware/auth/verifyToken.js');


require('dotenv').config();

const port = process.env.PORT || 3001;
const app = express();

const mongoose = require('mongoose');

const noteRoutes = require('./routes/notes/notes.js');
const userRoutes = require('./routes/users/users.js');
const loginRoutes = require('./routes/auth/auth.js');
const todoRoutes = require('./routes/todo/todos.js');
const journalRoutes = require('./routes/journals/journals.js');




mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({
    origin: [process.env.FRONTEND_URL || 'http://localhost:3000'],
}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/notes',  noteRoutes);
app.use('/api/users',  userRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/journals', journalRoutes);





app.use((req, res, next) => {
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

app.get('/', (req, res) => {
    res.send('Connected to the database successfully!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});


