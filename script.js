//Función para verificar si un año es bisiesto
function checkLeapYear() {
  const yearInput = document.getElementById('yearInput');
  const leapYearResult = document.getElementById('leapYearResult');
  const year = parseInt(yearInput.value);

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    leapYearResult.textContent = `${year} es un año bisiesto`
  }else if (isNaN(year)){
    leapYearResult.textContent = `Debes ingresar un año válido`
  }else {
    leapYearResult.textContent = `${year} no es un año bisiesto`
  }
}

//Función para generar una tabla con las columnas y filas ingresadas
function generateTable() {
  const rowsInput = document.getElementById('rowsInput');
  const columnsInput = document.getElementById('columnsInput');
  const tableContainer = document.getElementById('tableContainer');
  const rows = parseInt(rowsInput.value);
  const columns = parseInt(columnsInput.value);
  let tableHTML = '<table>';

  for (let i = 0; i < rows; i++) {
    tableHTML += '<tr>';

    for (let j = 0; j < columns; j++) {
      tableHTML += '<td></td>';
    }

    tableHTML += '</tr>';
  }

  tableHTML += '</table>';
  tableContainer.innerHTML = tableHTML;
}

//Función para ordenar un arreglo aleatorio sin usar .sort()
function sortArray() {
  const sortedArray = document.getElementById('sortedArray');
  const numbers = generateRandomNumbers(20, 1, 100);
  randomArray.textContent = `Arreglo aleatorio: ` + numbers.join(', ');
  const sortedNumbers = bubbleSort(numbers);
  sortedArray.textContent = `Arreglo ordenado: ` + sortedNumbers.join(', ');
}

//Función para generar un arreglo con números aleatorios
function generateRandomNumbers(length, min, max) {
  const numbers = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNumber);
  }

  return numbers;
}

//Función para ordenar un arreglo utilizando el algoritmo de ordenamiento de burbuja
function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}