const router = require('./routes.js')
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 5000;
mongoose.connect("mongodb+srv://artificialanimations:Stockxonsteroids69@cluster0.bnmq0qo.mongodb.net/ValoShi?retryWrites=true&w=majority")

.then(() => {
    const app = express();
   
    app.use(cors())
    app.use(express.json());
    app.use('/', router); 

    app.listen(port, () => {
        console.log(`Server is lit at ${port}`)
    });

});

