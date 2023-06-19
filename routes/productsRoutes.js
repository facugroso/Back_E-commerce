const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/", productController.store);
router.delete("/:id", productController.destroy);
router.patch("/:id", productController.update);
// router.post("/", productController.store);
// router.get("/:id", productController.show);
// router.get("/:id/editar", productController.edit);

module.exports = router;
