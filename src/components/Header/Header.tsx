import React from "react";
import { Container } from "./styles";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { Scroll, Timer } from "phosphor-react";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <nav>
        <Link to='/' title="timer">
          <Timer size={24} />
        </Link>
        <Link to='/history' title="historico">
          <Scroll size={24} />
        </Link>
      </nav>
    </Container>
  );
};

export default Header;
