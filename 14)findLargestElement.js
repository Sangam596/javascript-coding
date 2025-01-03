function findLargestUsingMathMax(arr) {
    return arr.length === 0 ? undefined : Math.max(...arr);
  }
  
  function findLargestWithoutMathMax(arr) {
    let largest = arr.length === 0 ? undefined : arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  const arr = [-1, 2, 3, 4, 5, -6];
  
  console.log(findLargestUsingMathMax(arr));  // Output: 6
  console.log(findLargestWithoutMathMax(arr));  // Output: 6
  