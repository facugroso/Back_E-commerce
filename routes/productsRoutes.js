const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(
  checkJwt({ secret: process.env.SECRET_ADMIN, algorithms: ["HS256"] })
);

router.post("/", productController.store);
router.delete("/:slug", productController.destroy);
router.patch("/:slug", productController.update);

module.exports = router;
