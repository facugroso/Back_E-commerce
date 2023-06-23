const bcrypt = require("bcryptjs");
const { User } = require("../models");

async function index(req, res) {
  const users = await User.findAll({});
  res.json(users);
}

async function show(req, res) {
  const user = await User.findOne({ where: { id: req.params.id } });
  res.json(user);
}

async function store(req, res) {
  const getPassword = req.body.password;
  const hashPassword = await bcrypt.hash(getPassword, 10);

  const newUser = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashPassword,
    phone: req.body.phone,
  });
  return res.json(newUser);
}

async function create(req, res) {}

async function edit(req, res) {}

async function update(req, res) {
  const editUser = await User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    },
    {
      where: { id: req.params.id },
    }
  );
  return res.json(editUser);
}

async function destroy(req, res) {
  await User.destroy({
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
