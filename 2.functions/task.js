function getArrayParams(...arr) {
let min = 0
    let max = 0
    let avg = 0
    for (let i = 0; i < arr.length; i++)
        {
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
    avg -parseFloat(avg)
    return { min: min, max: max, avg: avg };
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
