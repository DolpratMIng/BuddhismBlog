// typescript interface for prop
interface ImageWithTitleProp {
  title: string;
  imageSrc: string;
  imageAlt?: string; // optional prop
}
const ImageWithTitle = ({ title, imageSrc, imageAlt }: ImageWithTitleProp) => {
  return (
    <div className="py-4 sm:py-6 flex flex-col justify-center items-center">
      <div className="w-full bg-white rounded-xl shadow-md shadow-purple-100/50 p-4 sm:p-6 border border-sky-100">
        {/*Title */}
        <div className="text-base sm:text-lg lg:text-xl font-semibold py-3 sm:py-4 mb-4 text-center text-slate-700">
          {title}
        </div>
        {/*Image */}
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full max-w-xs h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithTitle;
