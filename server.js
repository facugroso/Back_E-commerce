require("dotenv").config();

const methodOverride = require("method-override");
const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(cors());

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
