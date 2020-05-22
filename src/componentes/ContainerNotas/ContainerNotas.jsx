import React, { Component } from "react";
import Card from "../Cards/Cards";
import "./estilo.css";

class ContainerNotas extends Component {
  state = {};
  render() {
    return (
      <main className="container-notas">
        <ul className="container-notas_lista">
          {this.props.dados.map((element, i) => {
            return (
              <li className="container-notas_item">
                <Card
                  titulo={element.titulo}
                  texto={element.texto}
                  apagarCard={this.props.apagarCard}
                  index={i}
                />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default ContainerNotas;
