import LeftSideBody from "./LeftSideBody";
import RightSideBody from "./RightSideBody";
import TrendingImage from "./TrendingImage";

const Body = () => {
  return (
    <div className="pt-[5vh] w-full">
      <div className="px-[18%]">
        <div className="flex gap-[17vh]">
          {/*Body left side */}
          <LeftSideBody />
          {/*Body right side */}
          <RightSideBody />
        </div>
      </div>

      <div className="px-[10%]">
        {/*For Trending section */}
        <div className="py-[10vh]">
          {/*Trending and underline */}
          <div className="mb-[3vh]">
            <p className="text-2xl font-bold">TRENDING</p>
            <div className="w-full bg-black h-[0.5vh]"></div>
          </div>
          {/*image and text below */}
          <div className="flex gap-[1vh]">
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="advertise"
              title="ADVERTISEMENT: JUST ADVERTISE"
            />
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="advertise"
              title="ADVERTISEMENT: JUST ADVERTISE"
            />
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="advertise"
              title="ADVERTISEMENT: JUST ADVERTISE"
            />
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="advertise"
              title="ADVERTISEMENT: JUST ADVERTISE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
