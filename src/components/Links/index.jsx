import { Container } from "./styles";
import Typical from "react-typical";
import LooperGrounp from "../../assets/looperGroup.svg";

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const index = () => {
  return (
    <Container>
      <div className="containerText" id="home">
        <div className="left">
          <h2>Olá👋, eu sou</h2>
          <Typical
            steps={["Alisson Ramon", 2500, "Ramon Dev", 2500]}
            loop={Infinity}
            wrapper="h1"
          />
          <span>Desenvolvedor Front-End</span>

          <div className="container-links">
            <a
              href="https://www.linkedin.com/in/ramon-dev/"
              target="_blank"
              className="btn btn-gradient-primary"
            >
              <FiLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/Ramonprog"
              target="_blank"
              className="btn btn-gradient-secondary"
            >
              <FiGithub />
              Git Hub
            </a>
          </div>
        </div>
        <div className="right">
          <img src={LooperGrounp} alt="looper background" />
        </div>
      </div>
    </Container>
  );
};

export default index;
