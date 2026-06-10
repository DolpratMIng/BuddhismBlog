const TopHeader = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50 text-slate-700">
      {/*container for image */}
      <div className="flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg shadow-purple-200/50">
          <img src="/buddha4.jpg" alt="CloudCare Pharmacy" className="w-full h-48 sm:h-64 lg:h-80 object-cover" />
        </div>
        <div className="py-6 sm:py-8 lg:py-10 font-bold text-lg sm:text-xl lg:text-2xl text-sky-700">
          Your Trusted Pharmacy — Care Within Reach
        </div>
      </div>

      {/*Title and content text */}
      <div className="flex flex-col justify-center items-center px-4">
        {/*Title */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
          Quality Medicines, <span className="bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Delivered with Care</span>
        </div>

        {/*content */}
        <div className="pt-8 sm:pt-12 lg:pt-16 w-full lg:w-[60%] xl:w-[50%] text-base sm:text-lg text-slate-600">
          <div>
            At CloudCare Pharmacy, we believe everyone deserves access to safe,
            affordable medicines. From over-the-counter remedies to prescription
            medications, our licensed pharmacists ensure every product meets the
            highest quality standards. Your health is our priority — we're here
            to help you feel your best, every day.
          </div>

          {/*source */}
          <div className="flex justify-center pt-8 sm:pt-12 text-slate-400 text-sm">
            CloudCare Pharmacy — Est. 2026
          </div>

          {/*Date */}
          <div className="flex justify-center pt-2 text-slate-400 text-sm">
            Licensed by the FDA
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
