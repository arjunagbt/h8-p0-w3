function mengelompokkanAngka(arr) {


    arrayKelompok = [[],[],[]]
    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index] % 3 === 0){
            arrayKelompok[2].push(arr[index])
        } else if ( arr[index] % 3 !== 0 && arr[index] % 2 === 0){
            arrayKelompok[0].push(arr[index])
        } else if (arr[index] % 3 !== 0 && arr[index] % 2 !== 0){
            arrayKelompok[1].push(arr[index])
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