const calcular = (e)=>{
  e.preventDefault()

  const peso = document.getElementById("peso").value

  const altura = parseFloat(document.getElementById("altura").value)

  const imc = peso / (altura * altura)

  console.log("peso", peso);
  console.log("altura", altura);
  console.log(imc);
  
  if (imc < 18.5) {
    console.log("Abaixo do peso");
    document.getElementById("result").innerHTML = "Abaixo do peso";
  }else if (imc >= 18.6 && imc <= 24.9){
    console.log("Peso ideal");
document.getElementById("result").innerHTML = "Peso ideal"
  }else if(imc >= 25 && imc <= 29.9){
    console.log("Levemente acima do peso");
document.getElementById("result").innerHTML = "Levemente acima do peso"
  }else if(imc >= 30 && imc <= 34.9){
    console.log("Obesidade grau I");
document.getElementById("result").innerHTML = "Obesidade grau I"
  }else if(imc >= 35 && imc <= 39.0){
    console.log("obesidade Grau II");
document.getElementById("result").innerHTML = "Obesidade grau II"
  }else if (imc >= 40) {
    console.log("Obesidade grau III");
document.getElementById("result").innerHTML = "Obesidade grau III"
  } else {
    document.getElementById("result").innerHTML = "Insira um resultado válido"
  }

  
  document.getElementById("peso").value = ''
  document.getElementById("altura").value = ''
}
document.getElementById("form").addEventListener("submit", calcular);