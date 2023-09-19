import Navbar from "./components/navbar/navbar.js";
import AlbumsList from "./components/main/albumsList.js";
import ImageList from "./components/main/imageList.js";
import { useState } from "react";

function App() {
  const [view, setView] = useState('albums');

  

  
  return (
    <>
      <Navbar />
      {view === "albums" && <AlbumsList setView={setView} />}
      {view === "images" && <ImageList setView={setView} />}
    </>
  );
}

export default App;
