import React, { Component } from "react";
import "./estilo.css";

class Card extends Component {
  state = {};
  render() {
    return (
      <section class="card">
        <header class="card_cabecalho">
          <h3 class="card_titulo">Titulo</h3>
          <div class="card_titulo_categoria">Categoria</div>
        </header>
        <p class="card_texto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quo
          ducimus laborum ad.
        </p>
      </section>
    );
  }
}

export default Card;
