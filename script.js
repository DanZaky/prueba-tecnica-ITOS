function checkLeapYear() {
  const yearInput = document.getElementById('yearInput');
  const leapYearResult = document.getElementById('leapYearResult');
  const year = parseInt(yearInput.value);

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    leapYearResult.textContent = `${year} es un año bisiesto`
  }else {
    leapYearResult.textContent = `${year} no es un año bisiesto`
  }
}