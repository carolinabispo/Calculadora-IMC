const calcular = (e) => {
  e.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);

  const altura = parseFloat(document.getElementById("altura").value);

  document.getElementById("result-peso").innerHTML = peso;
  document.getElementById("result-altura").innerHTML = altura;
  // document.getElementById('nivel-imc').innerHTML=peso

  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    const imc = peso / (altura * altura);
    document.getElementById("result-imc").innerHTML = imc.toFixed(2);
    // const imc = peso / (altura * altura)
    // document.getElementById('result-imc').innerHTML=imc.toFixed(2)

   

    if (imc < 18.5) {
      document.getElementById("nivel-imc").innerHTML = "Abaixo do peso";
    } else if (imc >= 18.6 && imc <= 24.9) {
      document.getElementById("nivel-imc").innerHTML = "Peso ideal";
    } else if (imc >= 25 && imc <= 29.9) {
      document.getElementById("nivel-imc").innerHTML =
        "Levemente acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
      document.getElementById("nivel-imc").innerHTML = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.0) {
      document.getElementById("nivel-imc").innerHTML = "Obesidade grau II";
    } else if (imc >= 40) {
      document.getElementById("nivel-imc").innerHTML = "Obesidade grau III";
    } else {
      document.getElementById("result").innerHTML =
        "Insira um resultado válido";
    }
  } else {
    document.getElementById("result-peso").innerHTML = "";
    document.getElementById("result-altura").innerHTML = "";
    document.getElementById("result-imc").innerHTML = "";
  }

};

document.getElementById("form").addEventListener("submit", calcular);

const limpar = () => {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("result-peso").innerHTML = "";
  document.getElementById("result-altura").innerHTML = "";
  document.getElementById("result-imc").innerHTML = "";
  document.getElementById("nivel-imc").innerHTML = "";
};
