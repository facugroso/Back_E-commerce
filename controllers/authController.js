const bcrypt = require("bcryptjs");
const { User, Admin } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function tokenCustomer(req, res, next) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      return res.json("credenciales inválidas");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.json("credenciales inválidas");
    }
    const token = jwt.sign({ user }, process.env.SECRET_USER);
    return res.json({ ...user, token, role: "customer" });
  } catch (error) {
    return next(error);
  }
}

async function tokenAdmin(req, res, next) {
  console.log(req.body);
  try {
    const admin = await Admin.findOne({
      where: { email: req.body.email },
    });
    if (!admin) {
      return res.json("email inválido");
    }
    const match = await bcrypt.compare(req.body.password, admin.password);
    if (!match) {
      return res.json("credenciales inválidas");
    }
    const token = jwt.sign({ admin }, process.env.SECRET_ADMIN);
    return res.json({ ...admin, token, role: "admin" });
  } catch (error) {
    return next(error);
  }
}

module.exports = { tokenCustomer, tokenAdmin };
