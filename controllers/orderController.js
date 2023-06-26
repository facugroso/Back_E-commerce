const { Order, User } = require("../models");
const bcrypt = require("bcryptjs");

async function index(req, res) {
  const orders = await Order.findAll({});
  res.json(orders);
}

async function show(req, res) {
  const order = await Order.findOne({
    where: { id: req.params.id },
    include: { model: User, as: "user" },
  });
  res.json(order);
}

async function store(req, res) {
  const { cardNumber, firstname, lastname, ci } = req.body.paymentdata;
  const hashCardNumber = await bcrypt.hash(cardNumber, 10);
  const hashCi = await bcrypt.hash(ci, 10);
  const paymentdata = {
    cardNumber: hashCardNumber,
    firstname: firstname,
    lastname: lastname,
    ci: hashCi,
  };

  const newOrder = await Order.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phone: req.body.phone,
    payment: req.body.payment,
    paymentdata: paymentdata,
    products: req.body.products,
    status: req.body.status,
    userId: req.body.userId,
  });
  console.log(paymentdata);
  return res.json(newOrder);
}

async function create(req, res) {}

async function edit(req, res) {}

async function update(req, res) {}

async function destroy(req, res) {}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
