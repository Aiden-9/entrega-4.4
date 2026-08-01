// Función principal que se ejecuta al presionar el botón
function calcularOperaciones() {
    // 1. Obtener los valores ingresados por el usuario desde el HTML
    // Usamos parseFloat para asegurarnos de que se traten como números y no como texto
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    // 2. Validar que los campos no estén vacíos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa ambos números para poder calcular.");
        return; // Detiene la ejecución si hay un error
    }

    // 3. Realizar las operaciones matemáticas
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    
    // Validación extra para la división por cero
    let division;
    if (num2 === 0) {
        division = "No se puede dividir por cero";
    } else {
        division = num1 / num2;
    }

    // 4. Enviar los resultados de vuelta al HTML
    document.getElementById('resSuma').textContent = suma;
    document.getElementById('resResta').textContent = resta;
    document.getElementById('resMultiplicacion').textContent = multiplicacion;
    document.getElementById('resDivision').textContent = division;

    // 5. Hacer visible la caja de resultados
    document.getElementById('cajaResultados').style.display = 'block';
}
