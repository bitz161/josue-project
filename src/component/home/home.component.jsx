import "./home.styles.css";
import { motion } from "framer-motion";
import ProfilePicture from "../../assets/Profile.png";
import ArrowDown from "../../assets/down-arrow.png";
import HomeContent from "../home-content/home-content.component";

const Home = () => {
  // const handleContent = () =>

  return (
    <>
      <motion.div
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div>
          <motion.img src={ProfilePicture} alt="" className="profile-img" />
        </div>
        <div className="intro-container">
          <motion.h1
            animate={{
              y: [1, -20],
              textShadow: "10px 20px 10px rgba(0, 0, 0, 0.2)",
              transition: {
                ease: "easeInOut",
                yoyo: Infinity,
                duration: 1,
              },
            }}
          >
            Josue Garcia II
          </motion.h1>
          <div>Web Developer</div>
        </div>
      </motion.div>
      <div className="arrowdown">
        <a href="#homeContent">
          <motion.img
            src={ArrowDown}
            alt=""
            animate={{ y: -10, transition: { yoyo: Infinity, duration: 1 } }}
          />
        </a>
      </div>
      <HomeContent />
    </>
  );
};

export default Home;
