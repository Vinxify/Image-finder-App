import { useContext } from "react";
import ImageContext from "../context/ImageContext";
import ImageCard from "./ImageCard";

import Spinner from "../assets/Spinner";

// import Loading from "./Loading";

function ImageList() {
  const { images, isLoading } = useContext(ImageContext);
  return (
    <>
      {/* No images */}
      {!isLoading && images.length === 0 && (
        <h1 className='text-center text-5xl mx-auto mt-32'>No images found</h1>
      )}

      {/* images */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-3 gap-4 sm:grid sm:grid-cols-2'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </>
  );
}

export default ImageList;
