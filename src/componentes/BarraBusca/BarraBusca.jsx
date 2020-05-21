import React, { Component } from "react";
import "../../assets/App.css";
import "./estilo.css";
class BarraBusca extends Component {
  state = {};
  render() {
    return (
      <article>
        <form class="barra-busca">
          <label class="barra-busca_titulo">Buscar:</label>
          <input type="text" nome="filtro" class="barra-busca_input" />
        </form>
      </article>
    );
  }
}

export default BarraBusca;
