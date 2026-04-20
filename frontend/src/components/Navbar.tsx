function Navbar() {
  return (
    <div className="bg-[#ec9213] text-white w-full border-b-2 border-gray-100">
      {/*First row */}
      <div className="border-b-2 border-gray-100 w-full">
        {/*for add padding */}
        <div className="flex justify-center items-center py-[5vh] w-full">
          <p className="text-7xl font-bold">My Buddhism</p>
        </div>
      </div>
      {/*Second row */}
      <div>
        {/*for add padding */}
        <div className="px-[15vh] py-[2vh] text-xl w-full">
          {/*first row */}
          <div className="flex gap-[2vh]">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT ME</p>
            <p>MY BOOKS</p>
            <p>MY VIDEOS</p>
            <p>MY SONGS</p>
            <p>STAR SONG ORACLES</p>
            <p>MYSTERY TEACHINGS</p>
            <p>SACRED LANDSCAPES</p>
            {/* <p>SACRED ART & ALCHEMY</p>
            <p>SACRED SEX</p> */}
          </div>
          <div className="flex gap-[2vh] items-center justify-center pt-[4vh]">
            <p>SACRED ART & ALCHEMY</p>
            <p>SACRED SEX</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
