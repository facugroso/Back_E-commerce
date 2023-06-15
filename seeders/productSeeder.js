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
      name: "HyperX Cloud Alpha - Naruto Edition - Gaming Headset",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_alpha_naruto_orange_4_detachable_720x.jpg?v=1678907605",
      description:
        "Enhance your gaming experience with cleaner, smoother sound. The HyperX™ Cloud Alpha’s dual-chamber driver system separates the bass from the mids and highs, allowing them to be tuned individually for reduced distortion. Boldly declare your ninja way with this limited-edition Naruto-inspired design. You can keep yourself in the zone and climb the ranks with signature HyperX comfort, perfect for marathon gaming or streaming sessions. Get crystal-clear communication with your squad and take your game to the next level with the Cloud Alpha audio advantage.",
      stock: 20,
      trending: true,
      price: 109.99,
      slug: slugify("hyperX cloud alpha naruto edition gaming headset"),
    },
    {
      name: "HyperX CloudX Stinger Core - Gaming Headset - Xbox",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloudx_stinger_core_2_main_extended_720x.jpg?v=1678907964",
      description:
        "The HyperX CloudX Stinger Core™ is the perfect entry-level headset for the Xbox gamer looking for great sound at an affordable price. This Official Xbox licensed headset features all the basic aspects gamers want for their Xbox; great sound quality, comfort, convenience, and reliability. CloudX Stinger Core has audio controls right on the cable, so you don’t have to dive into system menus to adjust your volume or mute the mic. An adjustable steel slider and soft ear cushions provide comfort for those long nights of gaming, and the flexible, swiveling mic lets you position the microphone just where you want it. Stay immersed in your game thanks to the closed cup design and directional 40mm drivers that feature enhanced bass tuned for console gaming. With a 2-year warranty and free tech support, CloudX Stinger Core is designed to reliably provide audio satisfaction for the long run",
      stock: 20,
      trending: true,
      price: 39.99,
      slug: slugify("hyperX cloudX stinger core gaming headset xbox"),
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
    },
    {
      name: "HyperX Alloy Origins - Naruto Edition - Mechanical Gaming Keyboard",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_alloy_origins_naruto_orange_1_main_720x.jpg?v=1678908037",
      description:
        "The HyperX Alloy Origins Naruto Edition is a limited edition compact, sturdy keyboard featuring custom-designed HyperX mechanical switches to give gamers style, performance, and reliability. Declare your ninja way with this Naruto-inspired design. Balanced HyperX switches feature low actuation force and short travel time. Alloy Origins has a full aluminum body for stability, and three customizable tilt levels. The sleek, compact design creates more space for mouse movement, an ideal keyboard for all gamers.",
      stock: 20,
      trending: true,
      price: 119.99,
      slug: slugify(
        "hyperX alloy origins naruto edition mechanical gaming keyboard"
      ),
    },
    {
      name: "HyperX Alloy Origins 60 - Mechanical Gaming Keyboard",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_alloy_origins_60_pink_english_us_2_angled_left_720x.jpg?v=1683563991",
      description:
        "The HyperX Alloy Origins™ 60 is a supremely portable 60% form factor keyboard that gives you more room for sweeping mouse movements. It features a durable, full aluminum body, and reliable HyperX switches balanced for speed and performance which are rated to withstand 80 million keypresses. The stock double shot PBT keycaps have secondary functions printed on them so you can quickly locate additional functionality. Let your style shine bright with the HyperX switches’ exposed LED design, and stunning lighting effects. Further customize your keyboard with macros, personalized lighting profiles, and more with HyperX NGENUITY software.",
      stock: 20,
      trending: true,
      price: 99.99,
      slug: slugify("hyperX alloy origins 60 mechanical gaming keyboard"),
    },
    {
      name: "HyperX SoloCast - USB Microphone",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_solocast_02_side_720x.jpg?v=1678907630",
      description:
        "For video editors, streamers, and gamers looking for a USB microphone with great sound quality, the HyperX SoloCast is a must have. Get 24-bit, 96kHz recordings with the SoloCast’s high bit depth and sampling rate. It’s Plug N Play with a USB-C connection, making it simple to use, with some of our fan-favorite conveniences like the tap-to-mute sensor and LED mute indicator. The versatile microphone has a flexible, adjustable stand and is also compatible with most boom arms, so it can either sit on your desk or work mounted. Certified by TeamSpeak and Discord and compatible with OBS, XSplit, Streamlabs OBS and a number of other programs, it’s an extremely streamer-friendly microphone.",
      stock: 20,
      trending: true,
      price: 59.99,
      slug: slugify("hyperX solocast USB microphone"),
    },
    {
      name: "HyperX QuadCast - USB Microphone",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_quadcast_02_side_720x.jpg?v=1678907138",
      description:
        "The HyperX QuadCast™ is the ideal all-inclusive standalone microphone for the aspiring streamer or podcaster looking for a condenser mic with quality sound. QuadCast comes with its own anti-vibration shock mount to help reduce the rumbles of daily life and a built-in pop filter to muffle pesky percussive sounds. Instantly know your mic status with the LED indicator, and simply tap-to-mute to avoid awkward broadcasting accidents. Select between the four polar patterns (stereo, omnidirectional, cardioid, bidirectional) and use the conveniently-located gain control dial to quickly adjust your mic input sensitivity. The included mount adapter that fits both 3/8” and 5/8” thread sizes and is compatible with most stands. Monitor your mic input with the built-in headphone jack, and QuadCast is certified by Discord and TeamSpeak™ so you can ensure that your microphone is broadcasting loud and clear for all your followers and listeners. Whether you’re plugging into a PC, PS5™, PS4™, or Mac® you’ll be able to deliver quality sound to anyone tuning in.",
      stock: 20,
      trending: true,
      price: 139.99,
      slug: slugify("hyperX quadCast USB microphone"),
    },
    {
      name: "HyperX DuoCast - USB Microphone - RGB Lighting",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_duocast_2_side_720x.jpg?v=1678908024",
      description:
        "Featuring an elegant design, a low-profile shock mount, and a tasteful RGB light ring, the HyperX DuoCast is a full-featured USB microphone that’s built for gaming, working, and content creation. It shares the fan-favorite features of its HyperX mic siblings, such as tap-to-mute, and the vibrant LED mic mute indicator, but also brings its own unique, subtle style. A low-profile shock mount complements the sleek, minimalist aesthetic, while also absorbing vibrations, and taking up less space. An included mount adapter allows for compability with most mounts and the versatile DuoCast is also compatible with PC, PS5™, PS4™, and Mac®. Use HyperX NGENUITY Software and customize the RGB light ring to broadcast your own signature style.",
      stock: 20,
      trending: true,
      price: 99.99,
      slug: slugify("hyperX duocast USB microphone RGB lighting"),
    },
    {
      name: "HyperX Armada 25 FHD Gaming Monitor",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_armada_25_fhd_gaming_monitor_g_sync_2_main_no_arm_720x.jpg?v=1678907555",
      description:
        "HyperX Armada Gaming Monitors are the first gaming monitors to include the monitor head and ergonomic arm right in the box. Save yourself the hassle of searching for a compatible desk mount, and spend that time dominating the game with the Armada 25’s 240Hz refresh rate and 1ms response time. That rapid responsiveness is built for shooters and competitive games where split-seconds that can tip the balance between victory and getting looted. When you have more time to fully take in the scenery, you’ll have full HD resolution with vibrant colors. Further enhance your gaming experience with NVIDIA® G-SYNC®4, which eliminates screen tearing, stuttering and input lag. Embrace the advantage and space-creating versatility of the HyperX Armada 25 Gaming Monitor and ergonomic arm.",
      stock: 20,
      trending: true,
      price: 349.99,
      slug: slugify("hyperX armada 25 FHD gaming monitor"),
    },
    {
      name: "HyperX Armada 27 QHD Gaming Monitor",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_armada_25_fhd_gaming_monitor_g_sync_2_main_no_arm_720x.jpg?v=1678907555",
      description:
        "HyperX Armada Gaming Monitors are the first gaming monitors to include the monitor head and ergonomic arm right in the box. Save yourself the hassle of searching for a compatible desk mount, and spend that time dominating the game with the Armada 25’s 240Hz refresh rate and 1ms response time. That rapid responsiveness is built for shooters and competitive games where split-seconds that can tip the balance between victory and getting looted. When you have more time to fully take in the scenery, you’ll have full HD resolution with vibrant colors. Further enhance your gaming experience with NVIDIA® G-SYNC®4, which eliminates screen tearing, stuttering and input lag. Embrace the advantage and space-creating versatility of the HyperX Armada 25 Gaming Monitor and ergonomic arm.",
      stock: 20,
      trending: true,
      price: 349.99,
      slug: slugify("hyperX armada 27 FHD gaming monitor"),
    },
    {
      name: "HyperX Pulsefire Haste 2 - Wireless Gaming Mouse",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_pulsefire_haste_2_wireless_black_angle_2_720x.jpg?v=1678907837",
      description:
        "The HyperX Pulsefire Haste 2 Wireless is built for gamers who can’t afford to waste a millisecond and want the freedom of wireless connectivity. This sequel had a solid upper shell and keeps the 61g weight and 100-hour battery life of the original Pulsefire Haste, but builds upon it with several refinements. Pulsefire Haste 2 Wireless has dual mode wireless connectivity, allowing you to switch between 2.4GHz wireless and Bluetooth connections, and a charging cable so you can charge while using the mouse in wired mode. We’ve also built out a full suite of high-performance HyperX custom components, highlighted by the precision HyperX 26K Sensor with a native DPI of up to 26,000 and a tracking speed of up to 650 IPS. Our custom HyperX Switches provide tactile, audible feedback on each satisfying click, and are rated for a lifespan of up to 100 million clicks. You’ll also enjoy superior physical control of your mouse with smooth, low-friction skates, and the included grip tape. Get the most out of every mouse movement with HyperX NGENUITY Software and create macros for the 6 programmable buttons, customize your DPI settings, and personalize the RGB lighting.",
      stock: 20,
      trending: true,
      price: 89.99,
      slug: slugify("hyperX pulsefire haste 2 wireless gaming mouse"),
    },
    {
      name: "HyperX Pulsefire Haste - Naruto Edition - Gaming Mouse",
      image:
        "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_pulsefire_haste_naruto_orange_3_front_angled_720x.jpg?v=1678907529",
      description:
        "The HyperX Pulsefire Haste is built for elite gamers looking to gain every fraction of a second possible in their quest to be the best. Weighing in at 59 grams, this full-featured, responsive honeycomb shell mouse has everything you need, just without the extra weight. Boldly declare your ninja way with this limited-edition Naruto-inspired design. TTC Golden micro switches provide satisfying, reliable clicks and are rated for 60 million clicks, so you will not have to worry about missing inputs. The flexible HyperFlex USB cable and the virgin-grade PTFE skates work together to give you a smooth, easy glide to make dominating the game simple.",
      stock: 20,
      trending: true,
      price: 59.99,
      slug: slugify("hyperX pulsefire haste naruto edition gaming mouse"),
    },
    {
      name: "HyperX Pulsefire Dart - Wireless Gaming Mouse",
      image:
        "https://i.postimg.cc/y6PMFyXD/hyperx-pulsefire-dart-01-top-down-720x.png",
      description:
        "HyperX Pulsefire Dart™ is a gaming-grade wireless mouse with a reliable 2.4GHz RF connection that will make you wonder why you waited so long to cut the cord. A wireless adapter is included to extend the range for desktop PC setups. It is Qi Certified for wireless charging and can last up to 50 hours on a single charge. With a Pixart 3389 sensor and a split-button design featuring reliable Omron switches, you’ll have all the accuracy you need to crush the competition. It’s ergonomically-shaped and features padded leatherette side grips designed to keep you comfortable during those long nights of gaming. Customize RGB lighting, create macros, manage battery life, and adjust DPI settings with the easy-to-use HyperX NGENUITY Software.",
      stock: 20,
      trending: true,
      price: 99.99,
      slug: slugify("hyperX pulsefire dart wireless gaming mouse"),
    }
  );

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
