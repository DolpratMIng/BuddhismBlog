// typescript interface for prop
interface ImageWithTitleProp {
  title: string;
  imageSrc: string;
  imageAlt?: string; // optional prop
}
const ImageWithTitle = ({ title, imageSrc, imageAlt }: ImageWithTitleProp) => {
  return (
    <div className="py-[2vh] flex flex-col justify-center items-center">
      <div>
        {/*Title */}
        <div className="text-2xl py-[2vh] mb-4">{title}</div>
        {/*Image */}
        <div>
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-[90%] h-[40vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithTitle;
