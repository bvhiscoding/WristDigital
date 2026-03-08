require("dotenv").config();

const mongoose = require("mongoose");
const Brand = require("./models/Brand");
const Category = require("./models/Category");
const Product = require("./models/Product");
const User = require("./models/User");
const Review = require("./models/Review");
const cloudinary = require("./config/cloudinary");

const REQUIRED_SPEC_KEYS = [
  "Case & Size",
  "Display Technology",
  "Peak Brightness",
  "Processor",
  "'Connectivity'",
  "Battery Life",
  "Health Sensor",
  "Water Resistance",
];

const buildDescription = (name, focus) => {
  return [
    `${name} is tuned for users who want dependable daily smartwatch performance.`,
    `This model focuses on ${focus} with a practical balance between power and comfort.`,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  ].join("\n");
};

const productImageSources = (product, idx) => {
  const tagA = product.brandSlug.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const tagB = product.slug.split("-").slice(0, 2).join("");
  return [1, 2, 3].map(
    (n) =>
      `https://loremflickr.com/1200/900/smartwatch,${tagA},${tagB}?lock=${7000 + idx * 10 + n}`,
  );
};

const uploadImageFromWeb = async (url, folder) => {
  try {
    const result = await cloudinary.uploader.upload(url, {
      folder,
      resource_type: "image",
    });
    return result.secure_url;
  } catch (_error) {
    return url;
  }
};

