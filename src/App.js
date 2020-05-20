import React from "react";
import "./App.css";
import BarraBusca from "./componentes/BarraBusca/BarraBusca";
import ContainerCategorias from "./componentes/ContainerNotas/ContainerNotas";
import FormCadastro from "./componentes/FormCadastro/FormCadastro";
function App() {
  return (
    <div className="App">
      <BarraBusca />
      <section class="conteudo_container">
        <FormCadastro />
        <ContainerCategorias />
      </section>
    </div>
  );
}

export default App;
