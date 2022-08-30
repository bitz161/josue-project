import "./work-card.styles.css";
import { useContext, useState } from "react";
import { ProjectContext } from "../../context/project.context";
import RoomImg from "../../assets/project/room-preview.jpg";
import InsureImg from "../../assets/project/insure-homepage.jpg";
import TipImg from "../../assets/project/tip-calculator.jpg";
import SnapImg from "../../assets/project/snap-homepage.jpg";
import { motion } from "framer-motion";

const ProjectImages = [RoomImg, InsureImg, TipImg, SnapImg];

const WorkCard = () => {
  const { projectData } = useContext(ProjectContext);
  return (
    <div className="project-card-container">
      {projectData.map((data, index) => {
        const { project_name, live_link, code_link, id } = data;
        return (
          <motion.div
            key={id}
            className="inner-card-container"
            whileHover={{
              scale: 1.1,
              boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            }}
          >
            <motion.div
              className="images-container"
              style={{
                backgroundImage: `url(${ProjectImages[index]})`,
              }}
            />
            <div className="buttons-container">
              <div>{project_name}</div>
              <div>
                <a href={live_link}>
                  <button>Live Website</button>
                </a>
                <a href={code_link}>
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkCard;
