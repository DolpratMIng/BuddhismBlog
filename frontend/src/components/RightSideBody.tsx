import ImageWithTitle from "./ImageWithTitle";

const RightSideBody = () => {
  return (
    <div className="w-[40%]">
      {/*for adding padding */}
      <div>
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
