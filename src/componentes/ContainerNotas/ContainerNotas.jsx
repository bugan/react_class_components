import React, { Component } from "react";
import Card from "../Cards/Cards";
import "./estilo.css";

class ContainerNotas extends Component {
  state = {};
  render() {
    return (
      <main class="container-notas">
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

export default ContainerNotas;
