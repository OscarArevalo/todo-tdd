const todoController = require('../controllers/todo.controller');

module.exports = (app) => {
    app.route('/todos/')
        .post(todoController.createTodo)
}
