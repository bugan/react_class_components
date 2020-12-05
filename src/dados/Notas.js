export class Notas {
  constructor() {
    this.notas = [];
  }

  criarCard(titulo, texto) {
    const n = new Nota(titulo, texto);
    this.notas.push(n);
  }
}

class Nota {
  constructor(titulo, texto) {
    this.titulo = titulo;
    this.texto = texto;
  }
}
