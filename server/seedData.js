require("dotenv").config();

const mongoose = require("mongoose");
const Brand = require("./models/Brand");
const Category = require("./models/Category");
const Product = require("./models/Product");
const User = require("./models/User");
const Review = require("./models/Review");
const Blog = require("./models/Blog");
const BlogComment = require("./models/BlogComment");
const Sale = require("./models/Sale");
const Coupon = require("./models/Coupon");
const Cart = require("./models/Cart");
const Order = require("./models/Order");

const now = new Date();
const dayMs = 24 * 60 * 60 * 1000;

const imageBySlug = {
  apple: "/ProductsPage/apple-logo.png",
  samsung: "/ProductsPage/samsung-logo.png",
  xiaomi: "/ProductsPage/xiaomi-logo.png",
  redmi: "/ProductsPage/redmi-logo.png",
  garmin: "/ProductsPage/garmin-logo.png",
  huawei: "/ProductsPage/huawei-logo.png",
  amazfit: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=800&q=80",
  oneplus: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  google: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  fitbit: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
};

const categoriesSeed = [
  {
    name: "Smartwatch",
    slug: "smartwatch",
    description: "Premium smartwatch catalog for fitness, health, and productivity.",
    image:
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d9?auto=format&fit=crop&w=1200&q=80",
    isActive: true,
  },
  {
    name: "Accessory",
    slug: "accessory",
    description: "Accessories for smartwatch charging, straps, protection, and storage.",
    image:
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
    isActive: true,
  },
];

const brandsSeed = [
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
].map((brand) => ({
  ...brand,
  description: `${brand.name} official products curated for WristDigital users.`,
  logo: imageBySlug[brand.slug],
  isActive: true,
}));

const usersSeed = [
  {
    fullName: "System Admin",
    email: "admin@wristdigital.local",
    password: "Admin@123",
    phone: "+84-900-000-001",
    role: "admin",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    addresses: [
      {
        street: "01 Admin Avenue",
        city: "Ho Chi Minh City",
        state: "District 1",
        country: "Vietnam",
        isDefault: true,
      },
    ],
    wishlist: [],
    isActive: true,
    passwordResetToken: "seed-admin-reset-token",
    passwordResetExpires: new Date(now.getTime() + 7 * dayMs),
  },
  ...Array.from({ length: 10 }, (_v, i) => {
    const idx = i + 1;
    return {
      fullName: `Seed User ${String(idx).padStart(2, "0")}`,
      email: `seed.user${String(idx).padStart(2, "0")}@wristdigital.local`,
      password: "SeedUser@123",
      phone: `+84-900-000-${String(idx + 10).padStart(3, "0")}`,
      role: "user",
      avatar: `https://i.pravatar.cc/300?img=${idx + 10}`,
      addresses: [
        {
          street: `${10 + idx} Seed Street`,
          city: "Ho Chi Minh City",
          state: `District ${((idx - 1) % 12) + 1}`,
          country: "Vietnam",
          isDefault: true,
        },
      ],
      wishlist: [],
      isActive: true,
      passwordResetToken: `seed-reset-token-${idx}`,
      passwordResetExpires: new Date(now.getTime() + (idx + 1) * dayMs),
    };
  }),
];

const smartwatchSpecs = {
  "Case & Size": "Aluminum case, 44mm",
  "Display Technology": "AMOLED",
  "Peak Brightness": "1200 nits",
  Processor: "Wearable chipset Gen 2",
  Connectivity: "Bluetooth, Wi-Fi, GPS, NFC",
  "Battery Life": "Up to 48 hours",
  "Health Sensor": "Optical HR, SpO2, Sleep Tracking",
  "Water Resistance": "5 ATM",
};

const accessorySpecs = {
  "Case & Size": "Compact accessory profile",
  "Display Technology": "N/A",
  "Peak Brightness": "N/A",
  Processor: "N/A",
  Connectivity: "N/A",
  "Battery Life": "N/A",
  "Health Sensor": "N/A",
  "Water Resistance": "Splash resistant",
};

