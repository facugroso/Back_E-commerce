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
    adress: req.body.adress,
    products: req.body.products,
    status: req.body.status,
    payment: req.body.payment,
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
