function cariMean(arr) {

    var jumlah = 0
    
    for (let index = 0; index < arr.length; index++) {
        
        jumlah += arr[index];
    
        
    }
    var mean = jumlah / arr.length
    return Math.round(mean)
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7