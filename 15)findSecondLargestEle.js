function findSecondLargestUsingMathMax(arr) {
    if (arr.length < 2) return undefined;  // Not enough elements for a second largest
    const largest = Math.max(...arr);
    const filteredArr = arr.filter(num => num !== largest);
    return Math.max(...filteredArr);
  }
  
  // Function without using built-in methods (Manual approach)
  function findSecondLargestWithoutMathMax(arr) {
    if (arr.length < 2) return undefined;  // Not enough elements for a second largest
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest === -Infinity ? undefined : secondLargest;
  }
  
  // Example arrays
  const arr1 = [10, 20, 4, 45, 99];
  const arr2 = [1, 1, 1, 1, 1];
  const arr3 = [100, 10, 200];
  const arr4 = [7];  // Only one element
  const arr5 = [-10, -5, -3, -1, -100];
  
  // Test cases
  console.log(findSecondLargestUsingMathMax(arr1));  // Output: 45
  console.log(findSecondLargestWithoutMathMax(arr1));  // Output: 45
  
  console.log(findSecondLargestUsingMathMax(arr2));  // Output: undefined
  console.log(findSecondLargestWithoutMathMax(arr2));  // Output: undefined
  
  console.log(findSecondLargestUsingMathMax(arr3));  // Output: 100
  console.log(findSecondLargestWithoutMathMax(arr3));  // Output: 100
  
  console.log(findSecondLargestUsingMathMax(arr4));  // Output: undefined
  console.log(findSecondLargestWithoutMathMax(arr4));  // Output: undefined
  
  console.log(findSecondLargestUsingMathMax(arr5));  // Output: -3
  console.log(findSecondLargestWithoutMathMax(arr5));  // Output: -3
  