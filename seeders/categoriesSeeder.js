const slugify = require("slugify");
const { Category } = require("../models");

module.exports = async () => {
  const category = [];
  category.push(
    {
      name: "GAMING MONITORS",
      image: "gaming_monitors_category.webp",
      slug: slugify("GAMING MONITORS").toLowerCase(),
    },
    {
      name: "GAMING HEADSETS",
      image: "gaming_headsets_category.webp",
      slug: slugify("GAMING HEADSETS").toLowerCase(),
    },
    {
      name: "GAMING KEYBOARDS",
      image: "gaming_keyboard_category.webp",
      slug: slugify("GAMING KEYBOARDS").toLowerCase(),
    },
    {
      name: "GAMING MICE",
      image: "gaming_mice_category.webp",
      slug: slugify("GAMING MICE").toLowerCase(),
    },
    {
      name: "MICROPHONE",
      image: "gaming_microphone_category.webp",
      slug: slugify("MICROPHONE").toLowerCase(),
    }
  );
  await Category.bulkCreate(category);
  console.log("[Database] Se corrió el seeder de Category.");
};
