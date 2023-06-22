const { faker } = require("@faker-js/faker");
const { Order } = require("../models");

module.exports = async () => {
  const orders = [];
  orders.push(
    {
    adress:faker.address.streetAddress({ useFullAddress: true }),
    products: [{name:"HyperX Cloud III - Gaming Headset", price: 99.99 , quantity: 1 }],
     status: "Sin pagar",
     payment:"MercadoPago",
    userId: Math.floor(Math.random() * 8) + 1,
    },
    {
    adress:faker.address.streetAddress({ useFullAddress: true }),
    products: [{name:"HyperX Pulsefire Haste - Naruto Edition - Gaming Mouse", price: 59.99 , quantity: 2 }, {name:"HyperX Pulsefire Haste 2 - Wireless Gaming Mouse", price:89.99, quantity: 1}],
    status: "Enviado",
    payment:"PayPal",
    userId: Math.floor(Math.random() * 8) + 1,
    },
    {
    adress:faker.address.streetAddress({ useFullAddress: true }),
    products: [{name:"HyperX Pulsefire Haste 2 - Wireless Gaming Mouse", price:89.99, quantity: 1},{name: "HyperX Armada 27 QHD Gaming Monitor", price: "399.99", quantity: 1} ],
    status: "Enviado",
    payment:"PayPal",
    userId: Math.floor(Math.random() * 8) + 1,
    },
    {
    adress:faker.address.streetAddress({ useFullAddress: true }),
    products: [{name: "HyperX Armada 27 QHD Gaming Monitor", price: "399.99", quantity: 1} ],
    status: "Entregado",
    payment:"Crédito",
    userId: Math.floor(Math.random() * 8) + 1,
    },
    {
    adress:faker.address.streetAddress({ useFullAddress: true }),
    products: [{name:"HyperX Pulsefire Haste - Naruto Edition - Gaming Mouse", price: 59.99 , quantity: 1 }],
    status: "Pago",
    payment:"MercadoPago",
    userId: Math.floor(Math.random() * 8) + 1,
    },
    {
    adress:faker.address.streetAddress({ useFullAddress: true }),
    products: [{name:"HyperX Pulsefire Haste - Naruto Edition - Gaming Mouse", price: 59.99 , quantity: 1 }, {name: "HyperX Cloud Alpha - Naruto Edition - Gaming Headset", price: 109.99, quantity: 1} ],
    status: "Enviado",
    payment:"Crédito",
    userId: Math.floor(Math.random() * 8) + 1,
    }
  );
  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
}