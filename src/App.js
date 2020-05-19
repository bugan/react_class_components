import React from "react";
import "./App.css";
import BarraBusca from "./componentes/BarraBusca/BarraBusca";
import MenuCategorias from "./componentes/MenuCategorias/MenuCategorias";
import ContainerCategorias from "./componentes/ContainerNotas/ContainerNotas";
function App() {
  return (
    <div className="App">
      <BarraBusca />
      <section class="conteudo_container">
        <MenuCategorias />
        <ContainerCategorias />
      </section>
    </div>
  );
}

export default App;
