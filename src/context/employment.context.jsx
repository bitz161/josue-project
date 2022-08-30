import { createContext, useState, useEffect } from "react";
import WORKDATA from "../work-data.json";

export const WorkContext = createContext({
  employmentData: [],
});

export const WorkProvider = ({ children }) => {
  const [employmentData, setEmploymentData] = useState(WORKDATA);
  const value = { employmentData, setEmploymentData };
  return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>;
};
