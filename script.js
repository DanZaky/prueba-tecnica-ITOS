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

//Función para realizar algunas operaciones básicas entre conjuntos
function setOperations() {
  const setOperationsResult = document.getElementById('setOperationsResult');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const arrayA = generateRandomLetters(10, alphabet);
  const arrayB = generateRandomLetters(10, alphabet);

  //Con el método Set quito los valores repetidos combinando ambos arreglos y con el from convierto el set en array de nuevo
  const union = Array.from(new Set ([...arrayA, ...arrayB]));
  //Con el método filter creo un nuevo arreglo con los elementos de B que se encuentran también en A
  const intersection = arrayA.filter((element) => arrayB.includes(element));
  //Con el método filter creo un nuevo arreglo con los elementos de A que no se encuentran en B
  const difference = arrayA.filter((element) => !arrayB.includes(element));
  //Se añaden los elementos de B que no se encuentran en A para la diferencia simétrica
  const symmetricDifference = [...difference, ...arrayB.filter((element) => !arrayA.includes(element))];

  setOperationsResult.innerHTML = `
    Arreglo A: ${arrayA.join(', ')}<br><br>
    Arreglo B: ${arrayB.join(', ')}<br><br>
    Unión (A ⋃ B): ${union.join(', ')}<br>
    Intersección (A ⋂ B): ${intersection.join(', ')}<br>
    Diferencia (A ∆ B): ${difference.join(', ')}<br>
    Diferencia Simétrica (A - B): ${symmetricDifference.join(', ')}
  `;
}

//Función para generar un arreglo con letras aleatorias
function generateRandomLetters(length, alphabet) {
  const letters = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    letters.push(randomLetter);
  }

  return letters;
}