import { ImageProvider } from "./context/ImageContext";

import ImageSearch from "./components/ImageSearch";
import ImageList from "./components/ImageList";

function App() {
  return (
    <ImageProvider>
      <div className='container  mx-auto'>
        <ImageSearch searchText={(term) => setTerm(term)} />
        <ImageList />
      </div>
    </ImageProvider>
  );
}

export default App;
