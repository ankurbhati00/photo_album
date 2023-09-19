import Card from "../card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import albumsListStyle from "./albumsListStyle.module.css";
import { useState } from "react";

export default function AlbumsList({ setView }) {
  const [addAlbum, setAddAlbum] = useState(false);

  return (
    <>
      {addAlbum && <AddAlbumCard />}
      <div id={albumsListStyle.album_list_container}>
        <div id={albumsListStyle.your_albums_text}>Your albums</div>
        {/* ADD ALBUM BUTTON */}
        {!addAlbum && (
          <button
            id={albumsListStyle.add_album}
            onClick={() => setAddAlbum(!addAlbum)}
          >
            <FontAwesomeIcon icon={faPlus} id={albumsListStyle.plus_icon} />
            Add Album
          </button>
        )}

        {/* CANCEL BUTTON */}
        {addAlbum && (
          <button
            id={albumsListStyle.cancel_btn}
            onClick={() => setAddAlbum(!addAlbum)}
          >
            cancel
          </button>
        )}
      </div>
      {/* cards list */}
      <div id={albumsListStyle.card_list_container}>
        <Card setView={setView} />
        <Card setView={setView} />
        <Card setView={setView} />
        <Card setView={setView} />
        <Card setView={setView} />
      </div>
    </>
  );
}

function AddAlbumCard() {
  return (
    <div id={albumsListStyle.create_album_container}>
      <h1>Create an album</h1>
      <input
        id={albumsListStyle.album_input}
        type="text"
        placeholder="Album name"
      />
      <button id={albumsListStyle.clear_btn}>Clear</button>
      <button id={albumsListStyle.create_btn}>Create</button>
    </div>
  );
}
