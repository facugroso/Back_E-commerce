const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

// const Order = require("./Order");
// const Category = require("./Category");
const Product = require("./Product");
// const User = require("./User");

// Order.initModel(sequelize);
// Category.initModel(sequelize);
Product.initModel(sequelize);
// User.initModel(sequelize);

// Category.hasMany(Product);
// Product.belongsTo(Category);

// User.hasMany(Order);
// Order.belongsTo(User);

module.exports = {
  sequelize,
  // User,
  Product,
  // Category,
  // Order,
};
