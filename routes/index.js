const publicRoutes = require("./publicRoutes");
const productsRoutes = require("./productsRoutes");

module.exports = (app) => {
  app.use("/", publicRoutes);
  app.use("/products", productsRoutes);
};
