const express = require('express');
require ('dotenv').config();
const app = express();

app.get("/45", (req, res, next) => {
    res.json({
        message: "Using GET/45",
        metadata: {
            host: req.hostname,
            port: process.env.PORT,
            method: req.method,
        }
    });
})

app.get("/",(req, res, next) => {
    res.json({
        message: "Using GET/",
        metadata: {
            host: req.hostname,
            port: process.env.PORT,
            method: req.method,
        }
    });
})

// post, patch, delete
app.post("/",(req, res, next) => {
    res.json({
        message: "Using POST/",
        metadata: {
            host: req.hostname,
            port: process.env.PORT,
            method: req.method,
        }
    });
})

app.patch("/89",(req, res, next) => {
    res.json({
        message: "Using PATCH/89",
        metadata: {
            host: req.hostname,
            port: process.env.PORT,
            method: req.method,
        }
    });
})

app.delete("/9",(req, res, next) => {
    res.json({
        message: "Using DELETE/9",
        metadata: {
            host: req.hostname,
            port: process.env.PORT,
            method: req.method,
        }
    });
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