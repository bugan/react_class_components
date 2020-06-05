import React, { Component } from "react";
import "./estilo.css";
class Categoria extends Component {
  state = {};
  render() {
    return (
      <div>
        <p className="categoria-texto">{this.props.texto}</p>
      </div>
    );
  }
}

export default Categoria;
