// npm install mysql2 cors express body-parser nodemon
import db from "./config/db.js";
//const db = require("./config/db.js");

//const cors = require("cors");
import cors from "cors";
// const express = require("express");
import express from "express";
const app = express();
// const bodyParser = require("body-parser");
import bodyParser from "body-parser";

const port = 9001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const router = require("./routes/routes.js");
import router from "./routes/routes.js";


// routes
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/db", (req, res) => {
    db.query("select * from products", (err, results) => {
        console.info("HTTP GET /db");
        if (err) {
            console.error(err);
        } else {
            res.send(results);
        }
    });
});

app.post("/db", (req, res, next) => {
    db.query("INSERT INTO products (name, price) VALUES (?,?)", [req.body.name, req.body.price], (err, results) => {
        console.info("HTTP POST /db");
        if (err) {
            console.error(err);
            res.json({ message: "error" });
        } else {
            res.json(results);
        }
    })
});

app.use(router);

app.listen(port, () => { console.info("Server is running!", port) });