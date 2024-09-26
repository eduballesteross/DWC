export function suma(a, b) {
    return a + b;
  }
  
  export function resta(a, b) {
    return a - b;
  }
  
  export function multiplicacion(a, b) {
    return a * b;
  }
  
  export function division(a, b) {
    if (b === 0) {
      return "Error: División por 0.";
    } else {
      return a / b;
    }
  }
  