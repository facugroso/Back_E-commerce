const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

router.use(
  checkJwt({ secret: process.env.SECRET_ADMIN, algorithms: ["HS256"] })
);

router.get("/", adminController.index);
router.get("/:id", adminController.show);
router.post("/", adminController.store);
router.patch("/:id", adminController.update);
router.delete("/:id", adminController.destroy);

module.exports = router;
