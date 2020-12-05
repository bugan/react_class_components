import React, { Component } from "react";
import "../../assets/App.css";
import "./estilo.css";
class BarraBusca extends Component {
  state = {};
  render() {
    return (
      <article>
        <form className="barra-busca">
          <label className="barra-busca_titulo">Buscar:</label>
          <input type="text" nome="filtro" className="barra-busca_input" />
        </form>
      </article>
    );
  }
}

export default BarraBusca;
