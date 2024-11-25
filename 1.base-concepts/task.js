"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let D = b*b - 4*a*c;
  if(D>0){ 
    arr[0] = (-b + Math.sqrt(D)) / (2*a);
    arr[1] = (-b - Math.sqrt(D)) / (2*a);
  }
  if(D == 0){
    arr[0] = -b / (2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
    let summa = amount - contribution;
    let credit = summa * (percent + (percent / (((1 + percent)**countMonths)-1)));
    credit = (credit * countMonths).toFixed(2);
   credit = parcent(credit)
    return credit;
}
