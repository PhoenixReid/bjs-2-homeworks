function getArrayParams(...arr) {
let min = Infinity
let max = -Infinity
let avg = 0
for (let i = 0; i < arr.length; i++){
    if(arr[i] < min){
    min = arr[i];
    }
    if(arr[i] > max){
    max = arr[i];
    }
    avg = avg + arr[i];
    }
    avg = (avg / arr.length);
    avg = avg.toFixed(2);
    avg = parseFloat(avg);
    return { min: min, max: max, avg: avg };
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
let summa = 0;
if(arr.length == 0){
     return 0;
 }
 for( let i = 0; i < arr.length; i++){
    summa += arr[i];
 }
 return summa;
}

function differenceMaxMinWorker(...arr) {
 let min = Infinity;
 let max = -Infinity;
if(arr.length == 0){
     return 0;
 }
 for(let i = 0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i]
    }
    if(max < arr[i]){
        max = arr[i]
    }  
 }
 return max - min
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
 let sumOddElement = 0;
    
if(arr.length == 0){
     return 0;
}
    
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
        sumEvenElement = sumEvenElement + arr[i]
    }
    else{
        sumOddElement = sumOddElement + arr[i]
    }
 }
    
return sumOddElement - sumEvenElement;
}

function averageEvenElementsWorker(...arr) {
let summa = 0;
let countSumma = 0;
if(arr.length == 0){
     return 0;
 }
 for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        summa = summa + arr[i]
        countSumma++
    }
 }
 return summa / countSumma

}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
        for (const arr of arrOfArr) {
            const result = func(...arr);
        
            if (result > maxWorkerResult) {
              maxWorkerResult = result;
            }
          }

        return maxWorkerResult
}
