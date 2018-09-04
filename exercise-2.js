function balikString(string) {
    var str = "" //string kosong untuk menampung
    
 
    for (counter=string.length;counter > 0; counter --){
        str += string[counter - 1] // menambahkan string  dari index, dihitung mundur dari belakang sesuai counter
      }
     return str
    }
 
    
   
  console.log(balikString('Hello World!'))