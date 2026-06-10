import ImageWithTitle from "./ImageWithTitle";

const RightSideBody = () => {
  return (
    <div className="w-full lg:w-[30%] shrink-0">
      {/*for adding padding */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-0">
        <ImageWithTitle
          title="Check out my advertise"
          imageSrc="/myadvertise.png"
          imageAlt="advertisement"
        />
        <ImageWithTitle
          title="Check out my advertise"
          imageSrc="/myadvertise.png"
          imageAlt="advertisement"
        />
      </div>
    </div>
  );
};

export default RightSideBody;
