import ImageWithTitle from "./ImageWithTitle";

const RightSideBody = () => {
  return (
    <div className="w-full lg:w-[30%] shrink-0">
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-6">
        <ImageWithTitle
          title="🔥 Cold & Flu Relief — Now 20% Off"
          imageSrc="/myadvertise.png"
          imageAlt="Cold and flu medicine"
        />
        <ImageWithTitle
          title="💊 Daily Multivitamin — Buy 1 Get 1 Free"
          imageSrc="/myadvertise.png"
          imageAlt="Multivitamin supplement"
        />
      </div>
    </div>
  );
};

export default RightSideBody;
