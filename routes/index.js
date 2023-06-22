const publicRoutes = require("./publicRoutes");
const productsRoutes = require("./productsRoutes");
const categoriesRoutes = require("./categoriesRoutes");
const usersRoutes = require("./usersRoutes");
const adminRoutes = require("./adminRoutes");
const ordersRoutes = require("./ordersRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/products", productsRoutes);
  app.use("/categories", categoriesRoutes);
  app.use("/users", usersRoutes);
  app.use("/admin", adminRoutes);
  app.use("/orders", ordersRoutes);
  app.use("/", authRoutes);
};
