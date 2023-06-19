const publicRoutes = require("./publicRoutes");
const productsRoutes = require("./productsRoutes");
const categoriesRoutes = require("./categoriesRoutes");
const usersRoutes = require("./usersRoutes");
const adminRoutes = require("./adminRoutes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/products", productsRoutes);
  app.use("/category", categoriesRoutes);
  app.use("/users", usersRoutes);
  app.use("/admin", adminRoutes);
  // app.use("order")
};
