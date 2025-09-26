const array = [1, 2, 3, 4, 5];
function doubleNumber(num){
    return num * 2;
}
function processArray(arr, callback){
    const result = arr.map(callback);
    console.log('Processed array:', result);
}
processArray(array, doubleNumber);
