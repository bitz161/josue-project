import "./navbar.styles.css";
import { Outlet } from "react-router-dom";
import PaperPlane from "../paperplane/paper-plane.component";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div>
          <Link to="/josue-project/">HOME</Link>
        </div>
        <div>
          <Link to="/project">WORK</Link>
        </div>
        <div>
          <Link to="/about/">ABOUT</Link>
        </div>
        <div>CONTACT</div>
      </div>
      <Outlet />
      <PaperPlane />
    </>
  );
};
export default Navbar;
