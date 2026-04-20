const Footer = () => {
  return (
    <div className="bg-black text-white   text-lg ">
      {/*Top row */}
      <div className="border-b-2 border-white">
        {/*for adding padding and margin */}
        <div className="pt-[8vh] pb-[5vh] flex flex-col items-center">
          {/*Author information */}
          <div className=" mb-[5vh]">
            <div>
              Dolprat Chuavallee, Web developer, and buddhist who study buddha
              lesson
            </div>
            <div className="text-center">and also practice it everyday.</div>
          </div>
          {/*Menus */}
          <div>
            <div>
              <ul className="flex gap-8">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>MYBOOKS</li>
                <li>STAR SONG ORACLES</li>
              </ul>
            </div>
            <div className="px-[11vh]">
              <ul className="flex gap-8">
                <li>SHAMANIC TRAINING</li>
                <li className="text-center">CONTACT ME</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*Second row */}
      <div>
        {/*for adding padding and margin */}
        <div className="py-[5vh] flex justify-center">
          {/*text */}
          <div className="text-sm">Blog build by React.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
