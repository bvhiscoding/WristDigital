import React from 'react';

// Assets
const imgMainBlog = "http://localhost:3845/assets/ca6d900649038cfcd64288928809d54fa04ea918.png";
const imgSubBlog1 = "http://localhost:3845/assets/5606841c06d07e1b6fd16403d0e3a3a3801c4486.png";
const imgSubBlog2 = "http://localhost:3845/assets/9338814dcbc138c1c420ae77970b9eb94a16471f.png";
const imgSubBlog3 = "http://localhost:3845/assets/54938947b1bf7d247e5037ac3b866d668406f92c.png";
const imgArrow = "http://localhost:3845/assets/991880a219645240d444aae8f61516de9618083b.svg";

const BlogSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-[4rem] lg:py-[6.25rem] font-['Lato',sans-serif]">
      <div className="w-full max-w-[90rem] px-4 lg:px-[2.8125rem] flex flex-col gap-[4rem] lg:gap-[6.25rem]">
        
        {/* Top Part - Tips & Tricks */}
        <div className="flex flex-col lg:flex-row gap-[2.5rem] lg:gap-[2.1875rem] items-center lg:items-start pl-0">
          {/* Left Image */}
          <div className="w-full lg:w-[40.125rem] h-[18.75rem] lg:h-[24.4375rem] flex-shrink-0">
            <img alt="Tips and tricks" className="w-full h-full object-cover rounded-[0.625rem]" src={imgMainBlog} />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 w-full lg:max-w-[40.0625rem] pt-[1.25rem] lg:pt-[1.8125rem] pl-0 lg:pl-[2.6875rem]">
            <div className="flex flex-col items-start mb-[1.5rem] lg:mb-8">
              <p className="text-[#193495] text-[1.25rem] lg:text-[1.5rem] font-bold mb-2">Tips & Tricks</p>
              <div className="w-[9.0625rem] h-[0.0625rem] bg-[#193495]"></div>
            </div>
            
            <h3 className="text-black text-[1.5rem] lg:text-[2rem] font-bold leading-tight mb-4 lg:mb-[1.5625rem]">
              The Secret to Long-Lasting Smartwatch Battery Life: Charge Right, Use Longer
            </h3>
            
            <p className="text-black text-[1rem] lg:text-[1.5rem] font-medium leading-[1.4] mb-6 lg:mb-[4.6875rem]">
              Nothing is more annoying than your Smartwatch dying mid-day. But did you know that daily charging habits can significantly affect battery lifespan? We'll share 4 simple tips to optimize your watch's battery performance...
            </p>
            
            <a href="#read-more" className="group flex items-center gap-2 text-[#193495] text-[1.125rem] lg:text-[1.25rem] font-medium hover:opacity-80 transition-opacity w-fit">
              Read more
              <img alt="" className="w-[1rem] lg:w-[1.25rem] h-[1rem] lg:h-[1.25rem] group-hover:translate-x-1 transition-transform" src={imgArrow} />
            </a>
          </div>
        </div>

        {/* Bottom Part - Product Review */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center mb-6 lg:mb-10 text-center w-full px-2">
            <p className="text-[#193495] text-[1.25rem] lg:text-[1.5rem] font-bold mb-2">Product Review</p>
            <div className="w-[9.0625rem] h-[0.0625rem] bg-[#193495] mb-6"></div>
            
            <h3 className="text-black text-[1.5rem] lg:text-[2rem] font-bold leading-tight max-w-full w-full lg:max-w-[64.875rem] mb-4">
              The Top 5 Smartwatches of 2025: From Gym Sessions to the Boardroom
            </h3>
            
            <p className="text-black text-[1rem] lg:text-[1.5rem] font-medium w-full lg:max-w-[56.375rem] leading-[1.4]">
              Looking for the perfect Smartwatch? The 2025 market is more vibrant than ever! This post will help you discover the 5 most outstanding models – from durable designs for fitness enthusiasts, to luxurious styles with all the necessary office features....
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.4375rem] w-full mb-8 lg:mb-6">
            <div className="h-[15.625rem] lg:h-[18.1875rem] rounded-[0.3125rem] overflow-hidden group cursor-pointer">
              <img alt="Review 1" className="w-full h-full object-cover rounded-[0.3125rem] group-hover:scale-105 transition-transform duration-500" src={imgSubBlog1} />
            </div>
            <div className="h-[15.625rem] lg:h-[18.1875rem] rounded-[0.3125rem] overflow-hidden group cursor-pointer">
              <img alt="Review 2" className="w-full h-full object-cover rounded-[0.3125rem] group-hover:scale-105 transition-transform duration-500" src={imgSubBlog2} />
            </div>
            <div className="h-[15.625rem] lg:h-[18.1875rem] rounded-[0.3125rem] overflow-hidden group cursor-pointer">
              <img alt="Review 3" className="w-full h-full object-cover rounded-[0.3125rem] group-hover:scale-105 transition-transform duration-500" src={imgSubBlog3} />
            </div>
          </div>

          {/* Read More Link Right Aligned */}
          <div className="w-full flex justify-end pr-0 lg:pr-[9.6875rem]">
            <a href="#read-more" className="group flex items-center gap-2 text-[#193495] text-[1.125rem] lg:text-[1.25rem] font-medium hover:opacity-80 transition-opacity">
              Read more
              <img alt="" className="w-[1rem] lg:w-[1.25rem] h-[1rem] lg:h-[1.25rem] group-hover:translate-x-1 transition-transform" src={imgArrow} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;
