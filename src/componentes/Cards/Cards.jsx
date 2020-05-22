import React, { Component } from "react";
import "./estilo.css";

class Card extends Component {
  state = {};
  render() {
    return (
      <section className="card">
        <header className="card_cabecalho">
          <h3 className="card_titulo">Titulo</h3>
          <div className="card_titulo_categoria">Categoria</div>
        </header>
        <p className="card_texto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quo
          ducimus laborum ad.
        </p>
      </section>
    );
  }
}

export default Card;
