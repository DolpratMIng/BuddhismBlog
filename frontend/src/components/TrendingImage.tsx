type TrendingImageProp = {
  imageSrc: string;
  title: string;
  imageAlt: string;
};
const TrendingImage = ({ imageSrc, title, imageAlt }: TrendingImageProp) => {
  return (
    <div>
      {/*Image */}
      <div className="w-[40vh] mb-[2vh]">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      {/*Text */}
      <div>
        <p className="text-lg">{title}</p>
      </div>
    </div>
  );
};

export default TrendingImage;
