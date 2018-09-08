function tentukanDeretGeometri(arr) {
    
    var arrayBagi = []
    var counterBegin = 0
    var counterEnd = 2

    while (counterBegin < arr.length-1 && counterEnd <= arr.length){
   

        var arrayPembanding = arr.slice(counterBegin,counterEnd)
        var sisa = arrayPembanding[1]/arrayPembanding[0]
        arrayBagi.push(sisa)
       
        

       


        counterBegin++
        counterEnd++
    }
    
    return arrayBagi.every(function(number){return number === arrayBagi[0]})        

  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false