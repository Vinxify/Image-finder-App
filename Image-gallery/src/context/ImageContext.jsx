import { createContext } from "react";
import { useState, useEffect } from "react";
import { API_KEY, TIMEOUT_SEC, URL } from "../config/config";
import Loading from "../components/Loading";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetchApi();
  }, [term]);

  const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  const fetchApi = async () => {
    try {
      const fetchSiteUrl = fetch(
        `${URL}?key=${API_KEY}&q=${term}&image_type=photo`
      );
      const response = await Promise.race([timeout(1), fetchSiteUrl]);
      const data = await response.json();
      // if (!response.ok) throw new Error(`${data.message} (${res.status})`);
      console.log(data);
      setImages(data.hits);
      setIsLoading(false);
    } catch (err) {
      console.error(`${err.message} ${err}`);

      if (err) {
        const newError = () => <p>Bad request</p>;
      }
    }
  };

  return (
    <ImageContext.Provider value={{ images, isLoading }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
