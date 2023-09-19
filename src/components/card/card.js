import cardStyle from './card.module.css';
import imageLogo from '../../assets/images/image_logo.jpg';
export default function Card({setView}) {
    return (
      <div id={cardStyle.container} onClick={() => setView("images")}>
        <img id={cardStyle.image} src={imageLogo} alt="temp " />
        <h1>album name</h1>
      </div>
    );
}
