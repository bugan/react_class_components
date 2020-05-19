import React, { Component } from "react";
import "./estilo.css";

class Card extends Component {
  state = {};
  render() {
    return (
      <section class="card">
        <header class="card_titulo">
          <h3>Titulo</h3>
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
