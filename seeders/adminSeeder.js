const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  let encryptedPassword = await bcrypt.hash("carlos", 8);

  const admin = Admin.create({
    firstname: "Admin",
    lastname: "Admin",
    email: "admin@admin",
    password: encryptedPassword,
  });
  console.log("[Database] Se corrió el seeder de Admin.");
};
