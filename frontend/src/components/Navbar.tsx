function Navbar() {
  return (
    <div className="bg-[#ec9213] text-white w-full border-b-2 border-gray-100">
      {/*First row */}
      <div className="border-b-2 border-gray-100 w-full">
        {/*for add padding */}
        <div className="flex justify-center items-center py-6 sm:py-8 lg:py-10 w-full">
          <p className="text-3xl sm:text-5xl lg:text-7xl font-bold">My Buddhism</p>
        </div>
      </div>
      {/*Second row */}
      <div>
        {/*for add padding */}
        <div className="px-4 sm:px-8 lg:px-16 py-3 sm:py-4 text-sm sm:text-base lg:text-xl w-full">
          {/*first row */}
          <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3 justify-center">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT ME</p>
            <p>MY BOOKS</p>
            <p>MY VIDEOS</p>
            <p>MY SONGS</p>
            <p>STAR SONG ORACLES</p>
            <p>MYSTERY TEACHINGS</p>
            <p>SACRED LANDSCAPES</p>
            <p>SACRED ART & ALCHEMY</p>
            <p>SACRED SEX</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
