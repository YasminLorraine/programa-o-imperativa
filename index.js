// Turma: 01 NT
// Integrantes: Alisson Pinho, Hiego Willy, Jhonathan Weber, Patricia Kushima, Yasmin Lorraine.
 
function rapidFood(opcao, tempo) {
    let msg;
  
  if (opcao > 5) {
    msg = ("Prato inexistente!");
  } else if (opcao <= 5) {
    if (opcao == 1) {
      if (tempo >= 20 && tempo < 30) {
        msg = ("A comida queimou!");
      } else if (tempo < 10) {
        msg = ("Tempo insuficiente!");
      } else if (tempo >= 30) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    } else if (opcao == 2 || opcao == 5) {
      if (tempo >= 16 && tempo < 24) {
        msg = ("A comida queimou!");
      } else if (tempo < 8) {
        msg = ("Tempo insuficiente!");
      } else if (tempo >= 24) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    } else if (opcao == 3) {
      if (tempo >= 30 && tempo < 45) {
        msg = ("A comida queimou!");
      } else if (tempo < 15) {
        msg = ("Tempo insuficiente!");
      } else if (tempo >= 45) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    } else if (opcao == 4) {
      if (tempo >= 24 && tempo < 36) {
        msg = ("A comida queimou!");
      } else if (tempo < 12) {
        msg = ("Tempo insuficiente!");
      } else if (tempo >= 36) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    }
  }
  return msg;
 }
  
 /*console.log("1: Pipoca");
 console.log("2: Macarrão");
 console.log("3: Carne");
 console.log("4: Feijão");
 console.log("5: Brigadeiro");*/
  
 console.log(rapidFood(7, 8));
