const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/", productController.store);
router.delete("/:id", productController.destroy);
router.patch("/:id", productController.update);

module.exports = router;
