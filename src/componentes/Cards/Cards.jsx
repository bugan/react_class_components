import React, { Component } from "react";
import "./estilo.css";

class Card extends Component {
  render() {
    return (
      <section className="card">
        <header className="card_cabecalho">
          <h3 className="card_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default Card;
