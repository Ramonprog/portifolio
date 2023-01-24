import { Container } from "./styles";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Header = ({ OnCHangeTheme }) => {
  const { name } = useContext(ThemeContext);

  return (
    <Container>
      <div className="logo">
        <h2>Portifólio</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Acadêmico</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
        </ul>
      </nav>
      <Switch
        onChange={OnCHangeTheme}
        checked={name === "dark"}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offColor="#b6b3b3"
        onColor="#232323"
      />
    </Container>
  );
};

export default Header;
