function mengelompokkanAngka(arr) {


    arrayKelompok = [[],[],[]]  // membuat nested array penampung

    for (let index = 0; index < arr.length; index++) {  //cek satu persatu data di dalam array
        
        if (arr[index] % 3 === 0){          //apabila isi data ke-n kelipatan 3
            arrayKelompok[2].push(arr[index])       //push ke array penampung indeks ke 2
        } else if ( arr[index] % 3 !== 0 && arr[index] % 2 === 0){ //apabila isi data ke-n bukan kelipatan tiga, dan data adalah genap
            arrayKelompok[0].push(arr[index])   // push ke array indeks ke 0
        } else if (arr[index] % 3 !== 0 && arr[index] % 2 !== 0){ //apabila isi data ke-n bukan kelipatan tiga, dan data adalah ganjil
            arrayKelompok[1].push(arr[index]) //push ke array indeks ke 1
        }
        
    }

    return arrayKelompok
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]


  //Arjuna Sarumpaet