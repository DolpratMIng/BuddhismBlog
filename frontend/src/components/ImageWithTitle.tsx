// typescript interface for prop
interface ImageWithTitleProp {
  title: string;
  imageSrc: string;
  imageAlt?: string; // optional prop
}
const ImageWithTitle = ({ title, imageSrc, imageAlt }: ImageWithTitleProp) => {
  return (
    <div className="py-4 sm:py-6 flex flex-col justify-center items-center">
      <div className="w-full">
        {/*Title */}
        <div className="text-xl sm:text-2xl py-3 sm:py-4 mb-4 text-center">{title}</div>
        {/*Image */}
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full max-w-xs h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithTitle;
