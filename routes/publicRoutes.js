const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/products", productController.index);
router.get("/products/:id", productController.show);
// router.post("/", userController.store);
// router.get("/:id", userController.show);
// router.get("/:id/editar", userController.edit);

module.exports = router;
