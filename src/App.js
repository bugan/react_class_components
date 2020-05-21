import React from "react";
import "./assets/App.css";
import BarraBusca from "./componentes/BarraBusca";
import ContainerNotas from "./componentes/ContainerNotas";
import FormCadastro from "./componentes/FormCadastro";
function App() {
  return (
    <div className="App">
      <BarraBusca />
      <section class="conteudo_principal">
        <FormCadastro />
        <ContainerNotas />
      </section>
    </div>
  );
}

export default App;
