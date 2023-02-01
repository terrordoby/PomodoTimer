import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Container } from "./styles";

const LayoutDefault = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default LayoutDefault;
