require("dotenv").config();

async function runAllSeeders() {
  await require("./categoriesSeeder")();
  await require("./productSeeder")();
  await require("./userSeeder")();
  await require("./adminSeeder")();
  await require("./ordersSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
