const { Order } = require("../models");

async function index(req, res) {
  const orders = await Order.findAll({});
  res.json(orders);
}

async function show(req, res) {
  const order = await Order.findOne({ where: { id: req.params.id } });
  res.json(order);
}

async function store(req, res) {
  const newOrder = await Order.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phone: req.body.phone,
    payment: req.body.payment,
    paymentdata: req.body.paymentdata,
    products: req.body.products,
    status: req.body.status,
  });
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
