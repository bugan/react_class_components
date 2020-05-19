import React, { Component } from "react";
import Card from "../Cards/Cards";
import "./estilo.css";

class ContainerCategorias extends Component {
  state = {};
  render() {
    return (
      <main class="container-notas">
        <header class="container-notas_cabecalho">
          <button>Criar</button>
        </header>
        <ul class="container-notas_lista">
          <li class="container-notas_item">
            <Card />
          </li>
          <li class="container-notas_item">
            <Card />
          </li>
          <li class="container-notas_item">
            <Card />
          </li>
          <li class="container-notas_item">
            <Card />
          </li>
          <li class="container-notas_item">
            <Card />
          </li>
          <li class="container-notas_item">
            <Card />
          </li>
        </ul>
      </main>
    );
  }
}

export default ContainerCategorias;
