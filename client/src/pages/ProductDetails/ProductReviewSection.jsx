import React from "react";

const reviewsData = [
  {
    id: 1,
    author: "vhoangb",
    rating: 5,
    content: "Great watch with excellent display quality. Battery lasts almost 2 days with normal use. Health tracking is accurate, especially heart rate and sleep monitoring. Premium design works well for both office and casual wear.",
    images: [
      "/ProductDetails/review-img-1.png",
      "/ProductDetails/review-img-3.png",
      "/ProductDetails/review-img-5.png"
    ],
    avatar: "/ProductDetails/review-avatar.svg"
  },
  {
    id: 2,
    author: "cuongnp",
    rating: 0, 
    content: "Good quality smartwatch with smooth interface. Water resistance works perfectly for swimming. A bit pricey but the experience and durability are worth it. Fast shipping and careful packaging from the store.",
    images: [
      "/ProductDetails/review-img-2.png",
      "/ProductDetails/review-img-4.png",
      "/ProductDetails/review-img-6.png"
    ],
    avatar: "/ProductDetails/review-avatar.svg"
  }
];

export default function ProductReviewSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-[49px] pb-[100px] pt-[38px] font-['Lato',sans-serif] relative">
      <div className="flex flex-col lg:flex-row lg:items-center mb-[63px]">
        {/* Title */}
        <h2 className="text-[36px] font-semibold text-black leading-tight lg:w-[200px] shrink-0">
          Reviews
        </h2>
        {/* Top Progress bar and Score */}
        <div className="flex items-center w-full mt-4 lg:mt-0 lg:ml-[178px]">
           <div className="relative w-full max-w-[419px] h-[12px] bg-brandSoft rounded-full overflow-hidden">
             <div className="absolute top-0 left-0 h-full bg-brandBlue w-[100%]"></div>
           </div>
           <span className="text-[20px] font-medium text-black ml-[26px]">5.0/5.0</span>
        </div>
      </div>

      <div className="flex flex-col gap-[15px]">
        {reviewsData.map((review) => (
          <div key={review.id} className="bg-[#F6F8FF] rounded-[20px] p-6 lg:pt-[30px] lg:pl-[40px] lg:pr-[93px] lg:pb-[112px] relative w-full">
            {/* User Info */}
            <div className="flex items-start gap-[19px] mb-[31px]">
               <img src={review.avatar} alt={review.author} className="w-[50px] h-[50px] object-cover rounded-full" />
               <div className="flex flex-col pt-[3px]">
                 <span className="text-[20px] font-medium text-black leading-none">{review.author}</span>
                 {review.rating > 0 && (
                   <div className="flex items-center gap-[4px] mt-[8px]">
                     {[...Array(review.rating)].map((_, i) => (
                       <img key={i} src="/ProductDetails/star.svg" alt="star" className="w-[24px] h-[24px]" /> 
                     ))}
                   </div>
                 )}
               </div>
            </div>

            {/* Content Text */}
            <p className="text-[#1a2530] text-xl lg:text-[24px] font-normal leading-normal max-w-[1207px] mb-[41px]">
              {review.content}
            </p>

            {/* Content Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex flex-col md:flex-row gap-[22px] lg:ml-[7px]">
                {review.images.map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`Review by ${review.author} image ${i + 1}`} 
                    className={`h-[283px] w-full md:w-auto object-cover rounded-lg lg:rounded-none ${i === 0 ? 'lg:w-[465px]' : 'lg:w-[361px]'}`} 
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
