import React, { Component } from "react";
import "./estilo.css";
class FormCadastro extends Component {
  state = {};
  render() {
    return (
      <div class="form-cadastro_container">
        <form class="form-cadastro">
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            class="form-cadastro_input"
          />
          <textarea
            name="conteudo"
            placeholder="Nota"
            class="form-cadastro_input"
            rows="15"
          />

          <input
            type="submit"
            value="Criar"
            class="form-cadastro_input form-cadastro_submit"
          />
        </form>
      </div>
    );
  }
}

export default FormCadastro;
