const { Category } = require("../models");
const { Product } = require("../models");
const slugify = require("slugify");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const imageFile = files.image;

    if (err) {
      console.log(err);
    }
    if (!imageFile) {
      const newCategory = await Category.create({
        name: fields.name,
        slug: slugify(fields.name).toLowerCase(),
      });
    } else {
      const slug = slugify(fields.name).toLowerCase();
      const ext = path.extname(files.image.filepath);
      const timestamp = Date.now();
      const newFileName = `${files.image.originalFilename}${timestamp}${ext}`;
      const { data, error } = await supabase.storage

        .from("img")
        .upload(newFileName, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
          duplex: "half",
        });
      const newCategory = await Category.create({
        name: fields.name,
        image: newFileName,
        slug: slugify(fields.name).toLowerCase(),
      });
      return res.json(newCategory);
    }
  });
}

async function create(req, res) {}

async function edit(req, res) {}

async function update(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const imageFile = files.image;

    if (err) {
      console.log(err);
    }
    if (!imageFile) {
      const editCategory = await Category.update(
        {
          name: fields.name,
          slug: slugify(fields.name).toLowerCase(),
        },
        {
          where: { id: req.params.id },
        }
      );
      return res.json(editCategory);
    } else {
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
      const editCategory = await Category.update(
        {
          name: fields.name,
          image: newFileName,
          slug: slugify(fields.name).toLowerCase(),
        },
        {
          where: { id: req.params.id },
        }
      );
      return res.json(editCategory);
    }
  });
}

async function destroy(req, res) {
  await Product.destroy({
    where: { categoryId: req.params.id },
  });
  await Category.destroy({
    where: { id: req.params.id },
  });

  return res.json("Su categoría ha sido eliminada");
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
