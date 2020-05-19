import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BarraBusca from "./componentes/BarraBusca";
import MenuCategorias from "./componentes/MenuCategorias";
import ContainerCategorias from "./componentes/ConteinerNotas";
function App() {
  return (
    <div className="App">
      <BarraBusca />
      <MenuCategorias />
      <ContainerCategorias />
    </div>
  );
}

export default App;
