const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: { type: DataTypes.STRING },
        image: {
          type: DataTypes.JSON,
        },
        // slug: {
        //   type: DataTypes.STRING(255),
        // },
      },
      {
        sequelize,
        modelName: "category",
      }
    );
    return Category;
  }
}

module.exports = Category;
