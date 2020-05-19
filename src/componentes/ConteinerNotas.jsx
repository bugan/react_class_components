import React, { Component } from "react";
import Card from "./Cards";

class ContainerCategorias extends Component {
  state = {};
  render() {
    return (
      <main>
        <header>Cards</header>
        <ul>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </main>
    );
  }
}

export default ContainerCategorias;
