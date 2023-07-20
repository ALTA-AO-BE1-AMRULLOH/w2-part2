function fibonacci(number) {
    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else {
      return fibonacci(number - 1) + fibonacci(number - 2);
    }
  }
  
  console.log(fibonacci(0));  // Output: 0
  console.log(fibonacci(2));  // Output: 1
  console.log(fibonacci(9));  // Output: 34
  console.log(fibonacci(10)); // Output: 55
  console.log(fibonacci(12)); // Output: 144

  /*
Dalam implementasi recursive ini, jika angka adalah 0, fungsi mengembalikan 0.
Jika angka adalah 1, ia mengembalikan 1. Untuk angka yang lebih besar dari 1,
secara recursive memanggil dirinya sendiri dengan angka - 1 dan angka - 2,
dan mengembalikan jumlah hasil dari dua panggilan recursive tersebut.
Proses ini berlanjut hingga kasus dasar tercapai (0 dan 1),
dan fungsi mengembalikan angka Fibonacci yang diinginkan. Perhatikan bahwa 
pendekatan recursive ini bisa jadi tidak efisien untuk nilai
angka yang lebih besar karena perhitungan yang berlebihan.
  */