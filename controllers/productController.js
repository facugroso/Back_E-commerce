const slugify = require("slugify");
const { Product } = require("../models");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
    }
    console.log("hey");
    const slug = slugify(fields.name).toLowerCase();
    const ext = path.extname(files.image.filepath);
    const timestamp = Date.now();
    const newFileName = `${slug}${timestamp}${ext}`;
    const { data, error } = await supabase.storage

      .from("img")
      .upload(newFileName, fs.createReadStream(files.image.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.image.mimetype,
        duplex: "half",
      });

    const newGallery = [];
    const featureArr = fields.features.split(", ");
    console.log(files.gallery);

    for (const galleryImage of files.gallery) {
      const galleryExt = path.extname(galleryImage.filepath);
      const galleryFileName = `${galleryImage.originalFilename}${timestamp}${galleryExt}`;

      const { data: galleryData, error: galleryError } = await supabase.storage
        .from("img")
        .upload(galleryFileName, fs.createReadStream(galleryImage.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: galleryImage.mimetype,
          duplex: "half",
        });

      newGallery.push(galleryFileName);
    }
    const newProduct = await Product.create({
      name: fields.name,
      descriptionTitle: fields.descriptionTitle,
      description: fields.description,
      image: newFileName,
      gallery: newGallery,
      features: featureArr,
      stock: fields.stock,
      trending: fields.trending,
      price: fields.price,
      categoryId: fields.categoryId,
      slug: slug,
    });

    console.log(data);
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
    const newGallery = [];
    const featureArr = fields.features.split(",");

    const updatedProduct = {
      name: fields.name,
      descriptionTitle: fields.descriptionTitle,
      description: fields.description,
      features: featureArr,
      stock: fields.stock,
      trending: fields.trending,
      price: fields.price,
      categoryId: fields.categoryId,
      slug: slugify(fields.name).toLowerCase(),
    };
    if (files.image.size) updatedProduct.image = files.image.newFilename;
    if (!files.gallery.newFilename) {
      for (const image of files.gallery) {
        newGallery.push(image.newFilename);
      }
      updatedProduct.gallery = newGallery;
    }
    const editProduct = await Product.update(updatedProduct, {
      where: { slug: req.params.slug },
    });
    return res.json(editProduct);
  });
}

async function destroy(req, res) {
  await Product.destroy({
    where: { slug: req.params.slug },
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