const productsSeed = [
  {
    name: "Apple Watch Ultra 2",
    slug: "apple-watch-ultra-2",
    sku: "AWU2-49-TI",
    brandSlug: "apple",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 21990000,
    discountPrice: 20990000,
    stockQuantity: 24,
    images: [
      "/ProductsPage/apple-watch-ultra-3.png",
      "/ProductDetails/watch-ultra4.png",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Titanium", hexCode: "#b8b6af", stock: 24 }],
    watchBandOptions: ["Alpine Loop", "Ocean Band"],
    isActive: true,
  },
  {
    name: "Samsung Galaxy Watch 7",
    slug: "samsung-galaxy-watch-7",
    sku: "SGW7-44-GR",
    brandSlug: "samsung",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 8990000,
    discountPrice: 8390000,
    stockQuantity: 30,
    images: [
      "/ProductsPage/samsung-galaxy-watch-8.png",
      "/ProductsPage/samsung-galaxy-watch-5.png",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Graphite", hexCode: "#3f3f3f", stock: 30 }],
    watchBandOptions: ["Sport Band", "Fabric Band"],
    isActive: true,
  },
  {
    name: "Garmin Fenix 8",
    slug: "garmin-fenix-8",
    sku: "GF8-47-BK",
    brandSlug: "garmin",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 23990000,
    discountPrice: 22990000,
    stockQuantity: 14,
    images: [
      "/ProductsPage/garmin-fenix-8-43mm.png",
      "/ProductsPage/garmin-epix-pro-gen-2.png",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Carbon Gray", hexCode: "#4a4f54", stock: 14 }],
    watchBandOptions: ["Silicone", "Nylon"],
    isActive: true,
  },
  {
    name: "Huawei Watch GT 5 Pro",
    slug: "huawei-watch-gt-5-pro",
    sku: "HWGT5-46-TI",
    brandSlug: "huawei",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 9990000,
    discountPrice: 9490000,
    stockQuantity: 20,
    images: [
      "/ProductsPage/huawei-gt6.png",
      "/ProductsPage/huawei-gt4.png",
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d9?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Titanium Silver", hexCode: "#aeb4bd", stock: 20 }],
    watchBandOptions: ["Titanium", "Fluoroelastomer"],
    isActive: true,
  },
  {
    name: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    sku: "AWS10-46-BK",
    brandSlug: "apple",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 12990000,
    discountPrice: 11990000,
    stockQuantity: 36,
    images: [
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Jet Black", hexCode: "#1d1d1f", stock: 36 }],
    watchBandOptions: ["Sport Band", "Milanese Loop"],
    isActive: true,
  },
  {
    name: "Samsung Galaxy Watch Ultra",
    slug: "samsung-galaxy-watch-ultra",
    sku: "SGWU-47-TI",
    brandSlug: "samsung",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 16990000,
    discountPrice: 15990000,
    stockQuantity: 22,
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Titanium Gray", hexCode: "#7a7d81", stock: 22 }],
    watchBandOptions: ["Marine Band", "Trail Band"],
    isActive: true,
  },
  {
    name: "Xiaomi Watch 2 Pro",
    slug: "xiaomi-watch-2-pro",
    sku: "XW2P-46-SL",
    brandSlug: "xiaomi",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 6290000,
    discountPrice: 5790000,
    stockQuantity: 40,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600267165867-7512f8f015d4?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Silver", hexCode: "#c0c0c0", stock: 40 }],
    watchBandOptions: ["Fluoro Rubber", "Leather"],
    isActive: true,
  },
  {
    name: "Xiaomi Watch S3",
    slug: "xiaomi-watch-s3",
    sku: "XWS3-47-BK",
    brandSlug: "xiaomi",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 3990000,
    discountPrice: 3590000,
    stockQuantity: 55,
    images: [
      "https://images.unsplash.com/photo-1612810316498-ab67cf68c8e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Space Black", hexCode: "#2f3136", stock: 55 }],
    watchBandOptions: ["Fluoroelastomer", "Nylon"],
    isActive: true,
  },
  {
    name: "Redmi Watch 4",
    slug: "redmi-watch-4",
    sku: "RW4-47-OB",
    brandSlug: "redmi",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 2490000,
    discountPrice: 2290000,
    stockQuantity: 68,
    images: [
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Obsidian Black", hexCode: "#101010", stock: 68 }],
    watchBandOptions: ["Silicone Band"],
    isActive: true,
  },
  {
    name: "Redmi Watch 3 Active",
    slug: "redmi-watch-3-active",
    sku: "RW3A-46-BK",
    brandSlug: "redmi",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 1290000,
    discountPrice: 1190000,
    stockQuantity: 90,
    images: [
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Black", hexCode: "#111111", stock: 90 }],
    watchBandOptions: ["Silicone Strap"],
    isActive: true,
  },
  {
    name: "Garmin Forerunner 965",
    slug: "garmin-forerunner-965",
    sku: "GFR965-47-YL",
    brandSlug: "garmin",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 14990000,
    discountPrice: 13990000,
    stockQuantity: 18,
    images: [
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Powder Gray", hexCode: "#636a72", stock: 18 }],
    watchBandOptions: ["Nylon", "Silicone"],
    isActive: true,
  },
  {
    name: "Huawei Watch Fit 3",
    slug: "huawei-watch-fit-3",
    sku: "HWF3-43-PK",
    brandSlug: "huawei",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 3290000,
    discountPrice: 2990000,
    stockQuantity: 50,
    images: [
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Pink", hexCode: "#f1b6c8", stock: 50 }],
    watchBandOptions: ["Silicone", "Woven"],
    isActive: true,
  },
  {
    name: "Amazfit T-Rex 3",
    slug: "amazfit-t-rex-3",
    sku: "ATR3-48-GR",
    brandSlug: "amazfit",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 5790000,
    discountPrice: 5290000,
    stockQuantity: 34,
    images: [
      "https://images.unsplash.com/photo-1600267165867-7512f8f015d4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Rugged Green", hexCode: "#556b4f", stock: 34 }],
    watchBandOptions: ["Rugged Silicone"],
    isActive: true,
  },
  {
    name: "Amazfit Balance",
    slug: "amazfit-balance",
    sku: "ABAL-46-SL",
    brandSlug: "amazfit",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 4990000,
    discountPrice: 4590000,
    stockQuantity: 38,
    images: [
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Sunset Gray", hexCode: "#8f949e", stock: 38 }],
    watchBandOptions: ["Leather", "Silicone"],
    isActive: true,
  },
  {
    name: "OnePlus Watch 2",
    slug: "oneplus-watch-2",
    sku: "OPW2-47-BK",
    brandSlug: "oneplus",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 6990000,
    discountPrice: 6590000,
    stockQuantity: 28,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d9?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Midnight Black", hexCode: "#232323", stock: 28 }],
    watchBandOptions: ["Rubber", "Leather"],
    isActive: true,
  },
  {
    name: "Google Pixel Watch 3",
    slug: "google-pixel-watch-3",
    sku: "GPW3-45-SL",
    brandSlug: "google",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 10990000,
    discountPrice: 9990000,
    stockQuantity: 20,
    images: [
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600267165867-7512f8f015d4?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Polished Silver", hexCode: "#c6cbd2", stock: 20 }],
    watchBandOptions: ["Active Band", "Leather Band"],
    isActive: true,
  },
  {
    name: "Fitbit Sense 2",
    slug: "fitbit-sense-2",
    sku: "FBS2-40-GD",
    brandSlug: "fitbit",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 6490000,
    discountPrice: 5990000,
    stockQuantity: 26,
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Lunar White", hexCode: "#ececec", stock: 26 }],
    watchBandOptions: ["Infinity Band"],
    isActive: true,
  },
  {
    name: "Fitbit Versa 4",
    slug: "fitbit-versa-4",
    sku: "FBV4-40-BK",
    brandSlug: "fitbit",
    categorySlug: "smartwatch",
    productType: "Smartwatch",
    price: 4990000,
    discountPrice: 4490000,
    stockQuantity: 32,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: smartwatchSpecs,
    colors: [{ name: "Graphite", hexCode: "#3b3e45", stock: 32 }],
    watchBandOptions: ["Sport Band"],
    isActive: true,
  },
  {
    name: "Sport Band 44mm",
    slug: "sport-band-44mm",
    sku: "ACC-SB44-APL",
    brandSlug: "apple",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 590000,
    discountPrice: 520000,
    stockQuantity: 80,
    images: [
      "/HomePage/AccessoriesSection/watch-straps.png",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Midnight", hexCode: "#1f1f1f", stock: 80 }],
    watchBandOptions: ["Sport Band 44mm"],
    isActive: true,
  },
  {
    name: "Magnetic Charging Dock",
    slug: "magnetic-charging-dock",
    sku: "ACC-MCD-SAM",
    brandSlug: "samsung",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 450000,
    discountPrice: 420000,
    stockQuantity: 90,
    images: [
      "/HomePage/AccessoriesSection/charging-dock.png",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Matte Black", hexCode: "#242424", stock: 90 }],
    watchBandOptions: ["Magnetic Dock"],
    isActive: true,
  },
  {
    name: "Tempered Screen Guard",
    slug: "tempered-screen-guard",
    sku: "ACC-TSG-GAR",
    brandSlug: "garmin",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 120000,
    discountPrice: 99000,
    stockQuantity: 150,
    images: [
      "/HomePage/AccessoriesSection/screen-guard.png",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600267165867-7512f8f015d4?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Transparent", hexCode: "#f2f2f2", stock: 150 }],
    watchBandOptions: ["Guard Pack"],
    isActive: true,
  },
  {
    name: "Premium Storage Pouch",
    slug: "premium-storage-pouch",
    sku: "ACC-PSP-HUA",
    brandSlug: "huawei",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 250000,
    discountPrice: 220000,
    stockQuantity: 70,
    images: [
      "/HomePage/AccessoriesSection/storage-pouch.png",
      "https://images.unsplash.com/photo-1612810316498-ab67cf68c8e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Navy", hexCode: "#1f3a5f", stock: 70 }],
    watchBandOptions: ["Storage Pouch"],
    isActive: true,
  },
  {
    name: "Complete Accessory Bundle",
    slug: "complete-accessory-bundle",
    sku: "ACC-BND-APL",
    brandSlug: "apple",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 990000,
    discountPrice: 890000,
    stockQuantity: 60,
    images: [
      "/HomePage/AccessoriesSection/accessory-bundle.png",
      "https://images.unsplash.com/photo-1612810316498-ab67cf68c8e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Bundle Black", hexCode: "#1a1a1a", stock: 60 }],
    watchBandOptions: ["Bundle Pack"],
    isActive: true,
  },
  {
    name: "USB-C Replacement Cable",
    slug: "usb-c-replacement-cable",
    sku: "ACC-CBL-SAM",
    brandSlug: "samsung",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 180000,
    discountPrice: 150000,
    stockQuantity: 120,
    images: [
      "/HomePage/AccessoriesSection/replacement-cable.png",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Cable White", hexCode: "#f7f7f7", stock: 120 }],
    watchBandOptions: ["USB-C"],
    isActive: true,
  },
  {
    name: "Leather Milanese Loop",
    slug: "leather-milanese-loop",
    sku: "ACC-LML-GAR",
    brandSlug: "garmin",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 780000,
    discountPrice: 720000,
    stockQuantity: 64,
    images: [
      "/HomePage/AccessoriesSection/watch-straps.png",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Brown Leather", hexCode: "#6b4f3a", stock: 64 }],
    watchBandOptions: ["Milanese Loop"],
    isActive: true,
  },
  {
    name: "Dual Charging Dock Pro",
    slug: "dual-charging-dock-pro",
    sku: "ACC-DCD-HUA",
    brandSlug: "huawei",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 680000,
    discountPrice: 620000,
    stockQuantity: 72,
    images: [
      "/HomePage/AccessoriesSection/charging-dock.png",
      "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612810316498-ab67cf68c8e1?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Dark Gray", hexCode: "#4a4a4a", stock: 72 }],
    watchBandOptions: ["Dual Dock"],
    isActive: true,
  },
  {
    name: "3-Pack Screen Guard Set",
    slug: "3-pack-screen-guard-set",
    sku: "ACC-3SG-APL",
    brandSlug: "apple",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 199000,
    discountPrice: 169000,
    stockQuantity: 140,
    images: [
      "/HomePage/AccessoriesSection/screen-guard.png",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600267165867-7512f8f015d4?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Clear", hexCode: "#f3f3f3", stock: 140 }],
    watchBandOptions: ["3 Pack"],
    isActive: true,
  },
  {
    name: "Protective Travel Case",
    slug: "protective-travel-case",
    sku: "ACC-PTC-SAM",
    brandSlug: "samsung",
    categorySlug: "accessory",
    productType: "Accessory",
    price: 320000,
    discountPrice: 279000,
    stockQuantity: 88,
    images: [
      "/HomePage/AccessoriesSection/storage-pouch.png",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612810316498-ab67cf68c8e1?auto=format&fit=crop&w=1200&q=80",
    ],
    specifications: accessorySpecs,
    colors: [{ name: "Case Black", hexCode: "#202020", stock: 88 }],
    watchBandOptions: ["Travel Case"],
    isActive: true,
  },
];

const makeDescription = (name, type) =>
  [
    `${name} is a ${type.toLowerCase()} tuned for premium daily reliability.`,
    `${name} balances comfort, build quality, and practical usage scenarios.`,
    `${name} is optimized for modern users who expect consistent performance.`,
    `${name} uses curated materials and quality controls for long-term value.`,
    `${name} is part of WristDigital's selected catalog for verified products.`,
  ].join("\n");

const seedDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await Promise.all([
    BlogComment.deleteMany({}),
    Review.deleteMany({}),
    Order.deleteMany({}),
    Cart.deleteMany({}),
    Blog.deleteMany({}),
    Sale.deleteMany({}),
    Coupon.deleteMany({}),
    Product.deleteMany({}),
    Category.deleteMany({}),
    Brand.deleteMany({}),
    User.deleteMany({ email: /@wristdigital\.local$/ }),
  ]);

  const brands = await Brand.insertMany(brandsSeed);
  const categories = await Category.insertMany(categoriesSeed);
  const users = await User.insertMany(usersSeed);

  const brandMap = Object.fromEntries(brands.map((b) => [b.slug, b]));
  const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c]));

  const productsPayload = productsSeed.map((item) => ({
    name: item.name,
    slug: item.slug,
    description: makeDescription(item.name, item.productType),
    sku: item.sku,
    brand: brandMap[item.brandSlug]._id,
    category: categoryMap[item.categorySlug]._id,
    price: item.price,
    discountPrice: item.discountPrice,
    productType: item.productType,
    stockQuantity: item.stockQuantity,
    images: item.images,
    averageRating: 0,
    numReviews: 0,
    specifications: item.specifications,
    colors: item.colors,
    watchBandOptions: item.watchBandOptions,
    activeSale: {
      saleName: "Pre-seed placeholder sale",
      discountType: "PERCENT",
      discountValue: 5,
      salePrice: Math.max(1000, Math.floor(item.discountPrice * 0.95)),
      startsAt: new Date(now.getTime() - dayMs),
      endsAt: new Date(now.getTime() + 30 * dayMs),
      priority: 1,
    },
    isActive: item.isActive,
  }));

  const products = await Product.insertMany(productsPayload);

  const productBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
  const admin = users.find((u) => u.role === "admin");
  const shoppers = users.filter((u) => u.role === "user");

  const sales = await Sale.insertMany([
    {
      name: "Summer Mega Sale",
      discountType: "PERCENT",
      discountValue: 10,
      scope: "ALL",
      productIds: [],
      categoryIds: [],
      brandIds: [],
      priority: 10,
      startsAt: new Date(now.getTime() - 2 * dayMs),
      endsAt: new Date(now.getTime() + 45 * dayMs),
      isActive: true,
    },
    {
      name: "Apple Premium Discount",
      discountType: "FIXED",
      discountValue: 300000,
      scope: "BRANDS",
      productIds: [],
      categoryIds: [],
      brandIds: [brandMap.apple._id],
      priority: 9,
      startsAt: new Date(now.getTime() - dayMs),
      endsAt: new Date(now.getTime() + 30 * dayMs),
      isActive: true,
    },
    {
      name: "Accessory Week",
      discountType: "PERCENT",
      discountValue: 15,
      scope: "CATEGORIES",
      productIds: [],
      categoryIds: [categoryMap.accessory._id],
      brandIds: [],
      priority: 8,
      startsAt: new Date(now.getTime() - dayMs),
      endsAt: new Date(now.getTime() + 14 * dayMs),
      isActive: true,
    },
    {
      name: "Featured Product Hot Deal",
      discountType: "FIXED",
      discountValue: 500000,
      scope: "PRODUCTS",
      productIds: [productBySlug["apple-watch-ultra-2"]._id],
      categoryIds: [],
      brandIds: [],
      priority: 11,
      startsAt: new Date(now.getTime() - dayMs),
      endsAt: new Date(now.getTime() + 20 * dayMs),
      isActive: true,
    },
  ]);

  const saleAll = sales.find((s) => s.scope === "ALL");
  for (const product of products) {
    const salePrice = Math.max(1000, Math.floor(product.discountPrice * 0.9));
    product.activeSale = {
      saleId: saleAll._id,
      saleName: saleAll.name,
      discountType: saleAll.discountType,
      discountValue: saleAll.discountValue,
      salePrice,
      startsAt: saleAll.startsAt,
      endsAt: saleAll.endsAt,
      priority: saleAll.priority,
    };
    await product.save();
  }

  await Coupon.insertMany([
    {
      code: "WELCOME10",
      description: "Welcome discount for first purchase.",
      discountType: "PERCENT",
      discountValue: 10,
      maxDiscount: 500000,
      minOrderValue: 1000000,
      usageLimit: 1000,
      usedCount: 0,
      perUserLimit: 1,
      startsAt: new Date(now.getTime() - dayMs),
      endsAt: new Date(now.getTime() + 180 * dayMs),
      isActive: true,
    },
    {
      code: "ACCESSORY50K",
      description: "Fixed discount for accessories and bundles.",
      discountType: "FIXED",
      discountValue: 50000,
      maxDiscount: 50000,
      minOrderValue: 300000,
      usageLimit: 500,
      usedCount: 0,
      perUserLimit: 3,
      startsAt: new Date(now.getTime() - dayMs),
      endsAt: new Date(now.getTime() + 120 * dayMs),
      isActive: true,
    },
  ]);

  for (let i = 0; i < products.length; i += 1) {
    const product = products[i];
    for (let j = 0; j < 3; j += 1) {
      const user = shoppers[(i + j) % shoppers.length];
      const rating = 5 - (j % 2);

      await Review.create({
        user: user._id,
        product: product._id,
        rating,
        comment: `${product.name} review from ${user.fullName}. Build quality is excellent, battery is stable, and daily usage feels smooth and reliable.`,
        images: [product.images[0]],
        isVerifiedPurchase: true,
        adminReply: "Thanks for your feedback. We appreciate your review and continued support.",
      });
    }
  }

  for (const product of products) {
    await Review.recalcProductRating(product._id);
  }

  const blogs = await Blog.insertMany([
    {
      title: "Top Smartwatch Trends for 2026",
      slug: "top-smartwatch-trends-2026",
      content:
        "Wearables continue to evolve with stronger health tracking, battery optimization, and AI-powered coaching. This guide summarizes key buying criteria for modern users.",
      author: admin._id,
      thumbnail:
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1200&q=80",
      tags: ["smartwatch", "trends", "wearable"],
      views: 1450,
      isActive: true,
    },
    {
      title: "How to Choose the Right Smartwatch Accessory",
      slug: "choose-right-smartwatch-accessory",
      content:
        "From straps and charging docks to protective guards, accessory choices affect both style and durability. This article explains compatibility and value-based selection.",
      author: admin._id,
      thumbnail:
        "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=1200&q=80",
      tags: ["accessory", "guide", "watch-band"],
      views: 980,
      isActive: true,
    },
  ]);

  await BlogComment.insertMany([
    {
      user: shoppers[0]._id,
      blog: blogs[0]._id,
      content: "Great overview. The battery-life comparison section is very practical.",
      isApproved: true,
    },
    {
      user: shoppers[1]._id,
      blog: blogs[0]._id,
      content: "Would love a deeper dive into GPS accuracy across brands.",
      isApproved: true,
    },
    {
      user: shoppers[2]._id,
      blog: blogs[1]._id,
      content: "Helpful accessory checklist. Compatibility details saved me time.",
      isApproved: true,
    },
  ]);

  const watch1 = productBySlug["apple-watch-ultra-2"];
  const watch2 = productBySlug["samsung-galaxy-watch-7"];
  const acc1 = productBySlug["sport-band-44mm"];
  const acc2 = productBySlug["magnetic-charging-dock"];

  await Cart.insertMany(
    shoppers.slice(0, 5).map((user, idx) => ({
      user: user._id,
      items: [
        { product: idx % 2 === 0 ? watch1._id : watch2._id, quantity: 1 + (idx % 2) },
        { product: idx % 2 === 0 ? acc1._id : acc2._id, quantity: 1 },
      ],
    })),
  );

  await Order.insertMany([
    {
      user: shoppers[0]._id,
      items: [
        {
          product: watch1._id,
          productName: watch1.name,
          productSlug: watch1.slug,
          sku: watch1.sku,
          image: watch1.images[0],
          unitPrice: watch1.displayPrice,
          quantity: 1,
          lineTotal: watch1.displayPrice,
        },
        {
          product: acc1._id,
          productName: acc1.name,
          productSlug: acc1.slug,
          sku: acc1.sku,
          image: acc1.images[0],
          unitPrice: acc1.displayPrice,
          quantity: 2,
          lineTotal: acc1.displayPrice * 2,
        },
      ],
      pricing: {
        subtotalRaw: watch1.displayPrice + acc1.displayPrice * 2,
        saleDiscount: 500000,
        subtotal: watch1.displayPrice + acc1.displayPrice * 2 - 500000,
        couponDiscount: 50000,
        shippingFee: 30000,
        discount: 550000,
        total: watch1.displayPrice + acc1.displayPrice * 2 - 550000 + 30000,
      },
      coupon: {
        code: "ACCESSORY50K",
        discountType: "FIXED",
        discountValue: 50000,
        discountAmount: 50000,
      },
      shippingAddress: {
        fullName: shoppers[0].fullName,
        phone: shoppers[0].phone,
        street: shoppers[0].addresses[0].street,
        city: shoppers[0].addresses[0].city,
        state: shoppers[0].addresses[0].state,
        country: shoppers[0].addresses[0].country,
      },
      paymentMethod: "COD",
      paymentStatus: "Pending",
      status: "Processing",
      note: "Please call before delivery.",
      shippedAt: new Date(now.getTime() + 2 * dayMs),
      cancelledAt: new Date(now.getTime() + 365 * dayMs),
      statusHistory: [
        { status: "Processing", changedAt: now, changedBy: admin._id, note: "Order created" },
      ],
    },
    {
      user: shoppers[1]._id,
      items: [
        {
          product: watch2._id,
          productName: watch2.name,
          productSlug: watch2.slug,
          sku: watch2.sku,
          image: watch2.images[0],
          unitPrice: watch2.displayPrice,
          quantity: 1,
          lineTotal: watch2.displayPrice,
        },
      ],
      pricing: {
        subtotalRaw: watch2.displayPrice,
        saleDiscount: 200000,
        subtotal: watch2.displayPrice - 200000,
        couponDiscount: 0,
        shippingFee: 30000,
        discount: 200000,
        total: watch2.displayPrice - 200000 + 30000,
      },
      coupon: {
        code: "WELCOME10",
        discountType: "PERCENT",
        discountValue: 10,
        discountAmount: 0,
      },
      shippingAddress: {
        fullName: shoppers[1].fullName,
        phone: shoppers[1].phone,
        street: shoppers[1].addresses[0].street,
        city: shoppers[1].addresses[0].city,
        state: shoppers[1].addresses[0].state,
        country: shoppers[1].addresses[0].country,
      },
      paymentMethod: "BANK_TRANSFER",
      paymentStatus: "Paid",
      status: "Shipped",
      note: "Handle with care.",
      shippedAt: new Date(now.getTime() - dayMs),
      cancelledAt: new Date(now.getTime() + 365 * dayMs),
      statusHistory: [
        { status: "Processing", changedAt: new Date(now.getTime() - 3 * dayMs), changedBy: admin._id, note: "Order created" },
        { status: "Shipped", changedAt: new Date(now.getTime() - dayMs), changedBy: admin._id, note: "Dispatched" },
      ],
    },
    {
      user: shoppers[2]._id,
      items: [
        {
          product: acc2._id,
          productName: acc2.name,
          productSlug: acc2.slug,
          sku: acc2.sku,
          image: acc2.images[0],
          unitPrice: acc2.displayPrice,
          quantity: 1,
          lineTotal: acc2.displayPrice,
        },
      ],
      pricing: {
        subtotalRaw: acc2.displayPrice,
        saleDiscount: 20000,
        subtotal: acc2.displayPrice - 20000,
        couponDiscount: 0,
        shippingFee: 20000,
        discount: 20000,
        total: acc2.displayPrice,
      },
      coupon: {
        code: "WELCOME10",
        discountType: "PERCENT",
        discountValue: 10,
        discountAmount: 0,
      },
      shippingAddress: {
        fullName: shoppers[2].fullName,
        phone: shoppers[2].phone,
        street: shoppers[2].addresses[0].street,
        city: shoppers[2].addresses[0].city,
        state: shoppers[2].addresses[0].state,
        country: shoppers[2].addresses[0].country,
      },
      paymentMethod: "COD",
      paymentStatus: "Failed",
      status: "Cancelled",
      note: "Customer requested cancellation.",
      shippedAt: new Date(now.getTime() + 365 * dayMs),
      cancelledAt: new Date(now.getTime() - 12 * 60 * 60 * 1000),
      statusHistory: [
        { status: "Processing", changedAt: new Date(now.getTime() - 2 * dayMs), changedBy: admin._id, note: "Order created" },
        { status: "Cancelled", changedAt: new Date(now.getTime() - 12 * 60 * 60 * 1000), changedBy: admin._id, note: "Cancelled by user" },
      ],
    },
  ]);

  const primaryWishlist = [watch1._id, watch2._id, acc1._id];
  await User.updateOne({ _id: shoppers[0]._id }, { $set: { wishlist: primaryWishlist } });

  const summary = {
    brands: await Brand.countDocuments(),
    categories: await Category.countDocuments(),
    products: await Product.countDocuments(),
    users: await User.countDocuments({ email: /@wristdigital\.local$/ }),
    reviews: await Review.countDocuments(),
    blogs: await Blog.countDocuments(),
    blogComments: await BlogComment.countDocuments(),
    sales: await Sale.countDocuments(),
    coupons: await Coupon.countDocuments(),
    carts: await Cart.countDocuments(),
    orders: await Order.countDocuments(),
  };

  console.log(JSON.stringify(summary, null, 2));
};

module.exports = { seedDatabase };

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
