import React from "react";

function ImageCard({ image }) {
  const tags = image.tags.split(",");

  return (
    <div className='card card-normal max-w-sm shadow-xl'>
      <figure>
        <img src={image.webformatURL} className='w-full' alt='' />
      </figure>

      <div className='card-body'>
        <h2 className='card-title capitalize text-primary'>
          Photo by {image.user}
        </h2>

        <ul className='text-gray-300'>
          <li>
            <strong> Views: {image.views}</strong>
          </li>
          <li>
            <strong> Download: {image.downloads}</strong>
          </li>
          <li>
            <strong> Likes: {image.likes}</strong>
          </li>
        </ul>

        <div className='px-1 py-4'>
          {tags.map((tag) => (
            <span
              key={tags.index}
              className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2 my-1'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
