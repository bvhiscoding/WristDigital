import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-full min-h-screen bg-white pb-20 pt-[120px] lg:pt-[151px]">
      <div className="max-w-[1211px] mx-auto px-5 xl:px-0">
        {/* Header: Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 lg:mb-16">
          <h1 className="text-[28px] md:text-[36px] font-[900] text-[#193495] uppercase tracking-wide">
            MY PROFILE
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4 w-full lg:w-[300px]">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-[#eaf0ff]">
              <img 
                src="/user-avatar.png" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="px-6 py-2 border-2 border-[#193495] text-[#193495] rounded-full font-bold hover:bg-[#193495] hover:text-white transition-colors">
              Change Avatar
            </button>
          </div>

          {/* Form Section */}
          <div className="flex-1 bg-[#eaf0ff]/30 p-8 rounded-[20px]">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-bold text-[#0c1950]">First Name</label>
                  <input 
                    type="text" 
                    defaultValue="John"
                    className="h-[50px] rounded-[10px] border border-gray-300 bg-white px-4 text-[#0c1950] outline-none focus:border-[#193495] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-bold text-[#0c1950]">Last Name</label>
                  <input 
                    type="text" 
                    defaultValue="Doe"
                    className="h-[50px] rounded-[10px] border border-gray-300 bg-white px-4 text-[#0c1950] outline-none focus:border-[#193495] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-bold text-[#0c1950]">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="johndoe@example.com"
                  className="h-[50px] rounded-[10px] border border-gray-300 bg-gray-100 px-4 text-[#0c1950] outline-none opacity-80 cursor-not-allowed"
                  disabled
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-bold text-[#0c1950]">Phone Number</label>
                <input 
                  type="tel" 
                  defaultValue="+84 123 456 789"
                  className="h-[50px] rounded-[10px] border border-gray-300 bg-white px-4 text-[#0c1950] outline-none focus:border-[#193495] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-bold text-[#0c1950]">Address</label>
                <textarea 
                  defaultValue="123 Tran Hung Dao Street, Hoan Kiem District, Hanoi"
                  className="min-h-[100px] resize-none rounded-[10px] border border-gray-300 bg-white p-4 text-[#0c1950] outline-none focus:border-[#193495] transition-colors"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <button 
                  type="submit"
                  className="h-[50px] px-8 bg-[#193495] text-white text-[16px] font-bold rounded-[10px] hover:bg-[#1030b0] transition-colors hover:shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
