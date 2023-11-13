let resultadoCalculadoraRankeada = 60 - 2;
calculadoraRankeada(resultadoCalculadoraRankeada);

function calculadoraRankeada(resultadoCalculadoraRankeada) {
    let nivel = "";
  
    if (resultadoCalculadoraRankeada <= 10) {
      nivel = "Ferro";
    } else if (resultadoCalculadoraRankeada <= 20) {
      nivel = "Bronze";
    } else if (resultadoCalculadoraRankeada <= 50) {
      nivel = "Prata";
    } else if (resultadoCalculadoraRankeada <= 80) {
      nivel = "Ouro";
    } else if (resultadoCalculadoraRankeada <= 90) {
      nivel = "Diamante";
    } else if (resultadoCalculadoraRankeada <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Radiante";
    }
  
    console.log("O Herói tem saldo de " + resultadoCalculadoraRankeada + " e está no nível de " + nivel);
}