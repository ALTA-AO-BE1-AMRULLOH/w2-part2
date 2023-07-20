function largestNumber(array) {
    if (array.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let largest = array[0]; // Assume the first element is the largest
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i]; // Update largest if a larger element is found
      }
    }
  
    return largest;
  }
  
  console.log(largestNumber([5, 2, 67, 37, 85, 19, 10])); // Output: 85
  console.log(largestNumber([5, 10, 20, 3, 98, 95])); // Output: 98
  console.log(largestNumber([20, 22, 18, 25, 75, 62, 88])); // Output: 88
  console.log(largestNumber([6, 23, 9, 5])); // Output: 23
  console.log(largestNumber([70, 44, 28, 18, 55, 68, 11])); // Output: 70