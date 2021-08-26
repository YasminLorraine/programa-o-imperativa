function podeSubir(altura, acompanhante) {
    if (altura > 1.40 && altura < 2.00 && acompanhante >= 0) {
        console.log("Pode entrar no brinquedo");
    }
    else if (altura > 1.20 && altura <= 1.40 && acompanhante >= 1) {
        console.log("Somente com acompanhante");
    }
    else {
        console.log("Não poderá subir, nem acompanhado");
    }
    return podeSubir;
}

podeSubir(1.6, 3);
