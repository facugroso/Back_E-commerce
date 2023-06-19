const publicRoutes = require("./publicRoutes");
const productsRoutes = require("./productsRoutes");
const categoriesRoutes = require("./categoriesRoutes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/products", productsRoutes);
  app.use("/category", categoriesRoutes);
  // app.use("order")
};
