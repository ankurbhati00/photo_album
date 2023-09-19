import Image from "../Image/image";
import imageListStyle from "./imageListStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ImageList({ setView }) {
  const [addImage, setAddImage] = useState(false);

  return (
    <>
      {addImage && <AddImageCard />}
      <div id={imageListStyle.image_list_container}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          id={imageListStyle.back_btn}
          onClick={() => setView("albums")}
        />
        <div id={imageListStyle.images_in_album}>Images in album xyx</div>
        {/* ADD IMAGE BUTTON */}
        {!addImage && (
          <button
            id={imageListStyle.add_image}
            onClick={() => setAddImage(!addImage)}
          >
            <FontAwesomeIcon icon={faPlus} id={imageListStyle.plus_icon} />
            Add image
          </button>
        )}

        {/* CANCEL BUTTON */}
        {addImage && (
          <button
            id={imageListStyle.cancel_btn}
            onClick={() => setAddImage(!addImage)}
          >
            cancel
          </button>
        )}
      </div>
      {/* photos list */}

      <div id={imageListStyle.imageListContainer}>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </>
  );
}

function AddImageCard() {
  return (
    <div id={imageListStyle.create_image_container}>
      <h1>Add Image to album</h1>
      <input id={imageListStyle.image_input} type="text" placeholder="Name" />
      <input id={imageListStyle.image_input} type="text" placeholder="Url" />
      <button id={imageListStyle.clear_btn}>Clear</button>
      <button id={imageListStyle.create_btn}>Add</button>
    </div>
  );
}
