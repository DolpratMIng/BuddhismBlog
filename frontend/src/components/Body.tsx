import LeftSideBody from "./LeftSideBody";
import RightSideBody from "./RightSideBody";
import TrendingImage from "./TrendingImage";

const Body = () => {
  return (
    <div className="pt-6 sm:pt-10 w-full bg-gradient-to-b from-white via-sky-50/30 to-purple-50/30">
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
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              🌟 Top Medicines
            </p>
            <div className="w-full h-0.5 bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 mt-1 rounded-full"></div>
          </div>
          {/*image and text below */}
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="Paracetamol 500mg"
              title="Paracetamol 500mg"
            />
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="Amoxicillin 250mg"
              title="Amoxicillin 250mg"
            />
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="Vitamin C 1000mg"
              title="Vitamin C 1000mg"
            />
            <TrendingImage
              imageSrc="myadvertise.png"
              imageAlt="Ibuprofen 400mg"
              title="Ibuprofen 400mg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
