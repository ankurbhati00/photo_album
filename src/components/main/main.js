import mainStyle from "./main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function addAlbum() {}

export default function Main() {
  return (
    <>
      {/* conatiner to enter name of album and create an album*/}
      <div id={mainStyle.create_album_container}>
        <h1>Create an album</h1>
        <input id={mainStyle.album_input} type="text" placeholder="Album name" />
        <button id={mainStyle.clear_btn}>Clear</button>
        <button id={mainStyle.create_btn}>Create</button>
      </div>

      {/* show all all list */}

      <div id={mainStyle.album_list_container}>
        <div id={mainStyle.your_albums_text}>Your albums</div>
        <button id={mainStyle.add_album} onClick={() => addAlbum()}>
          <FontAwesomeIcon icon={faPlus} id={mainStyle.plus_icon} />
          Add Album
        </button>
      </div>
    </>
  );
}
