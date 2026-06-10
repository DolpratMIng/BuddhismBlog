function Navbar() {
  return (
    <div className="bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200 text-slate-800 w-full border-b border-white/50 shadow-sm">
      {/*First row */}
      <div className="border-b border-white/50 w-full">
        <div className="flex justify-center items-center py-6 sm:py-8 lg:py-10 w-full">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              CloudCare
            </span>
            <span className="text-2xl sm:text-4xl lg:text-6xl font-light text-slate-500">Pharmacy</span>
          </div>
        </div>
      </div>
      {/*Second row */}
      <div>
        <div className="px-4 sm:px-8 lg:px-16 py-3 sm:py-4 text-sm sm:text-base lg:text-lg w-full">
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 justify-center font-medium">
            <span className="text-sky-700">HOME</span>
            <span className="hover:text-sky-700 transition-colors cursor-pointer">MEDICINES</span>
            <span className="hover:text-sky-700 transition-colors cursor-pointer">HEALTH TIPS</span>
            <span className="hover:text-sky-700 transition-colors cursor-pointer">ABOUT US</span>
            <span className="hover:text-sky-700 transition-colors cursor-pointer">CONTACT</span>
            <span className="hover:text-sky-700 transition-colors cursor-pointer">PRESCRIPTION</span>
            <span className="hover:text-sky-700 transition-colors cursor-pointer">DELIVERY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
