const todoModel = require('../model/todo.model');

const suma = (a, b) => a + b;

const createTodo = async (req, res, next) => {
    const createModel = await todoModel.create(req.body);
    res.status(201).json(createModel);
    res.send();
};

module.exports = {
    suma: suma,
    createTodo: createTodo
}
