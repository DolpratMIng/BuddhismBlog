type TrendingImageProp = {
  imageSrc: string;
  title: string;
  imageAlt: string;
};
const TrendingImage = ({ imageSrc, title, imageAlt }: TrendingImageProp) => {
  return (
    <div className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[23%] max-w-[280px] bg-white rounded-xl shadow-md shadow-blue-100/50 p-3 sm:p-4 border border-sky-50 hover:shadow-lg hover:shadow-purple-100/50 transition-shadow">
      {/*Image */}
      <div className="w-full mb-2 sm:mb-3 rounded-lg overflow-hidden">
        <img src={imageSrc} alt={imageAlt} className="w-full h-32 sm:h-40 object-cover" />
      </div>
      {/*Text */}
      <div>
        <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-700">{title}</p>
        <p className="text-xs text-sky-500 mt-1 font-semibold">$12.99</p>
      </div>
    </div>
  );
};

export default TrendingImage;
