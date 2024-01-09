import { useContext } from "react";
import ImageContext from "../context/ImageContext";
import ImageCard from "./ImageCard";

import Loading from "./Loading";

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
        <Loading />
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </>
  );
}

export default ImageList;
