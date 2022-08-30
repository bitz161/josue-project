import "./skills.styles.css";
import { ReactComponent as HTMLSkills } from "../../assets/icons8-html-5.svg";
import { ReactComponent as CSSSkills } from "../../assets/icons8-css3.svg";
import { ReactComponent as JSSkills } from "../../assets/icons8-javascript-logo.svg";
import { ReactComponent as BootstrapSkills } from "../../assets/icons8-bootstrap.svg";
import { ReactComponent as GitSkills } from "../../assets/icons8-git.svg";
import { ReactComponent as GithubSkills } from "../../assets/icons8-github-skill.svg";
import { ReactComponent as ReactSkills } from "../../assets/icons8-react.svg";
import React from "react";

const Skills = () => {
  return (
    <section className="skills-container">
      <div>
        <HTMLSkills />
      </div>
      <div>
        <CSSSkills />
      </div>
      <div>
        <JSSkills />
      </div>
      <div>
        <BootstrapSkills />
      </div>
      <div>
        <GitSkills />
      </div>
      <div>
        <GithubSkills />
      </div>
      <div>
        <ReactSkills />
      </div>
    </section>
  );
};
export default Skills;
