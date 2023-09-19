import imageStyle from './image.module.css';

export default function Image() {
    

    return (
      <>
        <div id={imageStyle.image_container}>
          <img id={imageStyle.image}
            src="https://img.freepik.com/free-photo/view-funny-cute-baby-monkey_23-2150758478.jpg?w=2000"
            alt="avatar"
          />
          <h2 id={imageStyle.image_name}>monkey</h2>
        </div>
      </>
    );
}