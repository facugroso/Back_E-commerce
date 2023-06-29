const { faker } = require("@faker-js/faker");
const { Order } = require("../models");

module.exports = async () => {
  const orders = [];
  orders.push(
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      address: faker.address.streetAddress({ useFullAddress: true }),
      products: [
        {
          name: "HyperX Cloud III - Gaming Headset",
          price: 99.99,
          quantity: 1,
        },
      ],
      phone: faker.phone.phoneNumber(),
      status: "Pending",
      payment: "MercadoPago",
      userId: Math.floor(Math.random() * 8) + 1,
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      address: faker.address.streetAddress({ useFullAddress: true }),
      products: [
        {
          name: "HyperX Pulsefire Haste - Naruto Edition - Gaming Mouse",
          price: 59.99,
          quantity: 2,
        },
        {
          name: "HyperX Pulsefire Haste 2 - Wireless Gaming Mouse",
          price: 89.99,
          quantity: 1,
        },
      ],
      phone: faker.phone.phoneNumber(),
      status: "Sent",
      payment: "PayPal",
      userId: Math.floor(Math.random() * 8) + 1,
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      address: faker.address.streetAddress({ useFullAddress: true }),
      products: [
        {
          name: "HyperX Pulsefire Haste 2 - Wireless Gaming Mouse",
          price: 89.99,
          quantity: 1,
        },
        {
          name: "HyperX Armada 27 QHD Gaming Monitor",
          price: "399.99",
          quantity: 1,
        },
      ],
      phone: faker.phone.phoneNumber(),
      status: "Sent",
      payment: "PayPal",
      userId: Math.floor(Math.random() * 8) + 1,
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      address: faker.address.streetAddress({ useFullAddress: true }),
      products: [
        {
          name: "HyperX Armada 27 QHD Gaming Monitor",
          price: "399.99",
          quantity: 1,
        },
      ],
      phone: faker.phone.phoneNumber(),
      status: "Delivered",
      payment: "Credit Card",
      userId: Math.floor(Math.random() * 8) + 1,
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      address: faker.address.streetAddress({ useFullAddress: true }),
      products: [
        {
          name: "HyperX Pulsefire Haste - Naruto Edition - Gaming Mouse",
          price: 59.99,
          quantity: 1,
        },
      ],
      phone: faker.phone.phoneNumber(),
      status: "Paid",
      payment: "MercadoPago",
      userId: Math.floor(Math.random() * 8) + 1,
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      address: faker.address.streetAddress({ useFullAddress: true }),
      products: [
        {
          name: "HyperX Pulsefire Haste - Naruto Edition - Gaming Mouse",
          price: 59.99,
          quantity: 1,
        },
        {
          name: "HyperX Cloud Alpha - Naruto Edition - Gaming Headset",
          price: 109.99,
          quantity: 1,
        },
      ],
      phone: faker.phone.phoneNumber(),
      status: "Sent",
      payment: "Credit Card",
      userId: Math.floor(Math.random() * 8) + 1,
    }
  );
  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
