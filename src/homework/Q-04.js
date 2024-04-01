/*
(() => {

   APLICA DRY
  
  //EX - 1
  
  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }

  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

})();


*/
(function () {
    /* APLICA DRY */
    // Función reutilizable para realizar la operación de cálculo
    function calculateOperation(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    console.log(calculateOperation(12, 28, 333));
    // EX - 1
    // Usando la función calcularOperacion
    function calculateOperation1(a, b, c) {
        return calculateOperation(a, b, c);
    }
    function calculateOperation2(x, y, z) {
        return calculateOperation(x, y, z);
    }
    // EX - 2
    // Función reutilizable para calcular el área
    function calculateArea(lengthOrRadius, width) {
        if (width !== undefined) {
            // Calcular área del rectángulo
            return lengthOrRadius * width;
        }
        else {
            // Calcular área del rectángulo
            return Math.PI * lengthOrRadius * lengthOrRadius;
        }
    }
    // EX - 3
    // No hay cambios necesarios para este ejercicio
    function validateEmail(email) {
        //...código para validar aquí
        return false;
    }
    function validateUsername(username) {
        //...código para validar aquí
        return false;
    }
})();
