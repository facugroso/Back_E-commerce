const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");

router.get("/products", productController.index);
router.get("/products/:id", productController.show);
router.get("/users/:id", userController.show);
router.post("/users", userController.store);

module.exports = router;
