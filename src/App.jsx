import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./component/SearchBar";
import Modal from "./component/Modal";
import ImageCard from "./component/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [counter, setCounter] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query) => {
    setIsSearching(true);
    try {
      if (!query) {
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: "25043611-088af784023e496f4c42528fa",
            category: "backgrounds",
            editors_choice: true,
            per_page: 20,
          },
        });
        setImages(response.data.hits);
      } else {
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: "25043611-088af784023e496f4c42528fa",
            q: query,
            image_type: "photo",
            per_page: 20,
          },
        });
        setImages(response.data.hits);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <>
      <div className="container mx-auto py-8">
        <SearchBar handleSearch={handleSearch} />
        <div className="flex justify-around my-5">
          <h1 className="text-2xl  font-bold mb-4">Explore all images</h1>
          <p className="text-lg font-bold">Counter: {counter}</p>
        </div>
        {isSearching ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          <ImageCard images={images} openModal={openModal} />
        )}
        {selectedImage && (
          <Modal image={selectedImage} closeModal={closeModal} />
        )}
      </div>
    </>
  );
}

export default App;
