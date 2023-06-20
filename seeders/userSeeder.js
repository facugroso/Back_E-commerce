const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 8; i++) {
    let encryptedPassword = await bcrypt.hash("carlos", 8);
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: encryptedPassword,
      phone: faker.phone.phoneNumber(),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Usuario.");
};
