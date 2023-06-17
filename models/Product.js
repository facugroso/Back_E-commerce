const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: { type: DataTypes.STRING(255) },
        image: {
          type: DataTypes.JSON,
        },
        gallery: {
          type: DataTypes.JSON,
        },
        descriptiontitle: {
          type: DataTypes.TEXT,
        },
        description: {
          type: DataTypes.TEXT,
        },
        features: {
          type: DataTypes.JSON,
        },
        stock: {
          type: DataTypes.BIGINT,
        },
        trending: {
          type: DataTypes.BOOLEAN,
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
        },
        slug: {
          type: DataTypes.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "product",
      }
    );
    return Product;
  }
}

module.exports = Product;
