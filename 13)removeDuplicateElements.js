function removeDupplicateElements(arr) {
    return [...new Set(arr)];
}


function removeDupplicateElementsWithoutBuiltIn(arr) {
    const newArr =[];
   arr.forEach(element => {
        !newArr.includes(element) && newArr.push(element);
   });
   return newArr;
    
}
console.log(removeDupplicateElements([1,2,2,3,4,4,4,5,6,7,5,6,7,]));
console.log(removeDupplicateElementsWithoutBuiltIn([1,2,2,3,4,4,4,5,6,7,5,6,7,]));