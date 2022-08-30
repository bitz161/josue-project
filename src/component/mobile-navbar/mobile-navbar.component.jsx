import "./mobile-navbar.styles.css";
import { ReactComponent as Hamburger } from "../../assets/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import { Link } from "react-router-dom";
const MNavbar = () => {
  const { activateSidebar, setActivateSidebar } = useContext(SidebarContext);

  const handleNavbar = () => {
    setActivateSidebar(!activateSidebar);
  };

  return (
    <div
      className={
        activateSidebar
          ? "mobile-container-disabled"
          : "mobile-container-enable"
      }
    >
      <div className={activateSidebar ? "visible" : "invisible"}>
        <Link to="/">HOME</Link>
      </div>
      <div className={activateSidebar ? "visible" : "invisible"}>
        <Link to="/project">WORK</Link>
      </div>
      <div className={activateSidebar ? "visible" : "invisible"}>
        <Link to="/about/">ABOUT</Link>
      </div>
      <div className={activateSidebar ? "visible" : "invisible"}>CONTACT</div>
      {activateSidebar ? (
        <CloseIcon onClick={handleNavbar} />
      ) : (
        <Hamburger onClick={handleNavbar} />
      )}
    </div>
  );
};

export default MNavbar;
