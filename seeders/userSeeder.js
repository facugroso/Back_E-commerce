const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  let encryptedPassword = await bcrypt.hash("1234", 8);

  const users = [];

  users.push({
    firstname: "User",
    lastname: "Test",
    email: "usertest@email.com",
    password: encryptedPassword,
    phone: faker.phone.phoneNumber(),
  });

  for (let i = 0; i < 8; i++) {
    const lastname = faker.name.lastName();
    const firstname = faker.name.firstName();

    users.push({
      firstname: firstname,
      lastname: lastname,
      email: faker.internet.email(firstname, lastname),
      password: encryptedPassword,
      phone: faker.phone.phoneNumber(),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Usuario.");
};
