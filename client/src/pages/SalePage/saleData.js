// Sale page data  — mapped from Figma node 154:146
// Images from the ProductsPage public folder are reused where possible.
// Local assets (client/public/sale) are used for sale-specific images.

const garminLogo = "/ProductsPage/garmin-logo.png";
const samsungLogo =
  "/ProductsPage/samsung-logo.png";
const xiaomiLogo = "/ProductsPage/xiaomi-logo.png";

// Hero banner background (Figma Rectangle242)
export const heroBg = "/sale/hero-bg.png";

// Flash Sale section: large left image (Figma Rectangle243)
export const flashSaleMainImg = "/sale/flash-main.png";

// Flash Sale section: two small thumbnails (Figma Rectangle244, 245)
export const flashThumb1 = "/sale/flash-thumb1.png";
export const flashThumb2 = "/sale/flash-thumb2.png";

// Apple logo shown beside the Watch Series 7 brand icon (Figma Rectangle)
export const appleThumbLogo = "/sale/apple-logo.png";

// Featured product image for flash sale (Figma Rectangle51)
export const watchSeries7Img = "/sale/watch-series7.png";

// ─── Best Deals products ────────────────────────────────────
// These map 1:1 to the six cards shown in BEST DEALS grid (Figma Groups 1-6)
export const bestDeals = [
  {
    id: "bd-1",
    name: "Garmin Epix Pro Gen 2",
    salePrice: "19.000.000đ",
    originalPrice: "19.990.000đ",
    remain: 10,
    image: "/ProductsPage/garmin-epix-pro-gen-2.png",
    brandLogo: garminLogo,
  },
  {
    id: "bd-2",
    name: "Garmin Kid's Bounce 2",
    salePrice: "1.390.000đ",
    originalPrice: "2.190.000đ",
    remain: 10,
    image: "/sale/bd-2.png",
    brandLogo: garminLogo,
  },
  {
    id: "bd-3",
    name: "Samsung Watch FE",
    salePrice: "3.290.000đ",
    originalPrice: "4.190.000đ",
    remain: 10,
    image: "/sale/bd-3.png",
    brandLogo: samsungLogo,
  },
  {
    id: "bd-4",
    name: "Garmin Watch Gen 3",
    salePrice: "7.390.000đ",
    originalPrice: "8.190.000đ",
    remain: 10,
    image: "/sale/bd-4.png",
    brandLogo: garminLogo,
  },
  {
    id: "bd-5",
    name: "Xiaomi Watch 5Lite",
    salePrice: "1.990.000đ",
    originalPrice: "2.190.000đ",
    remain: 15,
    image: "/sale/bd-5.png",
    brandLogo: xiaomiLogo,
  },
  {
    id: "bd-6",
    name: "Xiaomi Watch Band 10",
    salePrice: "990.000đ",
    originalPrice: "1.190.000đ",
    remain: 10,
    image: "/sale/watch-series7.png",
    brandLogo: xiaomiLogo,
  },
];
