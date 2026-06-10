const Footer = () => {
  return (
    <div className="bg-black text-white text-sm sm:text-base lg:text-lg">
      {/*Top row */}
      <div className="border-b-2 border-white">
        {/*for adding padding and margin */}
        <div className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 flex flex-col items-center px-4">
          {/*Author information */}
          <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
            <div>
              Dolprat Chuavallee, Web developer, and buddhist who study buddha
              lesson
            </div>
            <div className="text-center">and also practice it everyday.</div>
          </div>
          {/*Menus */}
          <div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-3 justify-center">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>MYBOOKS</li>
              <li>STAR SONG ORACLES</li>
              <li>SHAMANIC TRAINING</li>
              <li>CONTACT ME</li>
            </ul>
          </div>
        </div>
      </div>

      {/*Second row */}
      <div>
        {/*for adding padding and margin */}
        <div className="py-6 sm:py-8 lg:py-10 flex justify-center">
          {/*text */}
          <div className="text-xs sm:text-sm">Blog build by React.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
