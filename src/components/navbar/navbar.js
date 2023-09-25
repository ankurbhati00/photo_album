import navbarStyle from "./Navbar.module.css";
import logoImage from "../../assets/images/logo/logo.png";
function Navbar() {
  return (
    <>
      <div id={navbarStyle.header}>
        <img id={navbarStyle.img} src={logoImage} alt="logo"></img>
        <span id={navbarStyle.logo_text}>Photo Album</span>
      </div>
    </>
  );
}

export default Navbar;
