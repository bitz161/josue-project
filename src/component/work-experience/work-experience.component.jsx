import "./work-experience.styles.css";
import { useContext } from "react";
import { WorkContext } from "../../context/employment.context";

const WorkExperience = () => {
  const { employmentData, setEmploymentData } = useContext(WorkContext);
  return (
    <div className="outer-work-container">
      {employmentData.map((data) => {
        const {
          id,
          employer,
          positionName,
          employerAddress,
          dateOfEmployment,
          duties,
        } = data;
        return (
          <div key={id} className="work-container">
            <div>
              <span>Company:</span> {employer}
            </div>
            <div>
              <span>Position:</span> {positionName}
            </div>
            <div>
              <span>Company Address:</span> {employerAddress}
            </div>
            <div>
              <span>Date:</span> {dateOfEmployment}
            </div>
            <div>
              <span>Duties:</span>
            </div>
            <ul>
              {duties.map((dutiesdata, index) => {
                return <li key={index}>{dutiesdata}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
