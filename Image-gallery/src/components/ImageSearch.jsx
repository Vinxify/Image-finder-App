import React, { useEffect, useState, useContext } from "react";
import ImageContext from "../context/ImageContext";

function ImageSearch() {
  const { setTerm } = useContext(ImageContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(text);
  };

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={handleSubmit} className='w-full max-w-sm'>
        <div className='border-b border-b-2 flex items-center border-teal-500  py-2'>
          <input
            onChange={handleChange}
            type='text'
            className='bg-transparent apperance-none border-none w-full text-gray-700 mr-3 oy-1 py-2 leading-tight focus:outline-none'
            placeholder='Search your item...'
          />
          <button
            type='submit'
            className='flex-shrink-o py-1 px-2 rounded bg-teal-500 hover:bg-primary border-teal-500 hover:border-teal-300 text-sm'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
