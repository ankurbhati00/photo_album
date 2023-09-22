import Card from "../card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import albumsListStyle from "./albumsListStyle.module.css";
import { useEffect, useRef, useState } from "react";
import db from "../../firebaseInit";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

export default function AlbumsList({ setView, setCurrentAlbum }) {
  const [addAlbum, setAddAlbum] = useState(false);
  const [albumList, setAlbumList] = useState([]);
  const albumRef = useRef();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "photo-album"), (snapshot) => {
      const albums = snapshot.docs.map((doc) => {
        
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setAlbumList(albums);
      setAddAlbum(false);
    });
  }, []);

  async function addAlbumToDB() {
    const albumName = albumRef.current.value;
    if (albumName) {
      try {
        await addDoc(collection(db, "photo-album"), {
          album: albumName,
          images: [],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  function clearInput() {
    albumRef.current.value = "";
  }

  // this is an AddAlbumCard Element
  function AddAlbumCard() {
    return (
      <div id={albumsListStyle.create_album_container}>
        <h1>Create an album</h1>
        <input
          id={albumsListStyle.album_input}
          ref={albumRef}
          type="text"
          placeholder="Album name"
        />
        <button id={albumsListStyle.clear_btn} onClick={clearInput}>
          Clear
        </button>
        <button id={albumsListStyle.create_btn} onClick={addAlbumToDB}>
          Create
        </button>
      </div>
    );
  }

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
        {albumList.map((elm) => (
          <Card
            key={elm.album}
            albumName={elm.album}
            albumId={elm.id}
            setView={setView}
            setCurrentAlbum={setCurrentAlbum}
          />
        ))}
      </div>
    </>
  );
}
