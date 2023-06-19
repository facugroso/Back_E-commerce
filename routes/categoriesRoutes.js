const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(
  checkJwt({ secret: process.env.SECRET_ADMIN, algorithms: ["HS256"] })
);

router.post("/", categoryController.store);
router.delete("/:id", categoryController.destroy);
router.patch("/:id", categoryController.update);

module.exports = router;
