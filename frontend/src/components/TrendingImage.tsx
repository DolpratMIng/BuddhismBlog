type TrendingImageProp = {
  imageSrc: string;
  title: string;
  imageAlt: string;
};
const TrendingImage = ({ imageSrc, title, imageAlt }: TrendingImageProp) => {
  return (
    <div className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[23%] max-w-[280px]">
      {/*Image */}
      <div className="w-full mb-2 sm:mb-4">
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
      </div>
      {/*Text */}
      <div>
        <p className="text-sm sm:text-base lg:text-lg">{title}</p>
      </div>
    </div>
  );
};

export default TrendingImage;
