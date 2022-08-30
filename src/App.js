import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/home/home.component";
import { AnimatePresence } from "framer-motion";
import OptionNavbar from "./routes/navbar/option-navbar.component";
import AboutMe from "./component/about/about.component";
import WorkExperience from "./component/work-experience/work-experience.component";
import Skills from "./component/skills/skills.component";
import Education from "./component/education/education.component";
import ProjectWork from "./component/work/work.component";
const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<OptionNavbar />}>
          <Route index element={<Home />} />
          <Route path="about/" element={<AboutMe />}>
            <Route index element={<WorkExperience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="education" element={<Education />} />
          </Route>
          <Route path="project" element={<ProjectWork />}></Route>
        </Route>
      </Routes>
      <OptionNavbar />
    </AnimatePresence>
  );
};

export default App;
