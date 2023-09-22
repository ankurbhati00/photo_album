import imageStyle from "./image.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Image({ setEditImage, imageData, deleteImage }) {
  
  // const [zoom, setZoom] = useState(false);

  // const styleForZoom = {
  //   position: "absolute",
  //   zIndex:"2",
  //   height: "80vh",
  //   width: "80vw",
  //   boxShadow:"2px 5px 1px solid black"
  // };

  function editImage() {
    setEditImage({ name: imageData.name, url: imageData.url, index:imageData.index});
  }

  return (
    <>
      <div id={imageStyle.image_container} >
        <FontAwesomeIcon
          icon={faPen}
          id={imageStyle.faPen}
          onClick={editImage}
        />
        <FontAwesomeIcon icon={faDeleteLeft} id={imageStyle.faDeleteLeft} onClick={()=>deleteImage(imageData.index)} />
        <img
          id={imageStyle.image}
          src={imageData.url}
          alt="avatar"
        />
        <h2 id={imageStyle.image_name}>{imageData.name }</h2>
      </div>
    </>
  );
}
