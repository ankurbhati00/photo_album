import Image from "../Image/image";
import imageListStyle from "./imageListStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { addDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import db from "../../firebaseInit";

export default function ImageList({ setView, currentAlbum }) {
  const [addImage, setAddImage] = useState(false);
  const [editImage, setEditImage] = useState(null);
  const [imagesData, setImagesData] = useState([]);

  const imageNameRef = useRef();
  const imageUrlRef = useRef();
  useEffect(() => {
    if (editImage) {
      console.log(editImage);
      setAddImage(true);
    }
  }, [editImage]);

  useEffect(() => {
    onSnapshot(doc(db, "photo-album", currentAlbum.albumId), (doc) => {
      setImagesData(doc.data().images);
    });

    setAddImage(false);
  }, []);

  function clearInputs() {
    setEditImage(null);
  }

  async function addImageToDb() {
    // add new image to db here
    let name = imageNameRef.current.value;
    let url = imageUrlRef.current.value;
    if (name && url) {
      await updateDoc(doc(db, "photo-album", currentAlbum.albumId), {
        images: [{ name, url }, ...imagesData],
      }).catch((err) => console.log(err));
      setAddImage(false);
    }
  }

  async function updateImage() {
    console.log(editImage);
    let name = imageNameRef.current.value;
    let url = imageUrlRef.current.value;
    if (name && url) {
      imagesData.splice(editImage.index, 1, { name, url });
      await updateDoc(doc(db, "photo-album", currentAlbum.albumId), {
        images: imagesData,
      }).catch((err) => console.log(err));
      setEditImage(null);
      setAddImage(false);
    }
  }

  async function deleteImage(i) {
    imagesData.splice(i, 1);
    await updateDoc(doc(db, "photo-album", currentAlbum.albumId), {
      images: imagesData,
    }).catch((err) => console.log(err));
  }

  function AddImageCard() {
    return (
      <div id={imageListStyle.create_image_container}>
        <h1>Add Image to album</h1>
        <input
          id={imageListStyle.image_input}
          type="text"
          placeholder="Name"
          ref={imageNameRef}
          defaultValue={editImage?.name}
        />
        <input
          id={imageListStyle.image_input}
          type="text"
          ref={imageUrlRef}
          placeholder="Url"
          defaultValue={editImage?.url}
        />
        <button id={imageListStyle.clear_btn} onClick={clearInputs}>
          Clear
        </button>
        {!editImage && (
          <button id={imageListStyle.create_btn} onClick={addImageToDb}>
            Add
          </button>
        )}
        {editImage && (
          <button id={imageListStyle.create_btn} onClick={updateImage}>
            Update
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      {addImage && <AddImageCard />}
      <div id={imageListStyle.image_list_container}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          id={imageListStyle.back_btn}
          onClick={() => setView("albums")}
        />
        <div id={imageListStyle.images_in_album}>
          {imagesData.length < 1
            ? "No images found in the album."
            : `Images in album ${currentAlbum.albumName}`}
        </div>
        {/* ADD IMAGE BUTTON */}
        {!addImage && (
          <button
            id={imageListStyle.add_image}
            onClick={() => {
              setAddImage(!addImage);
              clearInputs();
            }}
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
        {imagesData.map((image, index) => (
          <Image
            setEditImage={setEditImage}
            imageData={{ index, ...image }}
            deleteImage={deleteImage}
          />
        ))}
      </div>
    </>
  );
}
