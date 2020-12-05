import React, { Component } from "react";
import "./assets/App.css";
import BarraBusca from "./componentes/BarraBusca";
import ContainerNotas from "./componentes/ContainerNotas";
import FormCadastro from "./componentes/FormCadastro";
import { Notas } from "./dados/Notas";
import { Categorias } from "./dados/Categorias";
class App extends Component {
  constructor() {
    super();
    this.notas = new Notas();
    this.categorias = new Categorias();
    this.state = { notas: [] };
  }

  render() {
    return (
      <div className="App">
        <BarraBusca />
        <section className="conteudo_principal">
          <FormCadastro
            criarCard={this.criarCard.bind(this)}
            categorias={this.categorias}
          />
          <ContainerNotas
            dados={this.state.notas}
            apagarCard={this.apagarCard.bind(this)}
            categorias={this.categorias}
          />
        </section>
      </div>
    );
  }

  criarCard(titulo, texto) {
    this.notas.criarCard(titulo, texto);
    this.setState({ notas: this.notas.notas });
  }

  apagarCard(index) {
    this.notas.notas.splice(index, 1);
    this.setState({ notas: this.notas.notas });
  }
}

export default App;
