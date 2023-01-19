import "./styles.css";
import "./responsivo.css";
import React from "react";
import Menu from "./componentes/Menu";
import Quadrado from "./componentes/Quadrado";
import ComoFunc from "./componentes/ComoFunc";
import TiposCoisas from "./componentes/TiposCoisas";
import MenuF from "./componentes/MenuF";

export default function App() {
  return (
    <>
      <Menu />
      <Quadrado />
      <ComoFunc />
      <TiposCoisas />
      <MenuF />
    </>
  );
}
