const Modal = ({ image, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md ">
        <button
          onClick={closeModal}
          className="btn mb-2 btn-outline btn-primary  text-gray-600 font-bold "
        >
          Close
        </button>
        <img
          src={image.largeImageURL}
          alt={image.tags}
          className="lg:w-96 w-72"
        />
        <div className="p-4">
          <p className="text-lg font-bold mb-2">Author: {image.user}</p>
          <p className="text-lg w-64 font-bold mb-2">Tags: {image.tags}</p>
          <p className="text-lg font-bold mb-2">Views: {image.views}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
