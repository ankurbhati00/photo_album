import cardStyle from './card.module.css';
import imageLogo from '../../assets/images/image_logo.jpg';
export default function Card({ setView, albumName, albumId, setCurrentAlbum }) {
  
  // after clicking the album card set current album to show
  //change the current page as images
  function handleClick() {
    setView("images");
    setCurrentAlbum({albumId, albumName});
  }


  return (
    <div
      id={cardStyle.container}
      onClick={handleClick}
    >
      <img id={cardStyle.image} src={imageLogo} alt="temp " />
      <h1>{albumName}</h1>
    </div>
  );
}
