const bcrypt = require("bcryptjs");
const { Admin } = require("../models");

async function index(req, res) {
  const admins = await Admin.findAll({});
  res.json(admins);
}

async function show(req, res) {
  const user = await Admin.findOne({ where: { id: req.params.id } });
  res.json(user);
}

async function store(req, res) {
  const getPassword = req.body.password;
  const hashPassword = await bcrypt.hash(getPassword, 10);

  const newAdmin = await Admin.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashPassword,
  });
  return res.json(newAdmin);
}

async function create(req, res) {}

async function edit(req, res) {}

async function update(req, res) {
  const editAdmin = await Admin.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    },
    {
      where: { id: req.params.id },
    }
  );
  return res.json(editAdmin);
}

async function destroy(req, res) {
  await Admin.destroy({
    where: { id: req.params.id },
  });
  return res.json("El usuario ha sido eliminado con éxito");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
