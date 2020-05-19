import React, { Component } from "react";
import "./estilo.css";
class MenuCategorias extends Component {
  state = {};
  render() {
    return (
      <aside class="menu-categorias">
        <section class="menu-categorias_section">
          <ul class="menu-categorias_lista">
            <li class="menu-categorias_item">Trabalho</li>
            <li class="menu-categorias_item">Férias</li>
            <li class="menu-categorias_item">Tarefas</li>
          </ul>
          <div class="menu-categorias_container_criar">
            <button class="menu-categorias_criar">+ categoria</button>
          </div>
        </section>
      </aside>
    );
  }
}

export default MenuCategorias;
