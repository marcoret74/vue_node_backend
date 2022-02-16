// const db = require("../config/db.js");
import db from "../config/db.js";

export const getProducts = (result) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.error(err);
            result(err, null);
        } else {
            result(results, null);
        }
    });
}