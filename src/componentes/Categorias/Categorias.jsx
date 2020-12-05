import React, { Component } from "react";
import "./estilo.css";
import Categoria from "./Categoria";
class Categorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this.novasCaterias = this.novasCaterias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCaterias);
  }

  componentWillUnmount() {
    this.props.categorias.desiscrever(this.novasCaterias);
  }

  adicionarCategoria(texto) {
    console.log(this.props);
    this.props.categorias.criarCategoria(texto);
  }

  novasCaterias(categorias) {
    this.setState({ categorias });
  }

  _handleEventoInput(e) {
    if (e.keyCode == 13) {
      this.adicionarCategoria(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    return (
      <section className="categorias">
        <ul className="categorias-lista">
          {this.state.categorias.map((texto) => {
            return (
              <li className="categoria-lista_item">
                <Categoria texto={texto} />
              </li>
            );
          })}
        </ul>
        <input
          placeholder="adicionar"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default Categorias;
