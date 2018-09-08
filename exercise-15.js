function groupAnimals(animals) {
   
    animals.sort()   //sort data secara alfabetik

    var output = [[]] //nested array penampung output

    output[0].push(animals[0])      //push data pertama dari array input ke array pertama dari array output

    var counterInput = 1        //counter input dimulai dari 1 karena data pertama input sudah di push ke dalam array
    var counterOutput = 0       //counter output dimulai dari 0 (alias selektor data output)

    while(counterInput < animals.length){  //cek data input satu persatu
        
        if (animals[counterInput].startsWith(output[counterOutput][0][0])){   //apabila data dari input ke-n dimulai dengan alfabet yang sama dari huruf pertama data pertama array ke-m dari array output.
            output[counterOutput].push(animals[counterInput])       //data dari array input akan di push ke dalam array ke-m (dikelompokkan)
        }

        else{       //apabila huruf pertama input ke-n tidak sama dengan huruf pertama data pertama array ke-m dari array output.
            counterOutput++ //counter output bertambah 1 (menggeser "selector data" satu indeks ke kanan)
            output[counterOutput] = [animals[counterInput]] //membuat array baru di index yang tadinya masih kosong berisi data baru
            
        }

        counterInput++ //"selector data" input digeser ke kanan satu indeks
    }

return output
   

}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]


  //Arjuna Sarumpaet