const seedData = {
  category: {
    name: "Smartwatch",
    slug: "smartwatch",
    description: "Smartwatch catalog for seed data",
  },
  brands: [
    { name: "Apple", slug: "apple" },
    { name: "Samsung", slug: "samsung" },
    { name: "Xiaomi", slug: "xiaomi" },
    { name: "Redmi", slug: "redmi" },
    { name: "Garmin", slug: "garmin" },
    { name: "Huawei", slug: "huawei" },
    { name: "Amazfit", slug: "amazfit" },
    { name: "OnePlus", slug: "oneplus" },
    { name: "Google", slug: "google" },
    { name: "Fitbit", slug: "fitbit" },
  ],
  reviewers: Array.from({ length: 10 }, (_v, i) => {
    const n = i + 1;
    return {
      fullName: `Seed Reviewer ${String(n).padStart(2, "0")}`,
      email: `seed.reviewer${String(n).padStart(2, "0")}@wristdigital.local`,
      password: "SeedUser@123",
      role: "user",
      isActive: true,
    };
  }),
  products: [
    {
      name: "Apple Watch Ultra 2",
      slug: "apple-watch-ultra-2",
      sku: "AWU2-49-TI",
      brandSlug: "apple",
      focus: "adventure tracking and high-visibility outdoor use",
      price: 21990000,
      productType: "Smartwatch",
      stockQuantity: 26,
      colors: [
        { name: "Natural Titanium", hexCode: "#B9B7AF", stock: 14 },
        { name: "Black Titanium", hexCode: "#2B2B2B", stock: 12 },
      ],
      watchBandOptions: ["Alpine Loop", "Trail Loop", "Ocean Band"],
      specifications: {
        "Case & Size": "Titanium case, 49mm",
        "Display Technology": "LTPO OLED Retina",
        "Peak Brightness": "3000 nits",
        'Processor': "Apple S9 SiP",
        'Connectivity': "GPS + Cellular, Wi-Fi, Bluetooth 5.3, UWB",
        "Battery Life": "Up to 36 hours (72 hours low power)",
        "Health Sensor": "ECG, Blood Oxygen, Temperature, Optical HR",
        "Water Resistance": "100m (WR100)",
      },
    },
    {
      name: "Apple Watch Series 10",
      slug: "apple-watch-series-10",
      sku: "AWS10-46-AL",
      brandSlug: "apple",
      focus: "mainstream smart features with strong health support",
      price: 12990000,
      productType: "Smartwatch",
      stockQuantity: 34,
      colors: [{ name: "Jet Black", hexCode: "#1D1D1F", stock: 20 }],
      watchBandOptions: ["Sport Band", "Milanese Loop", "Braided Solo Loop"],
      specifications: {
        "Case & Size": "Aluminum case, 46mm",
        "Display Technology": "Always-On OLED Retina",
        "Peak Brightness": "2000 nits",
        'Processor': "Apple S10 SiP",
        'Connectivity': "GPS, Wi-Fi, Bluetooth 5.3, NFC",
        "Battery Life": "Up to 18 hours",
        "Health Sensor": "ECG, Optical HR, Temperature, Fall Detection",
        "Water Resistance": "50m",
      },
    },
    {
      name: "Samsung Galaxy Watch Ultra",
      slug: "samsung-galaxy-watch-ultra",
      sku: "SGWU-47-TI",
      brandSlug: "samsung",
      focus: "extreme durability and premium Wear OS performance",
      price: 16990000,
      productType: "Smartwatch",
      stockQuantity: 20,
      colors: [{ name: "Titanium Gray", hexCode: "#7A7D81", stock: 20 }],
      watchBandOptions: ["Marine Band", "Trail Band"],
      specifications: {
        "Case & Size": "Titanium case, 47mm",
        "Display Technology": "Super AMOLED",
        "Peak Brightness": "3000 nits",
        'Processor': "Exynos W1000",
        'Connectivity': "LTE, GPS, Wi-Fi, Bluetooth 5.3, NFC",
        "Battery Life": "Up to 60 hours",
        "Health Sensor": "BioActive Sensor, ECG, BIA, Optical HR",
        "Water Resistance": "10 ATM + IP68",
      },
    },
    {
      name: "Samsung Galaxy Watch7",
      slug: "samsung-galaxy-watch7",
      sku: "SGW7-44-GN",
      brandSlug: "samsung",
      focus: "daily wellness tracking and fluid Android integration",
      price: 7990000,
      productType: "Smartwatch",
      stockQuantity: 36,
      watchBandOptions: ["Sport Band", "Fabric Band"],
      specifications: {
        "Case & Size": "Armor Aluminum case, 44mm",
        "Display Technology": "Super AMOLED",
        "Peak Brightness": "2000 nits",
        'Processor': "Exynos W1000",
        'Connectivity': "Bluetooth, Wi-Fi, GPS, NFC",
        "Battery Life": "Up to 40 hours",
        "Health Sensor": "BioActive Sensor, Optical HR, Skin Temp",
        "Water Resistance": "5 ATM + IP68",
      },
    },
    {
      name: "Xiaomi Watch 2 Pro",
      slug: "xiaomi-watch-2-pro",
      sku: "XW2P-46-BK",
      brandSlug: "xiaomi",
      focus: "classic style with Google Wear OS productivity",
      price: 6290000,
      productType: "Smartwatch",
      stockQuantity: 28,
      colors: [{ name: "Silver Case", hexCode: "#C0C0C0", stock: 28 }],
      watchBandOptions: ["Black Fluoro Rubber", "Brown Leather"],
      specifications: {
        "Case & Size": "Stainless steel case, 46mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "600 nits",
        'Processor': "Snapdragon W5+ Gen 1",
        'Connectivity': "Bluetooth, Wi-Fi, GPS, NFC, optional LTE",
        "Battery Life": "Up to 65 hours",
        "Health Sensor": "Optical HR, SpO2, Bioelectrical impedance",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Xiaomi Watch S3",
      slug: "xiaomi-watch-s3",
      sku: "XWS3-47-SL",
      brandSlug: "xiaomi",
      focus: "long battery life with style-driven modular design",
      price: 3990000,
      productType: "Smartwatch",
      stockQuantity: 42,
      watchBandOptions: ["Fluororubber", "Leather"],
      specifications: {
        "Case & Size": "Aluminum alloy case, 47mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "600 nits",
        'Processor': "Xiaomi custom wearable SoC",
        'Connectivity': "Bluetooth 5.2, GNSS, NFC",
        "Battery Life": "Up to 15 days",
        "Health Sensor": "Optical HR, SpO2, Stress tracking",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Redmi Watch 4",
      slug: "redmi-watch-4",
      sku: "RW4-47-OB",
      brandSlug: "redmi",
      focus: "large display value with practical everyday tracking",
      price: 2490000,
      productType: "Smartwatch",
      stockQuantity: 58,
      colors: [
        { name: "Obsidian Black", hexCode: "#101010", stock: 30 },
        { name: "Silver Gray", hexCode: "#B8BCC2", stock: 28 },
      ],
      specifications: {
        "Case & Size": "Aluminum alloy case, 47mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "600 nits",
        'Processor': "Redmi wearable chipset",
        'Connectivity': "Bluetooth 5.3, GPS",
        "Battery Life": "Up to 20 days",
        "Health Sensor": "Optical HR, SpO2",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Redmi Watch 3 Active",
      slug: "redmi-watch-3-active",
      sku: "RW3A-46-BK",
      brandSlug: "redmi",
      focus: "entry-level smart features for calls and activity metrics",
      price: 1290000,
      productType: "Smartwatch",
      stockQuantity: 84,
      specifications: {
        "Case & Size": "Plastic case, 46mm",
        "Display Technology": "LCD",
        "Peak Brightness": "500 nits",
        'Processor': "Redmi low-power wearable SoC",
        'Connectivity': "Bluetooth 5.3",
        "Battery Life": "Up to 12 days",
        "Health Sensor": "Optical HR, SpO2",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Garmin Fenix 8 AMOLED",
      slug: "garmin-fenix-8-amoled",
      sku: "GF8A-47-BK",
      brandSlug: "garmin",
      focus: "elite multi-sport analytics for trail and expedition use",
      price: 23990000,
      productType: "Smartwatch",
      stockQuantity: 12,
      watchBandOptions: ["Silicone", "Nylon", "Titanium"],
      specifications: {
        "Case & Size": "Fiber-reinforced polymer with steel bezel, 47mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1500 nits",
        'Processor': "Garmin next-gen multi-band GNSS platform",
        'Connectivity': "Bluetooth, Wi-Fi, ANT+, multi-band GPS",
        "Battery Life": "Up to 16 days (smartwatch mode)",
        "Health Sensor": "Gen5 Optical HR, Pulse Ox, ECG",
        "Water Resistance": "10 ATM",
      },
    },
    {
      name: "Garmin Forerunner 965",
      slug: "garmin-forerunner-965",
      sku: "GFR965-47-YL",
      brandSlug: "garmin",
      focus: "race-focused training readiness and triathlon telemetry",
      price: 14990000,
      productType: "Smartwatch",
      stockQuantity: 16,
      colors: [{ name: "Black-Powder Gray", hexCode: "#31343A", stock: 16 }],
      specifications: {
        "Case & Size": "Fiber-reinforced polymer case, 47mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1000 nits",
        'Processor': "Garmin performance GPS chipset",
        'Connectivity': "Bluetooth, Wi-Fi, ANT+, GPS",
        "Battery Life": "Up to 23 days",
        "Health Sensor": "Optical HR, Pulse Ox, HRV status",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Huawei Watch GT 5 Pro",
      slug: "huawei-watch-gt-5-pro",
      sku: "HWGT5P-46-TI",
      brandSlug: "huawei",
      focus: "premium health insights with long-endurance battery behavior",
      price: 9990000,
      productType: "Smartwatch",
      stockQuantity: 22,
      watchBandOptions: ["Titanium Link", "Fluoroelastomer"],
      specifications: {
        "Case & Size": "Titanium alloy case, 46mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1000 nits",
        'Processor': "Huawei wearable chipset",
        'Connectivity': "Bluetooth 5.2, GPS, NFC",
        "Battery Life": "Up to 14 days",
        "Health Sensor": "TruSeen 5.5+, ECG, SpO2, Temperature",
        "Water Resistance": "5 ATM + IP69K",
      },
    },
    {
      name: "Huawei Watch Fit 3",
      slug: "huawei-watch-fit-3",
      sku: "HWF3-43-PK",
      brandSlug: "huawei",
      focus: "lightweight fitness coaching and colorful daily wear",
      price: 3290000,
      productType: "Smartwatch",
      stockQuantity: 44,
      colors: [{ name: "Pink", hexCode: "#F1B6C8", stock: 18 }],
      specifications: {
        "Case & Size": "Aluminum case, 43mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1500 nits",
        'Processor': "Huawei low-power wearable chipset",
        'Connectivity': "Bluetooth 5.2, GPS",
        "Battery Life": "Up to 10 days",
        "Health Sensor": "Optical HR, SpO2, sleep tracking",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Amazfit T-Rex 3",
      slug: "amazfit-t-rex-3",
      sku: "ATR3-48-GR",
      brandSlug: "amazfit",
      focus: "rugged outdoor reliability with high endurance battery profiles",
      price: 5790000,
      productType: "Smartwatch",
      stockQuantity: 24,
      watchBandOptions: ["Silicone Rugged Band"],
      specifications: {
        "Case & Size": "Polymer case with steel bezel, 48mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "2000 nits",
        'Processor': "Zepp dual-core wearable platform",
        'Connectivity': "Bluetooth 5.2, dual-band GPS",
        "Battery Life": "Up to 27 days",
        "Health Sensor": "BioTracker PPG, SpO2, stress monitor",
        "Water Resistance": "10 ATM",
      },
    },
    {
      name: "Amazfit Balance",
      slug: "amazfit-balance",
      sku: "ABAL-46-SL",
      brandSlug: "amazfit",
      focus: "body readiness scoring and all-day wellness intelligence",
      price: 4990000,
      productType: "Smartwatch",
      stockQuantity: 32,
      colors: [{ name: "Sunset Grey", hexCode: "#8F949E", stock: 20 }],
      specifications: {
        "Case & Size": "Aluminum case, 46mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1500 nits",
        'Processor': "Zepp health engine",
        'Connectivity': "Bluetooth, Wi-Fi, GPS, NFC",
        "Battery Life": "Up to 14 days",
        "Health Sensor": "BioTracker 5.0 PPG, BIA",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "OnePlus Watch 2",
      slug: "oneplus-watch-2",
      sku: "OPW2-47-BK",
      brandSlug: "oneplus",
      focus: "hybrid dual-engine processing for smooth battery efficiency",
      price: 6990000,
      productType: "Smartwatch",
      stockQuantity: 30,
      watchBandOptions: ["Fluoro Rubber", "Leather"],
      specifications: {
        "Case & Size": "Stainless steel case, 47mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1000 nits",
        'Processor': "Snapdragon W5 + BES2700",
        'Connectivity': "Bluetooth 5.0, Wi-Fi, GPS, NFC",
        "Battery Life": "Up to 100 hours (smart mode)",
        "Health Sensor": "8-channel Optical HR, SpO2",
        "Water Resistance": "5 ATM + IP68",
      },
    },
    {
      name: "Google Pixel Watch 3",
      slug: "google-pixel-watch-3",
      sku: "GPW3-45-SL",
      brandSlug: "google",
      focus: "pixel ecosystem intelligence and fitbit-grade health metrics",
      price: 10990000,
      productType: "Smartwatch",
      stockQuantity: 19,
      colors: [{ name: "Polished Silver", hexCode: "#C6CBD2", stock: 10 }],
      specifications: {
        "Case & Size": "Aluminum case, 45mm",
        "Display Technology": "LTPO AMOLED",
        "Peak Brightness": "2000 nits",
        'Processor': "Qualcomm SW5100 + Cortex M33",
        'Connectivity': "Bluetooth, Wi-Fi, GPS, NFC, LTE option",
        "Battery Life": "Up to 24 hours",
        "Health Sensor": "Multi-path HR, ECG, cEDA",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Fitbit Sense 2",
      slug: "fitbit-sense-2",
      sku: "FBS2-40-GD",
      brandSlug: "fitbit",
      focus: "stress tracking, ECG tools, and practical wellness routines",
      price: 6490000,
      productType: "Smartwatch",
      stockQuantity: 24,
      watchBandOptions: ["Infinity Band", "Sport Band"],
      specifications: {
        "Case & Size": "Aluminum case, 40mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1000 nits",
        'Processor': "Fitbit wearable SoC",
        'Connectivity': "Bluetooth, Wi-Fi, GPS, NFC",
        "Battery Life": "6+ days",
        "Health Sensor": "ECG, cEDA, Optical HR, SpO2",
        "Water Resistance": "5 ATM",
      },
    },
    {
      name: "Fitbit Versa 4",
      slug: "fitbit-versa-4",
      sku: "FBV4-40-BK",
      brandSlug: "fitbit",
      focus: "comfortable daily tracking with intuitive wellness dashboards",
      price: 4990000,
      productType: "Smartwatch",
      stockQuantity: 28,
      colors: [{ name: "Graphite", hexCode: "#3B3E45", stock: 28 }],
      specifications: {
        "Case & Size": "Aluminum case, 40mm",
        "Display Technology": "AMOLED",
        "Peak Brightness": "1000 nits",
        'Processor': "Fitbit low-power wearable SoC",
        'Connectivity': "Bluetooth, GPS, NFC",
        "Battery Life": "6+ days",
        "Health Sensor": "Optical HR, SpO2, sleep profile",
        "Water Resistance": "5 ATM",
      },
    },
  ],
};

const seedDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const category = await Category.findOneAndUpdate(
    { slug: seedData.category.slug },
    seedData.category,
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true },
  );

  const brandMap = {};
  for (const brand of seedData.brands) {
    const upserted = await Brand.findOneAndUpdate({ slug: brand.slug }, brand, {
      upsert: true,
      returnDocument: "after",
      setDefaultsOnInsert: true,
    });
    brandMap[brand.slug] = upserted._id;
  }

  const reviewerDocs = [];
  for (const reviewer of seedData.reviewers) {
    const existing = await User.findOne({ email: reviewer.email });
    if (existing) {
      reviewerDocs.push(existing);
      continue;
    }
    const created = await User.create(reviewer);
    reviewerDocs.push(created);
  }

  const productDocs = [];
  for (let i = 0; i < seedData.products.length; i += 1) {
    const item = seedData.products[i];
    const description = buildDescription(item.name, item.focus);

    if (description.split("\n").length < 5) {
      throw new Error(`Description must have at least 5 lines for ${item.slug}`);
    }

    const specKeys = Object.keys(item.specifications || {});
    const hasAllSpecKeys = REQUIRED_SPEC_KEYS.every((k) => specKeys.includes(k));
    if (!hasAllSpecKeys) {
      throw new Error(`Missing required specification keys for ${item.slug}`);
    }

    const imageSources = productImageSources(item, i);
    const uploadedImages = [];
    for (const source of imageSources) {
      const uploaded = await uploadImageFromWeb(
        source,
        `wristdigital/seed/${item.slug}`,
      );
      uploadedImages.push(uploaded);
    }

    const payload = {
      name: item.name,
      slug: item.slug,
      description,
      sku: item.sku,
      brand: brandMap[item.brandSlug],
      category: category._id,
      price: item.price,
      productType: item.productType,
      stockQuantity: item.stockQuantity,
      specifications: item.specifications,
      colors: item.colors || [],
      watchBandOptions: item.watchBandOptions || [],
      images: uploadedImages,
      isActive: true,
      averageRating: 0,
      numReviews: 0,
    };

    const upserted = await Product.findOneAndUpdate({ slug: item.slug }, payload, {
      upsert: true,
      returnDocument: "after",
      setDefaultsOnInsert: true,
      runValidators: true,
    });

    productDocs.push(upserted);
  }

  await Review.deleteMany({ product: { $in: productDocs.map((p) => p._id) } });

  const reviewRatings = [5, 4, 5, 4, 3];

  for (let pIndex = 0; pIndex < productDocs.length; pIndex += 1) {
    const product = productDocs[pIndex];
    for (let n = 0; n < 3; n += 1) {
      const reviewer = reviewerDocs[(pIndex + n) % reviewerDocs.length];
      const rating = reviewRatings[(pIndex + n) % reviewRatings.length];

      await Review.create({
        user: reviewer._id,
        product: product._id,
        rating,
        comment: `${product.name} review by ${reviewer.fullName}. Build quality is solid, battery holds up well, and the display remains clear outdoors.`,
        images: product.images.slice(0, 1),
        isVerifiedPurchase: false,
      });
    }
  }

  const [totalProducts, totalUsers, totalReviews] = await Promise.all([
    Product.countDocuments({ slug: { $in: seedData.products.map((p) => p.slug) } }),
    User.countDocuments({
      email: {
        $in: seedData.reviewers.map((r) => r.email),
      },
    }),
    Review.countDocuments({ product: { $in: productDocs.map((p) => p._id) } }),
  ]);

  console.log(
    JSON.stringify(
      {
        seededProducts: totalProducts,
        seededReviewUsers: totalUsers,
        seededReviews: totalReviews,
        minImagesPerProduct: 3,
        minReviewsPerProduct: 3,
      },
      null,
      2,
    ),
  );
};

seedData.seedDatabase = seedDatabase;

module.exports = seedData;

if (require.main === module) {
  seedDatabase()
    .then(async () => {
      await mongoose.disconnect();
      console.log("Seed completed successfully.");
    })
    .catch(async (error) => {
      console.error("Seed failed:", error.message);
      try {
        await mongoose.disconnect();
      } catch (_e) {
        // ignore
      }
      process.exit(1);
    });
}
