// add whatever parameters you deem necessary
function twoArrayObject(arr1,arr2) {
 //create an object
  const obj ={}
//iterate through arr1 to set keys
//set vals to arr2 element at the index
//if more keys than vals, set val to null
  arr1.map((el,idx)=>{
    obj[el]=arr2[idx] || null
  })

  return obj

}