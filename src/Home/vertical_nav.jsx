import React from 'react';
import {Menu, Home, Funnel, Star, Search, Heart } from 'lucide-react'; // lucide icons

const VerticalNavbar = () => {
  return (
  <div className="fixed top-0 left-0 h-screen w-[60px] bg-[#0a1a3a] flex flex-col justify-between items-center py-6 z-50">
  {/* Top icons */}
  <div className="flex flex-col items-center gap-y-6 sm:gap-y-10">
    <div className="relative group">
      <Menu className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-0 px-3 py-1.5 text-2xl bg-[#0a1a3a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap w-30 h-12 font-bold">
        Menu
      </span>
    </div>

    <div className="relative group">
      <Home className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-0 px-3 py-1.5 text-2xl bg-[#0a1a3a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap w-30 h-12 font-bold">
        Home
      </span>
    </div>

    <div className="relative group">
      <Search className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-0 px-3 py-1.5 text-2xl bg-[#0a1a3a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap w-30 h-12 font-bold">
        Search
      </span>
    </div>

    <div className="relative group">
      <Funnel className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-0 px-3 py-1.5 text-2xl bg-[#0a1a3a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap w-30 h-12 font-bold">
        Filter
      </span>
    </div>

    <div className="relative group">
      <Star className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
      <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-0 px-3 py-1.5 text-2xl bg-[#0a1a3a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap w-35 h-12 font-bold">
        Top Rated
      </span>
    </div>

    
  </div>

  {/* Bottom icon */}
  <div className="relative group mb-2">
    <Heart className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300" />
    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-0 px-3 py-1.5 text-2xl bg-[#0a1a3a] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap w-34 h-12 font-bold">
      Favorites
    </span>
  </div>
</div>



    

  );
};

export default VerticalNavbar;
