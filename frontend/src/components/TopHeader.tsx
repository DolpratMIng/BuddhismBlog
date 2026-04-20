const TopHeader = () => {
  return (
    <div className="py-[8vh] bg-[#ec9213] text-white">
      {/*container for image */}
      <div className="flex flex-col justify-center items-center ">
        <img src="/buddha4.jpg" alt="image1" className="w-[90%]" />
        <div className="py-[7vh] font-bold ">Phra Buddha Chinnarat</div>
      </div>

      {/*Title and content text */}
      <div className="flex flex-col justify-center items-center">
        {/*Title */}
        <div className="text-5xl font-bold">
          What is Buddhism, and what is the highest goal?
        </div>

        {/*content */}
        <div className="pt-[8vh] w-[50%] text-lg">
          <div className="">
            Buddhism is the religion that has been born for over 2500 years ago
            by Siddhartha Gautama, the "Buddha". The goal of the religion is aim
            to achieving enlightenment(Nivana) to end the suffering
          </div>

          {/*source */}
          <div className="flex justify-center pt-[6vh]">
            Waka Takahashi Brown(Stanford University)
          </div>

          {/*Date */}
          <div className="flex justify-center pt-[1vh]">December, 2002</div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
