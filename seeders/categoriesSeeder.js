const slugify = require("slugify");
const { Category } = require("../models");

module.exports = async () => {
  const category = [];
  category.push(
    {
      name: "GAMING MONITORS",
      image:
        "https://row.hyperx.com/cdn/shop/files/HX-shop_category-tiles_monitors_360x.jpg?v=1674118027",
      slug: slugify("GAMING MONITORS").toLowerCase(),
    },
    {
      name: "GAMING HEADSETS",
      image:
        "https://row.hyperx.com/cdn/shop/files/HX-shop_category-tiles_headsets_360x.jpg?v=1674118026",
      slug: slugify("GAMING HEADSETS").toLowerCase(),
    },
    {
      name: "GAMING KEYBOARDS",
      image:
        "https://row.hyperx.com/cdn/shop/files/HX-shop_category-tiles_keyboards_360x.jpg?v=1674118027",
      slug: slugify("GAMING KEYBOARDS").toLowerCase(),
    },
    {
      name: "GAMING MICE",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/HX-shop_category-tiles_mice_360x.jpg?v=1672844604",
      slug: slugify("GAMING MICE").toLowerCase(),
    },
    {
      name: "MICROPHONE",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/HX-shop_category-tiles_microphones_360x.jpg?v=1672844524",
      slug: slugify("MICROPHONE").toLowerCase(),
    }
  );
  await Category.bulkCreate(category);
  console.log("[Database] Se corrió el seeder de Category.");
};
