//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]
  
  
  
  function dataHandling(arr) {  
    var counter = 0     //counter untuk while pertama
  
    while (counter < arr.length) {      //loop berjalan selama counter lebih kecil dari length array input
      var counterData = 0       //counter untuk while ke dua
      var data = ''         //penampung string, sekaligus mengosongkan string untuk digunakan kembali di loop berikutnya

      while (counterData < arr[counter].length) {    //loop berjalan selama counterData lebih kecil dari length array di masing masing index array induk
        switch (counterData) {  //switch case untuk mengisi penampung string data tergantung dari counterData (disesuaikan dengan index array dalam)
          case 0: {     
            data += `Nomor ID: ${arr[counter][counterData]} \n`     
            break
          }
          case 1: {
            data += `Nama Lengkap: ${arr[counter][counterData]} \n`
            break
          }
          case 2: {
            data += `TTL: ${arr[counter][counterData]}`
            break
          }
          case 3: {
            data += ` ${arr[counter][counterData]} \n`
            break
          }
          case 4: {
            data += `Hobi: ${arr[counter][counterData]} \n`
            break
          }   
        }
        counterData++ //increment loop dalam
        
      }
      console.log(data) //log isi dari string data yang sudah terisi
      counter++ //increment loop pertama
    }
  
  }
  
  dataHandling(input) //panggil fungsi
  
  
  /*
      expected output
      Nomor ID:  0001
  Nama Lengkap:  Roman Alamsyah
  TTL:  Bandar Lampung 21/05/1989
  Hobi:  Membaca
  
  Nomor ID:  0002
  Nama Lengkap:  Dika Sembiring
  TTL:  Medan 10/10/1992
  Hobi:  Bermain Gitar
  
  Nomor ID:  0003
  Nama Lengkap:  Winona
  TTL:  Ambon 25/12/1965
  Hobi:  Memasak
  
  Nomor ID:  0004
  Nama Lengkap:  Bintang Senjaya
  TTL:  Martapura 6/4/1970
  Hobi:  Berkebun
  
   */

   //Arjuna Sarumpaet