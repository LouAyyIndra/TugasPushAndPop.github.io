var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){ //untuk menghitung isi panjangnya data
        penumpang.push(namaPenumpang); //untuk menambah data kedalam array
        return penumpang; //untuk mengulang isi function
    } else {
        for (i=0; i<penumpang.length; i++){ //untuk mencari ulang isi  penjang data yang sudah di isi.
            if (penumpang[i] == undefined) { //jika isi penumpang kosong/underfined
                penumpang[i] = namaPenumpang; //manambahkan isi kursi yang kosong
                return penumpang;
            } else if (namaPenumpang == penumpang[i]){ //untuk mencari data sama yang telah diinput datanya
                console.log(namaPenumpang + ' sudah ada didalam angkot '); //memberikan informasi data yang sama/sudah ada
            } else if (i == penumpang.length - 1){ //karena 1 nilainya 0, dan penumpang.leght mempunyai nilai
                //1. fungsi - 1 setelah penumpang.lenght adalah untuk menyamakan nilai 1 dan penumpang.lenght.
                penumpang.push(namaPenumpang); //menambahkan nama penumpang
                return penumpang; //mengggembalkan isi array & keluar dari function
            }
        }
    }
}