const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () =>{
    console.log(`Server corriendo en el puerto ${port}`.green);
});

const todoRoutes = require('./routes/todo.routes.js');
todoRoutes(app);

const mongodb = require('./mongodb/mongodb.connect');
mongodb.connect().then((conn) =>{
    const db = conn.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
});

module.exports = app;