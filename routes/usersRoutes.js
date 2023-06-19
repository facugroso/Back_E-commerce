const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(
  checkJwt({ secret: process.env.SECRET_ADMIN, algorithms: ["HS256"] })
);

router.get("/", userController.index);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
