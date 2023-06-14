const slugify = require("slugify");
const { Product } = require("../models");

module.exports = async () => {
  const products = [];
  products.push(
    {
      name: "HyperX Cloud III - Gaming Headset",
      image:
        "https://i.postimg.cc/XqBTrFqN/hyperx-cloud-iii-red-6649-main-1-588d9fec-b439-4046-bcae-4d38df96053e-900x.png",
      description:
        "The HyperX Cloud III is an evolution of our legendary Cloud II, which is known for its comfort, sound quality and durability. With plush HyperX signature memory foam in the headband and ear cushions, it provides a comfortable fit perfect for long gaming sessions. It also features new, retuned 53mm drivers that are angled for an optimal listening experience. The upgraded 10mm microphone captures crystal clear in-game voice chat and calls. Simple controls on the headset earcup allow you to have quick, direct access to mute your mic or adjust audio volume. The LED mic mute clearly shows when you’re muted. Compatible with PC, PS5, Xbox Series X|S, Xbox One, Nintendo Switch, Mac, and Mobile. Experience ultimate comfort and sound across your favorite platforms.",
      stock: 20,
      trending: true,
      price: 99.99,
      slug: slugify("hyperx cloud iii gaming headset"),
    },
    {
      name: "HyperX Alloy Origins Core PBT - Mechanical Gaming Keyboard",
      image:
        "https://i.postimg.cc/zBCh82Sq/hyperx-alloy-origins-core-pbt-english-us-aqua-1-main-900x.png",
      description:
        "The HyperX Alloy Origins Core PBT is an ultra-compact, sturdy tenkeyless keyboard featuring custom HyperX mechanical switches designed to give gamers the best blend of style, performance, and reliability. This variant ups durability by adding pre-installed PBT keycaps with side-printing. HyperX’s mechanical key switches are built with exposed LEDs so more of the light output is visible, providing more brilliant, stunning lighting. They’re also tuned with an actuation force and travel distance that is elegantly balanced for responsiveness and accuracy. Alloy Origins Core is built with a full aluminum body, so it stays rigid and stable, and also features keyboard feet for three different tilt levels. Its compact TKL design creates space for mouse movement in desktop setups where space is at a premium, and it also features a detachable USB-C cable for portability. Customize your lighting, craft macros, and adjust Game Mode with powerful, easy-to-use HyperX NGENUITY Software.",
      stock: 20,
      trending: true,
      price: 109.99,
      slug: slugify(
        "hyperx alloy origins core pbt - mechanical gaming keyboard"
      ),
    }
  );

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
