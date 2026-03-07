import React from "react";
import ProductCard from "../../components/ProductCard";

const relatedProducts = [
  {
    id: 1,
    name: "Huawei FIT4",
    price: "2.890.000",
    priceUnit: "đ",
    rating: "5.0",
    reviews: "100",
    image: "/ProductDetails/watch-fit4.png",
    brandLogo: "/ProductDetails/logo-huawei.png",
  },
  {
    id: 2,
    name: "Apple Watch Ultra 4",
    price: "19.000.000",
    priceUnit: "đ",
    rating: "5.0",
    reviews: "200",
    image: "/ProductDetails/watch-ultra4.png",
    brandLogo: "/ProductDetails/logo-apple.png",
  },
  {
    id: 3,
    name: "Huawei GT4",
    price: "4.500.000",
    priceUnit: "đ",
    rating: "4.9",
    reviews: "90",
    image: "/ProductDetails/watch-gt4.png",
    brandLogo: "/ProductDetails/logo-huawei.png",
  }
];

export default function ProductRelatedSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-[169px] pb-[100px] pt-[22px] font-['Lato',sans-serif] relative">
      <h2 className="text-[36px] font-bold text-black text-center mb-[24px]">
        Related Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-10 place-items-center">
        {relatedProducts.map(product => (
          <div key={product.id} className="w-full h-[522px] max-w-[334px]">
             <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
