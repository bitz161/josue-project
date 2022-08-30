import "./about.styles.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

const AboutMe = () => {
  return (
    <motion.div className="about-container">
      <div>
        <div>Josue Garcia II</div>
        <div>
          <div>+639568165713</div>
          <div>josuegarciaii@yahoo.com</div>
        </div>
        <div>Angeles Ctiy, Pampanga, Philippines 2009</div>
      </div>
      <section className="about-link-container">
        <div>
          <Link to="/about/">Work Experience</Link>
        </div>
        <div>
          <Link to="/about/skills">Skills</Link>
        </div>
        <div>
          <Link to="/about/education">Education</Link>
        </div>
      </section>
      <section>
        <Outlet />
      </section>
    </motion.div>
  );
};

export default AboutMe;
