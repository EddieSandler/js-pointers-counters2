// add whatever parameters you deem necessary
function sameFrequency(num1,num2) {
  //convert digits to arrays
  let arr1=createFrequencyCounter(num1.toString().split(''))
  let arr2=createFrequencyCounter(num2.toString().split(''))

  if(arr1.size!== arr2.size) return false

for (let num of arr1.keys()){
if(arr2.get(num)!== arr1.get(num)) return false
}
return true
}
function createFrequencyCounter(array) {
  let frequencies = new Map();

  for (let val of array) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}

sameFrequency(121,344)