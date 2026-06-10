const TopHeader = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#ec9213] text-white">
      {/*container for image */}
      <div className="flex flex-col justify-center items-center px-4">
        <img src="/buddha4.jpg" alt="image1" className="w-full max-w-4xl" />
        <div className="py-6 sm:py-8 lg:py-10 font-bold text-lg sm:text-xl lg:text-2xl">
          Phra Buddha Chinnarat
        </div>
      </div>

      {/*Title and content text */}
      <div className="flex flex-col justify-center items-center px-4">
        {/*Title */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
          What is Buddhism, and what is the highest goal?
        </div>

        {/*content */}
        <div className="pt-8 sm:pt-12 lg:pt-16 w-full lg:w-[60%] xl:w-[50%] text-base sm:text-lg">
          <div>
            Buddhism is the religion that has been born for over 2500 years ago
            by Siddhartha Gautama, the "Buddha". The goal of the religion is aim
            to achieving enlightenment(Nivana) to end the suffering
          </div>

          {/*source */}
          <div className="flex justify-center pt-8 sm:pt-12">
            Waka Takahashi Brown(Stanford University)
          </div>

          {/*Date */}
          <div className="flex justify-center pt-2">December, 2002</div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
