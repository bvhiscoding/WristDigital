// Sale page data  — mapped from Figma node 154:146
// Images from the ProductsPage public folder are reused where possible.
// Figma-served assets (localhost:3845) are used for sale-specific images.

const garminLogo = "/ProductsPage/cf0315d0e3131e2d48e87f23d1962fc45f73dead.png";
const samsungLogo =
  "/ProductsPage/ad841972e26a2caecd87f6fb8c6f5a558f241ba9.png";
const xiaomiLogo = "/ProductsPage/1dd51d0b47ff7d84f4f9b794b67433f0c3046516.png";

// Hero banner background (Figma Rectangle242)
export const heroBg =
  "http://localhost:3845/assets/76fbcea9edc0edbbdf05cdd4ea08c33de5a8fc8d.png";

// Flash Sale section: large left image (Figma Rectangle243)
export const flashSaleMainImg =
  "http://localhost:3845/assets/5606841c06d07e1b6fd16403d0e3a3a3801c4486.png";

// Flash Sale section: two small thumbnails (Figma Rectangle244, 245)
export const flashThumb1 =
  "http://localhost:3845/assets/ba1bbb0e89f7cc3949d1506fce26265008105b91.png";
export const flashThumb2 =
  "http://localhost:3845/assets/08b9c4301a1133e2a29122fc0ce2d268693f4352.png";

// Apple logo shown beside the Watch Series 7 brand icon (Figma Rectangle)
export const appleThumbLogo =
  "http://localhost:3845/assets/dd76937ca11dcdf238d0009f08cf3ee04603f3de.png";

// Featured product image for flash sale (Figma Rectangle51)
export const watchSeries7Img =
  "http://localhost:3845/assets/6da8df4cac0dcfb2cd18c9428a470f4c90bb31bf.png";

// ─── Best Deals products ────────────────────────────────────
// These map 1:1 to the six cards shown in BEST DEALS grid (Figma Groups 1-6)
export const bestDeals = [
  {
    id: "bd-1",
    name: "Garmin Epix Pro Gen 2",
    salePrice: "19.000.000đ",
    originalPrice: "19.990.000đ",
    remain: 10,
    image: "/ProductsPage/9534248001a6d8932b1f012dfe09182151287218.png",
    brandLogo: garminLogo,
  },
  {
    id: "bd-2",
    name: "Garmin Kid's Bounce 2",
    salePrice: "1.390.000đ",
    originalPrice: "2.190.000đ",
    remain: 10,
    image:
      "http://localhost:3845/assets/b01591ab659200074c907cfbff374bb40b26efa5.png",
    brandLogo: garminLogo,
  },
  {
    id: "bd-3",
    name: "Samsung Watch FE",
    salePrice: "3.290.000đ",
    originalPrice: "4.190.000đ",
    remain: 10,
    image:
      "http://localhost:3845/assets/bd64eb991d4e66fbdab75bf99f794fbf2071c694.png",
    brandLogo: samsungLogo,
  },
  {
    id: "bd-4",
    name: "Garmin Watch Gen 3",
    salePrice: "7.390.000đ",
    originalPrice: "8.190.000đ",
    remain: 10,
    image:
      "http://localhost:3845/assets/1959e0b3a9a6d66ea46e34859cacae79917e7f45.png",
    brandLogo: garminLogo,
  },
  {
    id: "bd-5",
    name: "Xiaomi Watch 5Lite",
    salePrice: "1.990.000đ",
    originalPrice: "2.190.000đ",
    remain: 15,
    image:
      "http://localhost:3845/assets/04bb20c5db2e7c2e2b24cb52822048a4c5352809.png",
    brandLogo: xiaomiLogo,
  },
  {
    id: "bd-6",
    name: "Xiaomi Watch Band 10",
    salePrice: "990.000đ",
    originalPrice: "1.190.000đ",
    remain: 10,
    image:
      "http://localhost:3845/assets/6da8df4cac0dcfb2cd18c9428a470f4c90bb31bf.png",
    brandLogo: xiaomiLogo,
  },
];
