import { suma, resta, multiplicacion, division } from "./operaciones.js";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-outline-primary').addEventListener('click', calculo);
});

function calculo() {
    let numero1 = parseFloat(document.querySelector("#numero1").value);  
    let numero2 = parseFloat(document.querySelector("#numero2").value);  
    let operacion = document.querySelector("#operacion").value;
    let resultado;  

    switch (operacion) {
        case "+":
            resultado = suma(numero1, numero2);  
            break;

        case "-":
            resultado = resta(numero1, numero2);  
            break;

        case "*":
            resultado = multiplicacion(numero1, numero2);  
            break;

        case "/":
            if (numero2 === 0) {
                resultado = "Error: División por 0.";
            } else {
                resultado = division(numero1, numero2);  
            }
            break;

        default:
            resultado = "Operación no válida. Usa +, -, *, /.";
            break;
    }

    document.querySelector("#resultado").textContent = `Resultado: ${resultado}`; 
}
