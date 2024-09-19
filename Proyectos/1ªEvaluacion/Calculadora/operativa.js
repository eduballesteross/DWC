document.getElementById("calcular").addEventListener("click", function(){

  const operador1 = parseFloat(document.getElementById("operador1").value);
  const operacion = document.getElementById("operacion").value.trim();
  const operador2 = parseFloat(document.getElementById("operador2").value);
  let resultado;

  if(isNaN(operador1) || isNaN(operador2)){

    resultado = "Introduzca números válidos.";

  }else{

    switch(operacion){

        case "+":

            resultado=operador1+operador2;
        break;

        case "-":

            resultado=operador1-operador2;
            break;

        case "*":

            resultado=operador1*operador2;
            break;

        case "/":

            if (operador2===0){

                resultado = "Error: División por 0.";
            }else{

                resultado = operador1 / operador2;
   
            }
            break;

            default:
                resultado = "Operación no válida. Usa +, -, *, /.";

    }

  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;


});