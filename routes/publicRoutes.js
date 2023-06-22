const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/products", productController.index);
router.get("/products/:id", productController.show);
router.get("/users/:id", userController.show);
router.post("/users", userController.store);

router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.show);

router.get(
  "/orders/:id",
  checkJwt({ secret: process.env.SECRET_USER, algorithms: ["HS256"] }),
  orderController.show
);
router.post(
  "/orders",
  // checkJwt({ secret: process.env.SECRET_USER, algorithms: ["HS256"] }),
  orderController.store
);

module.exports = router;
