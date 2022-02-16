// const express = require("express");
import express from "express";

import { showProducts } from "../controllers/product.js";

const router = express.Router();

// Get all products
router.get("/products", showProducts);

export default router;
//module.exports = router;