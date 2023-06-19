const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/", categoryController.store);
router.delete("/:id", categoryController.destroy);
router.patch("/:id", categoryController.update);
// router.post("/", categoryController.store);
// router.get("/:id", categoryController.show);
// router.get("/:id/editar", categoryController.edit);

module.exports = router;
