import "./home-content.styles.css";
import { ReactComponent as RandomLines } from "../../assets/random.svg";
import { ReactComponent as Facebook } from "../../assets/icons8-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons8-instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons8-linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons8-github.svg";
import CVResume from "../../assets/JosueGarcia-Resume.pdf";
import { useNavigate } from "react-router-dom";
const HomeContent = () => {
  const navigate = useNavigate();
  const MyWorkNavigate = () => {
    navigate("/project");
  };
  return (
    <footer className="homecontent-container" id="homeContent">
      <section>
        <div>Hey there,</div>
        <RandomLines />
      </section>
      <section>
        <div>
          My name is Josue, and I'm a web developer newcomer from Pampanga,
          Philippines. I am enthusiastic about creating and developing a Website
          that will complement my programming interests. I don't know
          everything, but I know where to look for answers.
        </div>
      </section>
      <section>
        <div onClick={MyWorkNavigate}>View Work</div>
      </section>
      <section className="social-media-container">
        <div>
          <a href="https://www.facebook.com/josue.a.garcia2">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/bitgarciaii/?hl=en">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/josue-garcia-47597b180/">
            <LinkedIn />
          </a>
          <a href="https://github.com/bitz161">
            <Github />
          </a>
        </div>
        <div>
          <a href={CVResume} download="Josue_Garcia_Resume">
            View my CV
          </a>
        </div>
      </section>
    </footer>
  );
};

export default HomeContent;
