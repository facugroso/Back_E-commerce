const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/tokenUser", authController.tokenCustomer);
router.post("/tokenAdmin", authController.tokenAdmin);

module.exports = router;
