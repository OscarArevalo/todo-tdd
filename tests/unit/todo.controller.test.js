const httpMocks = require('node-mocks-http');

const todoController = require('../../controllers/todo.controller');
const todoModel = require('../../model/todo.model');
const newTodo = require('../mock-data/new-todo.json');

todoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe('todoController.modules.createTodo', () => {
    beforeEach(() => {
        req.body = newTodo;
    });

    it('Debe de tener una funcion createTodo', () => {
        expect(typeof todoController.createTodo).toBe("function");
    });

    it('Debe de llamar a todoModel.create', () => {           
        todoController.createTodo(req, res, next);
        expect(todoModel.create).toBeCalledWith(newTodo);
    });

    it('Servicio deberia de responder 201', async () => {
        await todoController.createTodo(req, res, next)
        expect(res.statusCode).toBe(201);
    });

    it('Servicio deberia de retornar JSON en el body del response', async () =>{
        todoModel.create.mockReturnValue(newTodo);
        await todoController.createTodo(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    })
}); 

describe('todoController.modules.suma', () => {
    it('Resultado de la suma debe ser 5', () => {
        expect(todoController.suma(2, 3)).toBe(5);
    });
})

