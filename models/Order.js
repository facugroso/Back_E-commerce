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
        firstname: { type: DataTypes.STRING },
        lastname: { type: DataTypes.STRING },
        address: {
          type: DataTypes.JSON,
        },
        phone: { type: DataTypes.STRING },
        payment: {
          type: DataTypes.ENUM(["MercadoPago", "Crédito", "PayPal"]),
        },
        paymentdata: {
          type: DataTypes.JSON,
        },
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
