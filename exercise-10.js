function perkalianUnik(arr) {
    
    
  var tampungArr = [] //variabel menampung hasil perkalian unik dalam array

  var counter = 0 //counter loop 1

   

  while (counter < arr.length){ 
      
    var filterArr = arr.concat()  // variabel menampung hasil filter dari array (meng-exclude nilai dimana counter sedang = index). karena tiap loop concat baru, nilainya tidak akan termutasi saat displice

    filterArr.splice(counter,1) //splice isi dari array di index ke-`counter`

    var counterDalam = 0 //counter untuk nested loop

    var number = 1 //penampung hasil kali


    while (counterDalam < filterArr.length){

        number *= filterArr[counterDalam] //mengalikan seluruh isi dari filterArr
        
        counterDalam ++
      }
      tampungArr.push(number) //setelah loop selesai, nilai di tambahkan ke array penampung.

      
      counter ++
    }
    return tampungArr

  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]