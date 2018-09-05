function palindrome(kata) {
    
    var kataInvers = ''
    for (let index = kata.length-1; index >=0; index--) {
        kataInvers += kata[index]
        
    }    
    if (kataInvers === kata) {
        return true
    } else {
        return false
    }

  }
  
//Arjuna Sarumpaet