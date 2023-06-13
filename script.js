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