const express = require('express');
const router = express.Router();
const TodoController = require('../../controllers/todo/todoController.js');
const verifyToken = require('../../middleware/auth/verifyToken.js');

router.post('/createTodo',verifyToken ,TodoController.createTodo);
router.delete('/deleteTodo/:id', TodoController.deleteTodo);
router.get('/todos', TodoController.getTodos);
router.get('/todos/:id', TodoController.getTodoById);
router.put('/updateTodo/:id', TodoController.updateTodo);

module.exports = router;