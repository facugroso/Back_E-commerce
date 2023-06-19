const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Rutas relacionadas a los usuarios:
// ...

router.post("/", productController.store);
router.delete("/:id", productController.destroy);
router.patch("/:id", productController.update);
// router.post("/", userController.store);
// router.get("/:id", userController.show);
// router.get("/:id/editar", userController.edit);

module.exports = router;
