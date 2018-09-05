function pasanganTerbesar(num) {
    
    var arrNum = num.toString().split('')  //buat numbernya jadi array dengan di split

    
    var counterBegin = 0 //counter untuk argumen split pertama
    var counterEnd = 2 //counter untuk argumen split ke dua
    var tampung = arrNum.slice(counterBegin,counterEnd).join('') //variabel untuk menampung 2 angka pertama dari 2 indeks pertama sebagai string
    

    while (counterBegin < arrNum.length - 1 && counterEnd < arrNum.length){ //limit menyesuaikan length 
            
        
            
        
        if(tampung < arrNum.slice(counterBegin+1,counterEnd+1).join('')){  //kalau variabel tampungnya lebih kecil dari split index selanjutnya
           
            tampung = arrNum.slice(counterBegin+1,counterEnd+1).join('')  //variabel tampung diubah jadi nilai yang baru
           
        }
        counterBegin++ //increment 1
        counterEnd++ // increment 2
    }
    var tampungNumber = parseInt(tampung, 10)  //mengubah tipe data string jadi number (integer)
return tampungNumber
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99