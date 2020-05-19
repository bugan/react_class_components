import React, { Component } from "react";
import "./estilo.css";
class BarraBusca extends Component {
  state = {};
  render() {
    return (
      <article>
        <form class="barra-busca">
          <p class="barra-busca_titulo">Buscar:</p>
          <input type="text" nome="filtro" class="barra-busca_input" />
        </form>
      </article>
    );
  }
}

export default BarraBusca;
