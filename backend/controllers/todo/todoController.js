
const Todo = require('../../models/Todo');

// GET /todos
const getTodos = async (req, res, next) => {
  Todo.find()
  .then((todos) => {
      res.status(200).json(todos);
      console.log(todos);
  })
  .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
      console.log(error);
  });
};

// POST /todos
const createTodo = (req, res) => {
  const { userId, title, description, dueDate, priority, isCompleted } = req.body;
  console.log(req.body);
  const todo = new Todo({
    userId,
    title,
    description,
    dueDate,
    priority,
    isCompleted,
  });

  todo.save()
    .then((savedTodo) => {
      res.status(201).json(savedTodo);
      console.log(savedTodo);
    })
    .catch((error) => {
      console.log("Error saving todo: ", error);
      res.status(500).json({ error: 'Internal server error' });
    });
};


// PUT /todos/:id
const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { dueDate, isCompleted, priority } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { dueDate, isCompleted, priority},
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (err) {
    next(err);
  }
};

// DELETE /todos/:id
const deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete(id)
      .then((todo) => {
          res.status(200).json(todo);
      })
      .catch((error) => {
          res.status(500).json({ error: 'Internal server error' });
          console.log(error);
      });
};

const getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoById
};