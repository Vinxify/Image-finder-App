import { ImageProvider } from "./context/ImageContext";

import ImageSearch from "./components/ImageSearch";
import ImageList from "./components/ImageList";
// import { useContext } from "react";

// import ImageContext from "./context/ImageContext";

function App() {
  return (
    <ImageProvider>
      <div className='container  mx-auto'>
        <ImageSearch />
        <ImageList />
      </div>
    </ImageProvider>
  );
}

export default App;
