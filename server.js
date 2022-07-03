const express = require('express');
require ('dotenv').config();
const app = express();

app.get("/", (req, res, next) => {
    res.json({message: "Did you get this?"});
})


//middleware modules
app.use((req, res, next) => {
    const error = new Error("Not Found!");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
})

app.listen(process.env.port, () => console.log('Starting server on port ' + process.env.port));