import React from 'react';

// Assets
const imgMainBlog = "http://localhost:3845/assets/ca6d900649038cfcd64288928809d54fa04ea918.png";
const imgSubBlog1 = "http://localhost:3845/assets/5606841c06d07e1b6fd16403d0e3a3a3801c4486.png";
const imgSubBlog2 = "http://localhost:3845/assets/9338814dcbc138c1c420ae77970b9eb94a16471f.png";
const imgSubBlog3 = "http://localhost:3845/assets/54938947b1bf7d247e5037ac3b866d668406f92c.png";
const imgArrow = "http://localhost:3845/assets/991880a219645240d444aae8f61516de9618083b.svg";

const BlogSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-[100px] font-['Lato',sans-serif]">
      <div className="w-full max-w-[1440px] px-6 lg:px-[45px] flex flex-col gap-[100px]">
        
        {/* Top Part - Tips & Tricks */}
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[35px] items-center lg:items-start pl-0 lg:pl-[0px]">
          {/* Left Image */}
          <div className="w-full lg:w-[642px] h-[300px] lg:h-[391px] flex-shrink-0">
            <img alt="Tips and tricks" className="w-full h-full object-cover rounded-[10px]" src={imgMainBlog} />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 max-w-[641px] pt-[20px] lg:pt-[29px] pl-0 lg:pl-[43px]">
            <div className="flex flex-col items-start mb-6 lg:mb-8">
              <p className="text-[#193495] text-[20px] lg:text-[24px] font-bold mb-2">Tips & Tricks</p>
              <div className="w-[145px] h-[1px] bg-[#193495]"></div>
            </div>
            
            <h3 className="text-black text-[24px] lg:text-[32px] font-bold leading-tight mb-4 lg:mb-[25px]">
              The Secret to Long-Lasting Smartwatch Battery Life: Charge Right, Use Longer
            </h3>
            
            <p className="text-black text-[16px] lg:text-[24px] font-medium leading-[1.4] mb-6 lg:mb-[75px]">
              Nothing is more annoying than your Smartwatch dying mid-day. But did you know that daily charging habits can significantly affect battery lifespan? We'll share 4 simple tips to optimize your watch's battery performance...
            </p>
            
            <a href="#read-more" className="group flex items-center gap-2 text-[#193495] text-[18px] lg:text-[20px] font-medium hover:opacity-80 transition-opacity w-fit">
              Read more
              <img alt="" className="w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] group-hover:translate-x-1 transition-transform" src={imgArrow} />
            </a>
          </div>
        </div>

        {/* Bottom Part - Product Review */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center mb-6 lg:mb-10 text-center">
            <p className="text-[#193495] text-[20px] lg:text-[24px] font-bold mb-2">Product Review</p>
            <div className="w-[145px] h-[1px] bg-[#193495] mb-6"></div>
            
            <h3 className="text-black text-[24px] lg:text-[32px] font-bold leading-tight max-w-[1038px] mb-4">
              The Top 5 Smartwatches of 2025: From Gym Sessions to the Boardroom
            </h3>
            
            <p className="text-black text-[16px] lg:text-[24px] font-medium max-w-[902px] leading-[1.4]">
              Looking for the perfect Smartwatch? The 2025 market is more vibrant than ever! This post will help you discover the 5 most outstanding models – from durable designs for fitness enthusiasts, to luxurious styles with all the necessary office features....
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px] w-full mb-8 lg:mb-6">
            <div className="h-[250px] lg:h-[291px] rounded-[5px] overflow-hidden group cursor-pointer">
              <img alt="Review 1" className="w-full h-full object-cover rounded-[5px] group-hover:scale-105 transition-transform duration-500" src={imgSubBlog1} />
            </div>
            <div className="h-[250px] lg:h-[291px] rounded-[5px] overflow-hidden group cursor-pointer">
              <img alt="Review 2" className="w-full h-full object-cover rounded-[5px] group-hover:scale-105 transition-transform duration-500" src={imgSubBlog2} />
            </div>
            <div className="h-[250px] lg:h-[291px] rounded-[5px] overflow-hidden group cursor-pointer">
              <img alt="Review 3" className="w-full h-full object-cover rounded-[5px] group-hover:scale-105 transition-transform duration-500" src={imgSubBlog3} />
            </div>
          </div>

          {/* Read More Link Right Aligned */}
          <div className="w-full flex justify-end pr-0 lg:pr-[155px]">
            <a href="#read-more" className="group flex items-center gap-2 text-[#193495] text-[18px] lg:text-[20px] font-medium hover:opacity-80 transition-opacity">
              Read more
              <img alt="" className="w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] group-hover:translate-x-1 transition-transform" src={imgArrow} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;
