const ImageCard = ({ images, openModal }) => {
  return (
    <div className="flex flex-wrap justify-center  gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="w-96 bg-emerald-50 border rounded-2xl overflow-hidden"
        >
          <img
            src={image.previewURL}
            alt={image.tags}
            className="w-full h-52 rounded-2xl object-cover cursor-pointer"
            onClick={() => openModal(image)}
          />
          <div className="p-4">
            <p className="text-sm text-gray-600">
              <span className="font-bold">Author : </span>
              {image.user}
            </p>
            <p className="text-sm text-gray-600">
              {" "}
              <span className="font-bold">Tags : </span> {image.tags}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
