const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        adress: { type: DataTypes.STRING },
        products: {
          type: DataTypes.JSON,
        },
        status: {
          type: DataTypes.ENUM(["Sin pagar", "Pago", "Enviado", "Entregado"]),
        },
      },

      {
        sequelize,
        modelName: "order",
      }
    );
    return Order;
  }
}

module.exports = Order;
