import React from 'react';

const BlogSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-[4rem] lg:py-[6.25rem] font-['Lato',sans-serif]">
      <div className="w-full max-w-[90rem] px-4 lg:px-[3.6875rem] flex flex-col gap-[5rem] lg:gap-[6.25rem]">
        
        {/* Top Part - Tips & Tricks */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img 
              alt="Tips and tricks" 
              className="w-full h-auto aspect-[4/3] lg:aspect-auto lg:h-[30rem] object-cover rounded-[1rem] shadow-sm" 
              src="/HomePage/BlogSection/1st-blog.png" 
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col flex-1 w-full lg:w-1/2">
            <div className="flex flex-col items-start mb-6">
              <span className="text-[#193495] text-[1.125rem] lg:text-[1.25rem] font-bold mb-1">
                Tips & Tricks
              </span>
              <div className="w-[8rem] h-[2px] bg-[#193495]"></div>
            </div>
            
            <h3 className="text-black text-[1.75rem] lg:text-[2.25rem] font-bold leading-tight mb-4 lg:mb-6">
              The Secret to Long-Lasting Smartwatch Battery Life: Charge Right, Use Longer
            </h3>
            
            <p className="text-gray-800 text-[1rem] lg:text-[1.25rem] leading-relaxed mb-6 lg:mb-8 font-medium">
              Nothing is more annoying than your Smartwatch dying mid-day. But did you know that daily charging habits can significantly affect battery lifespan? We'll share 4 simple tips to optimize your watch's battery performance...
            </p>
            
            <a href="#read-more" className="group flex items-center gap-2 text-[#193495] text-[1.125rem] lg:text-[1.25rem] font-medium hover:text-[#0c1950] transition-colors w-fit">
              Read more
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-5 lg:h-5 mt-[2px] group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Part - Product Review */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center mb-8 lg:mb-12 text-center w-full max-w-[60rem]">
            <div className="flex flex-col items-center mb-6">
              <span className="text-[#193495] text-[1.125rem] lg:text-[1.25rem] font-bold mb-1">
                Product Review
              </span>
              <div className="w-[10rem] h-[2px] bg-[#193495]"></div>
            </div>
            
            <h3 className="text-black text-[1.75rem] lg:text-[2.25rem] font-bold leading-tight mb-4">
              The Top 5 Smartwatches of 2025: From Gym Sessions to the Boardroom
            </h3>
            
            <p className="text-gray-800 text-[1rem] lg:text-[1.25rem] font-medium leading-relaxed w-full lg:max-w-[48rem]">
              Looking for the perfect Smartwatch? The 2025 market is more vibrant than ever! This post will help you discover the 5 most outstanding models – from durable designs for fitness enthusiasts, to luxurious styles with all the necessary office features....
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
            <div className="h-[16rem] lg:h-[20rem] rounded-[1rem] overflow-hidden group cursor-pointer shadow-sm">
              <img alt="Review 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/HomePage/BlogSection/2nd-blog.png" />
            </div>
            <div className="h-[16rem] lg:h-[20rem] rounded-[1rem] overflow-hidden group cursor-pointer shadow-sm">
              <img alt="Review 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/HomePage/BlogSection/3rd-blog.png" />
            </div>
            <div className="h-[16rem] lg:h-[20rem] rounded-[1rem] overflow-hidden group cursor-pointer shadow-sm">
              <img alt="Review 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/HomePage/BlogSection/4th-blog.png" />
            </div>
          </div>

          {/* Read More Link Right Aligned */}
          <div className="w-full flex justify-end">
            <a href="#read-more" className="group flex items-center gap-2 text-[#193495] text-[1.125rem] lg:text-[1.25rem] font-medium hover:text-[#0c1950] transition-colors">
              Read more
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lg:w-5 lg:h-5 mt-[2px] group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;
