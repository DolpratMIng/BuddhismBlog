const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-sky-800 via-purple-800 to-pink-800 text-white text-sm sm:text-base lg:text-lg">
      {/*Top row */}
      <div className="border-b-2 border-white/20">
        <div className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 flex flex-col items-center px-4">
          {/*Author information */}
          <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              ☁️ CloudCare Pharmacy
            </div>
            <div className="mt-2 text-sky-100/80">
              Your health, our commitment — safe medicines, delivered with care.
            </div>
          </div>
          {/*Menus */}
          <div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-3 justify-center text-sky-100/80">
              <li className="hover:text-white transition-colors cursor-pointer">HOME</li>
              <li className="hover:text-white transition-colors cursor-pointer">MEDICINES</li>
              <li className="hover:text-white transition-colors cursor-pointer">ABOUT US</li>
              <li className="hover:text-white transition-colors cursor-pointer">CONTACT</li>
              <li className="hover:text-white transition-colors cursor-pointer">DELIVERY</li>
              <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      {/*Second row */}
      <div>
        <div className="py-6 sm:py-8 lg:py-10 flex flex-col items-center gap-2">
          <p className="text-xs sm:text-sm text-sky-100/60">
            © 2026 CloudCare Pharmacy. All rights reserved.
          </p>
          <p className="text-xs text-sky-100/40">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
