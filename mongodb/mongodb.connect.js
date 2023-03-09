const mongoose = require('mongoose');

async function connect (){
    try {
        //const conn = await mongoose.connect('mongodb://user:password@localhost:9090/todo-tdd');
        const conn = await mongoose.connect('mongodb+srv://zetatest:5mMBr5hRFy6Hqil1@cluster0.lgaixna.mongodb.net/todo-tdd?retryWrites=true&w=majority');
        return conn;
        /**
            const db = mongoose.connection;
            db.on("error", console.error.bind(console, "connection error: "));
            db.once("open", function () {
                console.log("Connected successfully");
            });
        */
    } catch  (err) {
        console.error('Error connecting to mongodb');
        console.error(err);
    }    
}

module.exports = {connect};

