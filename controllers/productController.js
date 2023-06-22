const slugify = require("slugify");
const { Product } = require("../models");
const formidable = require("formidable");

async function index(req, res) {
  const products = await Product.findAll({});
  res.json(products);
}

async function show(req, res) {
  const product = await Product.findOne({ where: { slug: req.params.id } });
  res.json(product);
}
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    console.log(files);
    if (err) {
      console.log(err);
    }
    const newGallery = [];
    const newFeature = [];
    for (const image of files.gallery) {
      newGallery.push(image.newFilename);
    }
    for (const text of fields.feature) {
      newFeature.push(text);
    }
    const newProduct = await Product.create({
      name: fields.name,
      descriptionTitle: fields.descriptionTitle,
      description: fields.description,
      image: files.image.newFilename,
      gallery: newGallery,
      features: newFeature,
      stock: fields.stock,
      trending: fields.trending,
      price: fields.price,
      categoryId: fields.categoryId,
      slug: slugify(fields.name).toLowerCase(),
    });

    return res.json(newProduct);
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
    const editProduct = await Product.update(
      {
        name: fields.name,
        descriptionTitle: fields.descriptionTitle,
        description: fields.description,
        image: files.image.newFilename,
        gallery: files.gallery.newFilename,
        features: fields.features,
        stock: fields.stock,
        trending: fields.strending,
        price: fields.price,
        categoryId: fields.categoryId,
        slug: slugify(fields.name).toLowerCase(),
      },
      {
        where: { id: req.params.id },
      }
    );
    return res.json(editProduct);
  });
}

async function destroy(req, res) {
  await Product.destroy({
    where: { id: req.params.id },
  });
  return res.json("Su producto ha sido eliminado con éxito");
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
