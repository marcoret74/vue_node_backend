import mysql from "mysql2";
//const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "passw0rd",
    database: "demo_db"
});

export default db;
//module.exports = db;