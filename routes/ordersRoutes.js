const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

function checkUserRole(req, res, next) {
  checkJwt({ secret: process.env.SECRET_ADMIN, algorithms: ["HS256"] })(
    req,
    res,
    (error) => {
      if (error) {
        checkJwt({ secret: process.env.SECRET_USER, algorithms: ["HS256"] })(
          req,
          res,
          (error) => {
            if (error) {
              return res.status(401).json({ error: "Unauthorized" });
            }
            next();
          }
        );
      } else {
        next();
      }
    }
  );
}

router.get("/", orderController.index);

module.exports = router;
