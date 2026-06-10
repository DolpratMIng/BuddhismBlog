import LeftSideBody from "./LeftSideBody";
import RightSideBody from "./RightSideBody";
import TrendingImage from "./TrendingImage";

const Body = () => {
  return (
    <div className="pt-6 sm:pt-10 w-full">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/*Body left side */}
          <LeftSideBody />
          {/*Body right side */}
          <RightSideBody />
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16 xl:px-24">
        {/*For Trending section */}
        <div className="py-8 sm:py-12 lg:py-16">
          {/*Trending and underline */}
          <div className="mb-4 sm:mb-6">
            <p className="text-xl sm:text-2xl font-bold">TRENDING</p>
            <div className="w-full bg-black h-0.5"></div>
          </div>
          {/*image and text below */}
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
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
