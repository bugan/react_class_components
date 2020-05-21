import React, { Component } from "react";
import "./estilo.css";
class FormCadastro extends Component {
  state = {};
  render() {
    return (
      <div class="form-cadastro_container">
        <form class="form-cadastro">
          <label>Título</label>
          <input type="text" placeholder="Título" class="form-cadastro_input" />
          <label>Conteúdo</label>
          <textarea placeholder="Nota" class="form-cadastro_input" rows="15" />

          <button class="form-cadastro_input form-cadastro_submit">
            Criar
          </button>
        </form>
      </div>
    );
  }
}

export default FormCadastro;
