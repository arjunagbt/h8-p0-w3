function tentukanDeretAritmatika(arr) {

    var arraySelisih = [] //tampung selisih yang akan dibandingkan

    var counterBegin = 0

    var counterEnd = 2

    while (counterBegin < arr.length-1 && counterEnd <= arr.length){
   

        var arrayPembanding = arr.slice(counterBegin,counterEnd) //membuat array untuk membandingkan 2 angka

        var selisih = arrayPembanding[1]-arrayPembanding[0] //menampung hasil selisih pengurangan 2 angka

        arraySelisih.push(selisih) //masukan nilai selisih ke array
       
        

       


        counterBegin++
        counterEnd++
    }
    
    return arraySelisih.every(function(number){return number === arraySelisih[0]})         //mengecek apakah tiap data di dalam array jumlahnya sama semua


  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false