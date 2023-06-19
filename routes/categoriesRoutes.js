const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/", categoryController.store);
router.delete("/:id", categoryController.destroy);
router.patch("/:id", categoryController.update);

module.exports = router;
