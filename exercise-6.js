function angkaPalindrome(num) {
    
   function isPalindrome(n){  // cek apakah input palindrome
    var numInvers = '' 
    var numToString = `${n}`
    for (let index = numToString.length-1; index >=0; index--) {
        numInvers += numToString[index]
    }
    return numInvers === numToString  //return boolean
}
   
   var countUp = num + 1 //agar mengecek angka palindrom berikutnya meskipun input sudah palindrom

   while(true){
       if (isPalindrome(countUp)){
           return countUp       //while (true) baru akan keluar dari loop ketika bertemu return (memotong proses secara paksa dengan keluar fungsi)
       } else {
           countUp ++
       }
   }

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001