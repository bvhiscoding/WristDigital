const BRAND_LOGO_BY_SLUG = {
  apple: "/ProductsPage/apple-logo.png",
  huawei: "/ProductsPage/huawei-logo.png",
  xiaomi: "/ProductsPage/xiaomi-logo.png",
  redmi: "/ProductsPage/redmi-logo.png",
  garmin: "/ProductsPage/garmin-logo.png",
  samsung: "/ProductsPage/samsung-logo.png",
  fitbit: "/ProductsPage/fitbit-logo.png",
  google: "/ProductsPage/google-logo.png",
  oneplus: "/ProductsPage/oneplus-logo.png",
  amazfit: "/ProductsPage/amazfit-logo.png",
};

const normalize = (value) => String(value || "").trim().toLowerCase();

export const getBrandLogo = (brand) => {
  if (!brand) return null;

  if (typeof brand === "string") {
    return BRAND_LOGO_BY_SLUG[normalize(brand)] || null;
  }

  if (brand.logo) return brand.logo;

  const slugLogo = BRAND_LOGO_BY_SLUG[normalize(brand.slug)];
  if (slugLogo) return slugLogo;

  return BRAND_LOGO_BY_SLUG[normalize(brand.name)] || null;
};
