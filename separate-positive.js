// add whatever parameters you deem necessary
function separatePositive(arr) {

  //initialize right and left pointers
  let start =0
  let end = arr.length-1

  while(start < end){
    if(arr[start]<0 && arr[end]>0){
      [arr[start],arr[end]]=[arr[end],arr[start]]
      start++
      end--
    } else {
      if(arr[start]>0){
        start ++
      } else {
        end--
      }
    }

  }

  return arr

}


separatePositive([-8,-7,8,-444,9990,777])