const { Category } = require("../models");
const slugify = require("slugify");
const formidable = require("formidable");

async function index(req, res) {
  const categories = await Category.findAll({});
  res.json(categories);
}

async function show(req, res) {
  const category = await Category.findOne({ where: { slug: req.params.id } });
  res.json(category);
}
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
    }
    const newCategory = await Category.create({
      name: fields.name,
      image: files.image.newFilename,
      slug: slugify(fields.name).toLowerCase(),
    });
    return res.json(newCategory);
  });
}

async function create(req, res) {}

async function edit(req, res) {}

async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
    }
    const editCategory = await Category.update(
      {
        name: fields.name,
        image: files.image.newFilename,
        slug: slugify(fields.name).toLowerCase(),
      },
      {
        where: { id: req.params.id },
      }
    );
    return res.json(editCategory);
  });
}

async function destroy(req, res) {
  await Category.destroy({
    where: { id: req.params.id },
  });
  return res.json("Su categoria ha sido eliminada");
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