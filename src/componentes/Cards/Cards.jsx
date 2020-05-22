import React, { Component } from "react";
import "./estilo.css";
import Deletar from "./Deletar";
class Card extends Component {
  render() {
    return (
      <section className="card">
        <header className="card_cabecalho">
          <h3 className="card_titulo">{this.props.titulo}</h3>
          <Deletar apagarCard={this.apagarCard.bind(this)} />
        </header>
        <p className="card_texto">{this.props.texto}</p>
      </section>
    );
  }

  apagarCard() {
    this.props.apagarCard(this.props.index);
  }
}

export default Card;
