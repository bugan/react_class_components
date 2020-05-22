import React, { Component } from "react";
import "./estilo.css";
class FormCadastro extends Component {
  state = {
    titulo: "Título",
    nota: "Escreva seu texto aqui....",
  };

  render() {
    return (
      <div className="form-cadastro_container">
        <form className="form-cadastro">
          <label>Título</label>
          <input
            type="text"
            placeholder={this.state.titulo}
            className="form-cadastro_input"
            onChange={this._handleMudancaTitulo.bind(this)}
          />
          <label>Conteúdo</label>
          <textarea
            placeholder={this.state.nota}
            className="form-cadastro_input"
            rows="15"
            onChange={this._handleMudancaNota.bind(this)}
          />

          <button
            className="form-cadastro_input form-cadastro_submit"
            onClick={this.enviarFormulario.bind(this)}
          >
            Criar
          </button>
        </form>
      </div>
    );
  }

  enviarFormulario(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.criarCard(this.state.titulo, this.state.nota);
  }

  _handleMudancaNota(e) {
    e.stopPropagation();
    this._alterarEstado("nota", e.target.value);
  }

  _handleMudancaTitulo(e) {
    e.stopPropagation();
    this._alterarEstado("titulo", e.target.value);
  }

  _alterarEstado(atributo, valor) {
    let novoEstado = { ...this.state };
    novoEstado[atributo] = valor;
    this.setState(novoEstado);
  }
}

export default FormCadastro;
