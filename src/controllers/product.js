import { getProducts } from "../models/productModel.js";
// const productModel = require("../models/productModel.js");

export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            res.json(results);
        }
    });
}