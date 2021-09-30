function curso(NomeCurso, NotaAprov, FaltaMax, ListEstudante) {
  this.NomeCurso = NomeCurso;
  this.NotaAprov = NotaAprov;
  this.FaltaMax = FaltaMax;
  this.ListEstudante = ListEstudante;
}

let curso1 = new curso('curso 1', 8, 9, []);
let curso2 = new curso('curso 2', 5, 10, []);

let listaCurso = [curso1, curso2];
console.log(listaCurso);

this.calcularMedia = function (Aluno) {
  if (Aluno.calcularMedia() >= this.NotaAprov && Aluno.quantfaltas < this.FaltaMax) {
    return true;
  }

  else if (Aluno.calcularMedia() >= this.NotaAprov && Aluno.quantfaltas === this.FaltaMax) {
    return false;
  }

  else {
    return false;
  }