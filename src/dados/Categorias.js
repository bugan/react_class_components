export class Categorias {
  constructor() {
    this.incritos = [];
    this.categorias = [];
  }

  inscrever(func) {
    this.incritos.push(func);
  }

  desiscrever(func) {
    this.incritos = this.incritos.filter((f) => f != func);
  }

  nofificar() {
    this.incritos.forEach((inscrito) => {
      inscrito(this.categorias);
    });
  }

  criarCategoria(texto) {
    this.categorias.push(texto);
    this.nofificar();
  }
}
