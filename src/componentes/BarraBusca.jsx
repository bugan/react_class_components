import React, { Component } from "react";
class BarraBusca extends Component {
  state = {};
  render() {
    return (
      <article>
        <form>
          <p>Buscar:</p>
          <input type="text" nome="filtro" />
        </form>
      </article>
    );
  }
}

export default BarraBusca;
