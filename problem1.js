/*
Recursive
*/
function exponentiation(x, n) {
    if (n < 0) {
      return "wrong input";
    } else if (n === 0) {
      return 1;
    } else {
      return x * exponentiation(x, n - 1);
    }
  }
  
  console.log(exponentiation(2, 3));    // Output: 8
  console.log(exponentiation(2, 12));   // Output: 4096
  console.log(exponentiation(7, 2));    // Output: 49
  console.log(exponentiation(9, 3));    // Output: 729
  console.log(exponentiation(22, 5));   // Output: 5153632
  console.log(exponentiation(1996, 0)); // Output: 1
  console.log(exponentiation(4213, -3)); // Output: "wrong input"