import { createContext, useState, useEffect } from "react";
import PROJECTDATA from "../project-data.json";

export const ProjectContext = createContext({
  projectData: [],
});

export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(PROJECTDATA);
  const value = { projectData, setProjectData };
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
