function targetTerdekat(arr) {
   

    var index=0 

    while (index < arr.length) {
        
        var indexA = 0
        var indexB = 0

        if (arr[index] === 'x' ){
            indexA = arr.lastIndexOf('x')
            indexB = arr.indexOf('o')
                if(indexA === -1 || indexB === -1){
                    indexA=0
                    indexB=0
                }

            break
        }
       else if (arr[index] === 'o'){
            indexA = arr.lastIndexOf('o')
            indexB = arr.indexOf('x')
                if(indexA === -1 || indexB === -1){
                    indexA=0
                    indexB=0
                }
            break
        }
       else {
           index ++
       } 
        
   
    }
       

    
       return indexB - indexA
        


       
    }


  
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2