import React, { Component } from "react";
import Card from "../Cards/Cards";
import "./estilo.css";

class ContainerNotas extends Component {
  state = {};
  render() {
    return (
      <main className="container-notas">
        <ul className="container-notas_lista">
          {this.props.dados.map((element) => {
            return (
              <li className="container-notas_item">
                <Card />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default ContainerNotas;
