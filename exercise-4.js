

function dataHandling2(arr){
    arr.splice(2,1,'Provinsi Bandar Lampung')  // mengganti 'Lampung' dengan 'Bandar Lampung'
    arr.splice(4,1,'Pria', 'SMA Internasional Metro') // 'Mengganti 'Membaca' dengan 'Pria', 'SMA Intl Metro'
    console.log(arr) // log hasil array

    arr.splice(3,1,arr[3].split('/')) // mengganti 21/05/1989 dengan [21, 05, 1989]

    switch (arr[3][1]){  //switch case untuk mengecek & log bulan.
        case '01' : {
            console.log('Januari')
            break
        }
        case '02' : {
            console.log('Februari')
            break
        }
        case '03' : {
            console.log('Maret')
            break
        }
        case '04' : {
            console.log('April')
            break
        }
        case '05' : {
            console.log('Mei')
            break
        }
        case '06' : {
            console.log('Juni')
            break
        }
        case '07' : {
            console.log('Juli')
            break
        }
        case '08' : {
            console.log('Agustus')
            break
        }
        case '09' : {
            console.log('September')
            break
        }
        case '10' : {
            console.log('Oktober')
            break
        }
        case '11' : {
            console.log('November')
            break
        }
        case '12' : {
            console.log('Desember')
            break
        }
    }
    
    console.log(arr[3].concat().sort(function(a, b) { return a < b })) //sort descending [21, 05, 1989] jadi [21, 1989, 05] (2>1>0); di concat() agar array awal tidak termutasi

    console.log(arr[3].join('-'))   //join [21, 05, 1989] jadi string 21-05-1989

    if (typeof arr[1] == 'string') { // memastikan isi dari array adalah string
        if (arr[1].length > 15) {
            console.log(arr[1].slice(0,14)) //apabila panjang string > 15, dipotong dengan slice
        } else {
            console.log(arr[1]) //apabila <=15, langsung di log
        }
    } else {
        console.log('bukan string!') // output apabila bukan string
    }  
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

 //Arjuna Sarumpaet