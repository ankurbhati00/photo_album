import imageStyle from "./image.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Image({ setEditImage, imageData, deleteImage, setCarousel }) {
 
  // check image url validation
  let imageUrl ="https://t3.ftcdn.net/jpg/03/93/13/46/360_F_393134695_XFGri3Y1DKu71d5LVRd0krpKpvFu6U1U.jpg";
  (() => {
    try {
       new URL(imageData.url);
       imageUrl = imageData.url;
      
    } catch (error) {
      console.log(error)
    }
  })();

  function editImage() {
    setEditImage({
      name: imageData.name,
      url: imageData.url,
      index: imageData.index,
    });
  }

  return (
    <>
      <div id={imageStyle.image_container}>
        <FontAwesomeIcon
          icon={faPen}
          id={imageStyle.faPen}
          onClick={editImage}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          id={imageStyle.faTrashCan}
          onClick={() => deleteImage(imageData.index)}
        />
        <img id={imageStyle.image} src={imageUrl} alt="avatar" onClick={()=>setCarousel({hidden:false, currentPos:imageData.index})}/>
        <h2 id={imageStyle.image_name}>{imageData.name}</h2>
      </div>
    </>
  );
}
