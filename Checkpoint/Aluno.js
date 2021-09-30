function Aluno(nome, quantfaltas, notas) {
    this.nome = nome;
    this.quantfaltas = quantfaltas;
    this.notas = notas;
  }
  
  let Aluno1 = new Aluno('Andre Silva', 5, [0, 20, 40]);
  let Aluno2 = new Aluno('Vinicius Machado', 6, [0, 1, 5, 8, 9, 10]);
  let Aluno3 = new Aluno('Yasmin Lorraine', 9, [0, 6, 9]);
  let Aluno4 = new Aluno('Patricia Souza', 4, [0, 8, 10]);
  let Aluno5 = new Aluno('Gabriel Silva', 10, [0, 5, 6]);
  let listaAlunos = [Aluno1, Aluno2, Aluno3, Aluno4, Aluno5];
  
  const calcularMedia = listaAlunos.map(function (aluno) {
    let soma = 0;
    for (const nota of aluno.notas) {
      soma += nota;
    }
    return { nome: aluno.nome, faltas: aluno.quantfaltas ,media: soma / aluno.notas.length };
  });
  
  console.log(calcularMedia);
  
  const faltas = listaAlunos.map(function (aluno) {
   let soma = 0;
    for (const nota of aluno.notas) {
      soma += nota;
    }
    return { nome: aluno.nome, faltas: aluno.quantfaltas + 1 ,media: soma / aluno.notas.length };
  });
  
  console.log(faltas);