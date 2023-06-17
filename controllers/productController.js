const { Product } = require("../models");

async function index(req, res) {
  const products = await Product.findAll({
    // include: [
    //   {
    //     model: Category,
    //     attributes: ["id", "name"],
    //   },
    // ],
  });
  res.json(products);
}

async function show(req, res) {
  const product = await Product.findOne({ where: { slug: req.params.id } });
  res.json(product);
}

async function store(req, res) {}

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
